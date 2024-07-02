import { AppointmentResponse } from "@/components/Booking/SummaryBooking/hooks/useCreateAppointment";
import useStep from "@/hooks/useStep";
import { Dayjs } from "dayjs";
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
});

const RescheduleProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<RescheduleDataType>(null);
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
    id &&
      setData({
        id,
      });
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
  };

  return (
    <RescheduleContext.Provider value={value}>
      {children}
    </RescheduleContext.Provider>
  );
};

export type { RescheduleDataType, RescheduleContextType };
export { RescheduleContext, RescheduleProvider };
