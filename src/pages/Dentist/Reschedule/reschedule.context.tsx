import { AppointmentResponse } from "@/components/Booking/SummaryBooking/hooks/useCreateAppointment";
import useStep from "@/hooks/useStep";
import appointmentApi from "@/utils/api/appointmentApi";
import { errorToastHandler } from "@/utils/toast/actions";
import dayjs from "dayjs";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useLayoutEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { RescheduleDentistCardProps } from "./TempDentist/DentistCard";

type RescheduleDataType = {
  id?: string;
  appointment?: Omit<AppointmentResponse, "id">;
  dentList?: RescheduleDentistCardProps[];
  newDentist?: RescheduleDentistCardProps;
} | null;

type RescheduleContextType = {
  data: RescheduleDataType;
  setData: Dispatch<SetStateAction<RescheduleDataType>>;
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
  isStepSkipped: (step: number) => boolean;
  isAllowed: boolean;
  setIsAllowed: Dispatch<SetStateAction<boolean>>;
  isFetching: boolean;
};

const RescheduleContext = createContext<RescheduleContextType>({
  data: null,
  setData: () => null,
  activeStep: 0,
  setActiveStep: () => 0,
  handleNext: () => {},
  handleBack: () => {},
  handleReset: () => {},
  isStepSkipped: () => false,
  isAllowed: false,
  setIsAllowed: () => false,
  isFetching: false,
});

const RescheduleProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<RescheduleDataType>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isAllowed, setIsAllowed] = useState(true);
  const {
    activeStep,
    setActiveStep,
    handleNext,
    handleBack,
    handleReset,
    isStepSkipped,
  } = useStep();
  const { id } = useParams();

  useLayoutEffect(() => {
    setIsFetching(true);
    if (!id) {
      errorToastHandler({
        message: "Please choose an appointment to reschedule.",
      });
      setIsFetching(false);
      setIsAllowed(false);
      return;
    }
    const abortController = new AbortController();
    // Fetch appointment detail
    const fetchRemote = async () => {
      try {
        const responseDetail = await appointmentApi.getDetail(
          id,
          abortController.signal
        );
        const result = responseDetail.data;

        if (!result.success) {
          errorToastHandler(result);
          return;
        }

        const detailData = result.data;

        // Validate date logic
        const date = dayjs(detailData.startDate);
        if (date.isBefore(dayjs(), "day")) {
          errorToastHandler({
            message: "You can't reschedule past appointments",
          });
          setIsAllowed(false);
          return;
        }

        // check present, before 2 hours
        if (
          date.isSame(dayjs(), "day") &&
          detailData.timeSlot - 2 < dayjs().hour()
        ) {
          errorToastHandler({
            message:
              "You must reschedule an appointment before 2 hours of actual time",
          });
          setIsAllowed(false);
          return;
        }

        // check temp dentist is exist yet
        if (detailData.temp_Dent_Id) {
          errorToastHandler({
            message: "This appointment has been rescheduled already",
          });
          setIsAllowed(false);
          return;
        }

        // check is requested yet
        if (detailData.isRequestedDentReschedule) {
          errorToastHandler({
            message: "This appointment has been requested rescheduling already",
          });
          setIsAllowed(false);
          return;
        }

        // Fetch temp dentists
        const responseTempDents = await appointmentApi.getRescheduleDentists02(
          {
            appointmentId: id,
            currentDentistId: detailData.dent_Id,
            startDate: dayjs(detailData.startDate).toDate().toDateString(),
            timeSlot: detailData.timeSlot,
            treatId: detailData.treatId,
          },
          abortController.signal
        );

        const resultTempDents = responseTempDents.data;

        if (!resultTempDents.success) {
          errorToastHandler(resultTempDents);
          return;
        }

        const dentistList = resultTempDents.data.list
          .map((dentist) => ({
            id: dentist.dent_Id,
            name: dentist.dentistName,
            avt: dentist.dent_Avt,
          }))
          .filter((dentist) => dentist.id !== detailData.dent_Id);

        if (dentistList.length === 0) {
          errorToastHandler({
            message: "There is no available dentist for this appointment.",
          });
        }

        setData((prev) => ({
          ...prev,
          id,
          appointment: result.data,
          dentList: dentistList,
        }));
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
      } finally {
        setIsFetching(false);
      }
    };

    fetchRemote();

    return () => abortController.abort();
  }, [id]);

  const value = {
    data,
    setData,
    activeStep,
    setActiveStep,
    handleNext,
    handleBack,
    handleReset,
    isStepSkipped,
    isAllowed,
    setIsAllowed,
    isFetching,
  };

  return (
    <RescheduleContext.Provider value={value}>
      {children}
    </RescheduleContext.Provider>
  );
};

export type { RescheduleDataType, RescheduleContextType };
export { RescheduleContext, RescheduleProvider };
