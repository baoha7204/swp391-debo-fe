import AppointmentList from "@/components/Appointment/AppointmentList";
import { API_ENDPOINTS } from "@/utils/api";

const DentistAppointmentList = () => {
  return <AppointmentList url={API_ENDPOINTS.DENTIST.APPOINTMENT.LIST} />;
};

export default DentistAppointmentList;
