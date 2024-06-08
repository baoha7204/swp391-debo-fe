import { MAX_DONE } from "@/config";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

type BookingType = {
  branchId?: number;
  treatmentId?: number;
  dentistId?: number;
} | null;

type ProgressContextType = {
  data: BookingType;
  setData: Dispatch<SetStateAction<BookingType>>;
  done: number;
  handleDoneIncrement: () => void;
  handleDoneDecrement: () => void;
};

const ProgressContext = createContext<ProgressContextType>({
  data: null,
  setData: () => null,
  done: 0,
  handleDoneIncrement: () => {},
  handleDoneDecrement: () => {},
});

const ProgressProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<BookingType>(null);
  const [done, setDone] = useState(0);

  const handleDoneIncrement = () => {
    if (done < MAX_DONE) setDone(done + 1);
  };

  const handleDoneDecrement = () => {
    if (done > 0) setDone(done - 1);
  };

  const value = {
    data,
    setData,
    done,
    handleDoneIncrement,
    handleDoneDecrement,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export type { BookingType, ProgressContextType };
export { ProgressContext, ProgressProvider };
