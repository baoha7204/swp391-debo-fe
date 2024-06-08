import BranchCard from "./BranchCard";
import useFetchAllBranch from "./hooks/useFetchAllBranch";
import CardList from "../Card/CardList";

const BranchList = () => {
  const branches = useFetchAllBranch();

  return <CardList Card={BranchCard} cards={branches} />;
};

export default BranchList;
