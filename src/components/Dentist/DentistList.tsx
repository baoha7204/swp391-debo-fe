import DentistCard from "./DentistCard";
import CardList from "../Card/CardList";
import useFetchDentists from "./hooks/useFetchDentists";
import CircularIndeterminate from "../CircularIndeterminate";

const DentistList = () => {
  const { dentists, isLoading } = useFetchDentists();
  return isLoading ? (
    <CircularIndeterminate />
  ) : (
    <CardList Card={DentistCard} cards={dentists} />
  );
};

export default DentistList;
