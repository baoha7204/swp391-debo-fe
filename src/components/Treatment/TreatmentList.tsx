import TreatmentCard from "./TreatmentCard";
import CardList from "../Card/CardList";
import useFetchTreatments from "./hooks/useFetchTreatments";
import CircularIndeterminate from "../CircularIndeterminate";

const TreatmentList = () => {
  const { treatments, isLoading } = useFetchTreatments();
  return isLoading ? (
    <CircularIndeterminate />
  ) : (
    <CardList Card={TreatmentCard} cards={treatments} />
  );
};

export default TreatmentList;
