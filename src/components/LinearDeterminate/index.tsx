import useProgress, { ProgressData } from "./hooks/useProgress";
import { BorderLinearProgress } from "./style";

const LinearDeterminate = ({ done, all }: ProgressData) => {
  const progress = useProgress({ initialValue: 0, done, all });
  return <BorderLinearProgress variant="determinate" value={progress} />;
};

export default LinearDeterminate;
