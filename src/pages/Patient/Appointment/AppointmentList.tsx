import AppointmentList from "@/components/Appointment/AppointmentList";
import { API_ENDPOINTS } from "@/utils/api";

const PatientAppointmentList = () => {
  return <AppointmentList url={API_ENDPOINTS.PATIENT.APPOINTMENT.LIST} />;
};

export default PatientAppointmentList;
