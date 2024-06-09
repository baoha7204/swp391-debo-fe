import BranchCard from "./BranchCard";
import useFetchAllBranch from "./hooks/useFetchAllBranch";
import CardList from "../Card/CardList";
import CircularIndeterminate from "../CircularIndeterminate";

const BranchList = () => {
  const { branches, isLoading } = useFetchAllBranch();

  return isLoading ? (
    <CircularIndeterminate />
  ) : (
    <CardList Card={BranchCard} cards={branches} />
  );
};

export default BranchList;
