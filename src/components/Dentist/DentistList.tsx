import DentistCard from "./DentistCard";
import CardList from "../Card/CardList";

const dentists = [
  {
    id: 1,
    name: "John Doe",
    img: "https://cdn4.iconfinder.com/data/icons/alternative-medicine-flat/64/male-therapist-doctor-dentist-avatar-512.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    img: "https://cdn4.iconfinder.com/data/icons/alternative-medicine-flat/64/male-therapist-doctor-dentist-avatar-512.png",
  },
  {
    id: 3,
    name: "Johnny Sins",
    img: "https://cdn4.iconfinder.com/data/icons/alternative-medicine-flat/64/male-therapist-doctor-dentist-avatar-512.png",
  },
  {
    id: 4,
    name: "Bao Ha",
    img: "https://cdn4.iconfinder.com/data/icons/alternative-medicine-flat/64/male-therapist-doctor-dentist-avatar-512.png",
  },
];

const DentistList = () => {
  return <CardList Card={DentistCard} cards={dentists} />;
};

export default DentistList;
