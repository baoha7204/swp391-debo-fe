import { Dayjs } from "dayjs";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import useStep from "./hooks/useStep";
import useProgressDone from "./hooks/useProgress";
import { BranchCardProps } from "../Branch/BranchCard";
import { TreatmentCardProps } from "../Treatment/TreatmentCard";
import { DentistCardProps } from "../Dentist/DentistCard";

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
});

const ProgressProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<BookingType>(null);
  const { activeStep, handleNext, handleBack, handleReset, isStepSkipped } =
    useStep();
  const { done, handleDoneIncrement, handleDoneDecrement } = useProgressDone();

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
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export type { BookingType, ProgressContextType };
export { ProgressContext, ProgressProvider };
