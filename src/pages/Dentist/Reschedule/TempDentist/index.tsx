import { useContext } from "react";
import CircularIndeterminate from "@/components/CircularIndeterminate";
import CardList from "@/components/Card/CardList";
import DentistCard from "./DentistCard";
import { RescheduleContext } from "../reschedule.context";
import DefaultError from "@/pages/500";

const RescheduleTempDent = () => {
  const { data, isFetching } = useContext(RescheduleContext);
  return isFetching ? (
    <CircularIndeterminate />
  ) : !data ? (
    <DefaultError />
  ) : (
    <CardList Card={DentistCard} cards={data.dentList!} />
  );
};

export default RescheduleTempDent;
