import { AppointmentResponse } from "@/components/Booking/SummaryBooking/hooks/useCreateAppointment";
import { MAX_RESCHEDULE } from "@/constant/core";
import useStep from "@/hooks/useStep";
import appointmentApi from "@/utils/api/appointmentApi";
import { toastInfo } from "@/utils/toast";
import { errorToastHandler } from "@/utils/toast/actions";
import dayjs, { Dayjs } from "dayjs";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useLayoutEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";

type RescheduleDataType = {
  id?: string;
  appointment?: Omit<AppointmentResponse, "id">;
  newDate?: Dayjs;
  newSlot?: number;
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
});

const RescheduleProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<RescheduleDataType>(null);
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
    if (!id) {
      errorToastHandler({
        message: "Please choose an appointment to reschedule.",
      });
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
          setIsAllowed(false);
          return;
        }

        // Validate date logic
        const date = dayjs(result.data.startDate);
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
          result.data.timeSlot - 2 < dayjs().hour()
        ) {
          errorToastHandler({
            message:
              "You must reschedule an appointment before 2 hours of actual time",
          });
          setIsAllowed(false);
          return;
        }

        // Check if the appointment is reschedulable
        const remainAttempts = MAX_RESCHEDULE - result.data.rescheduleCount;
        if (remainAttempts <= 0) {
          errorToastHandler({
            message: "You can only reschedule an appointment twice.",
          });
          setIsAllowed(false);
          return;
        }

        setData((prev) => ({ ...prev, id, appointment: result.data }));
        toastInfo(
          `You can only reschedule this appointment ${remainAttempts} more time(s).`
        );
      } catch (error) {
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
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
  };

  return (
    <RescheduleContext.Provider value={value}>
      {children}
    </RescheduleContext.Provider>
  );
};

export type { RescheduleDataType, RescheduleContextType };
export { RescheduleContext, RescheduleProvider };
