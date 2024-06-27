import { Dayjs } from "dayjs";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import useStep from "./hooks/useStep";
import useProgressDone from "./hooks/useProgress";
import { BranchCardProps } from "../Branch/BranchCard";
import { TreatmentCardProps } from "../Treatment/TreatmentCard";
import { DentistCardProps } from "../Dentist/DentistCard";
import useFirstTime from "./hooks/useFirstTime";
import { APPOINTMENT_RULE } from "@/constant/core";

type BookingType = {
  branch?: BranchCardProps;
  treatment?: TreatmentCardProps;
  dentist?: DentistCardProps;
  date?: Dayjs | null;
  slot?: number;
} | null;

type ProgressContextType = {
  data: BookingType;
  setData: Dispatch<SetStateAction<BookingType>>;
  done: number;
  handleDoneIncrement: () => void;
  handleDoneDecrement: () => void;
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
  isStepSkipped: (step: number) => boolean;
  firstTime: boolean;
};

const ProgressContext = createContext<ProgressContextType>({
  data: null,
  setData: () => null,
  done: 0,
  handleDoneIncrement: () => {},
  handleDoneDecrement: () => {},
  activeStep: 0,
  handleNext: () => {},
  handleBack: () => {},
  handleReset: () => {},
  isStepSkipped: () => false,
  firstTime: false,
});

const ProgressProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<BookingType>(null);
  const { activeStep, handleNext, handleBack, handleReset, isStepSkipped } =
    useStep();
  const { done, handleDoneIncrement, handleDoneDecrement, setDone } =
    useProgressDone();
  const { result } = useFirstTime();

  useEffect(() => {
    if (!result?.isFirstTime || Array.isArray(result.treatment)) {
      return;
    }
    setData({
      treatment: {
        ...result.treatment,
        num_of_appointment: result.treatment.numOfApp,
        rule_name: APPOINTMENT_RULE[0],
      },
    });
  }, [result]);

  useEffect(() => {
    if (result?.isFirstTime && done === 1) {
      setDone(2);
    }
  }, [done, result?.isFirstTime, setDone]);

  const value = {
    data,
    setData,
    done,
    handleDoneIncrement,
    handleDoneDecrement,
    activeStep,
    isStepSkipped,
    handleNext,
    handleBack,
    handleReset,
    firstTime: result?.isFirstTime || false,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export type { BookingType, ProgressContextType };
export { ProgressContext, ProgressProvider };
