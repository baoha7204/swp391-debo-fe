import { useState } from "react";
import { BookingStage } from "../config";

const useProgressDone = () => {
  const [done, setDone] = useState(0);

  const handleDoneIncrement = () => {
    if (done < BookingStage.length) setDone(done + 1);
  };

  const handleDoneDecrement = () => {
    if (done > 0) setDone(done - 1);
  };

  return { done, handleDoneIncrement, handleDoneDecrement, setDone };
};

export default useProgressDone;
