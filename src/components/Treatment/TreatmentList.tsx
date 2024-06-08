import TreatmentCard from "./TreatmentCard";
import CardList from "../Card/CardList";

const treatments = [
  {
    id: 1,
    category: "Hair",
    name: "Haircut",
    description: "Wash, cut, and blow-dry",
    price: 30,
  },
  {
    id: 2,
    category: "Hair",
    name: "Hair coloring",
    description: "Coloring and blow-dry",
    price: 50,
  },
  {
    id: 3,
    category: "Hair",
    name: "Perm",
    description: "Perm and blow-dry",
    price: 70,
  },
  {
    id: 4,
    category: "Hair",
    name: "Perm",
    description: "Perm and blow-dry",
    price: 70,
  },
  {
    id: 5,
    category: "Hair",
    name: "Perm",
    description: "Perm and blow-dry",
    price: 70,
  },
  {
    id: 6,
    category: "Hair",
    name: "Perm",
    description: "Perm and blow-dry",
    price: 70,
  },
];

const BranchList = () => {
  return <CardList Card={TreatmentCard} cards={treatments} />;
};

export default BranchList;
