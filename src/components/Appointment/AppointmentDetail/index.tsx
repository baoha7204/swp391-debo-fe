import { useParams } from "react-router-dom";

const AppointmentDetail = () => {
  const { id } = useParams();
  return <h1>Appointment {id} Page</h1>;
};

export default AppointmentDetail;
