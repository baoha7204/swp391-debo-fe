import { useEffect, useState } from "react";

export type ProgressData = {
  done: number;
  all: number;
};

const useProgress = ({
  initialValue,
  done,
  all,
}: {
  initialValue: number;
} & ProgressData) => {
  const [progress, setProgress] = useState(initialValue);

  useEffect(() => {
    const newProgress = (done / all) * 100;
    setProgress(newProgress);
  }, [done, all]);

  return progress;
};

export default useProgress;
