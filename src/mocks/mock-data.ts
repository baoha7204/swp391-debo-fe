import { AppointmentListData } from "@/components/Appointment/AppointmentList/types/core";
import { ProcessedEvent } from "@aldabil/react-scheduler/types";

const CalendarPatientEvents: ProcessedEvent[] = [
  {
    event_id: 1,
    title: "Check up for Teeth Cleaning",
    start: new Date(new Date(new Date().setHours(9)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
  },
  {
    event_id: 2,
    title: "Teeth Cleaning",
    start: new Date(
      new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
        new Date().getDate() - 2
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(
        new Date().getDate() - 2
      )
    ),
  },
  {
    event_id: 3,
    title: "Teeth Whitening",
    start: new Date(
      new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
        new Date().getDate() + 2
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(11)).setMinutes(30)).setDate(
        new Date().getDate() + 2
      )
    ),
  },
  {
    event_id: 3,
    title: "Teeth Whitening",
    start: new Date(
      new Date(new Date(new Date().setHours(13)).setMinutes(30)).setDate(
        new Date().getDate() + 2
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(14)).setMinutes(30)).setDate(
        new Date().getDate() + 2
      )
    ),
  },
  {
    event_id: 4,
    title: "Check up",
    start: new Date(
      new Date(new Date(new Date().setHours(15)).setMinutes(30)).setDate(
        new Date().getDate() + 4
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(16)).setMinutes(30)).setDate(
        new Date().getDate() + 4
      )
    ),
  },
];

const AppointmentPatientLists: AppointmentListData[] = [
  {
    id: 1,
    name: "Check up for Teeth Cleaning",
    status: "Pending",
    treatment: "Teeth Cleaning",
    dentist: "Jane Doe",
    date: new Date(),
  },
  {
    id: 2,
    name: "Teeth Cleaning",
    status: "Pending",
    treatment: "Teeth Cleaning",
    dentist: "Jane Doe",
    date: new Date(),
  },
  {
    id: 3,
    name: "Check up for Root Canal",
    status: "Pending",
    treatment: "Root Canal",
    dentist: "Jane Doe",
    date: new Date(),
  },
  {
    id: 4,
    name: "Regular Check up",
    status: "Pending",
    treatment: "Common Check up",
    dentist: "Jane Doe",
    date: new Date(),
  },
  {
    id: 5,
    name: "Regular Check up",
    status: "Pending",
    treatment: "Common Check up",
    dentist: "Jane Doe",
    date: new Date(),
  },
  {
    id: 6,
    name: "Check up for Teeth Whitening",
    status: "Pending",
    treatment: "Teeth Whitening",
    dentist: "Jane Doe",
    date: new Date(),
  },
  {
    id: 7,
    name: "Teeth Whitening",
    status: "Pending",
    treatment: "Teeth Whitening",
    dentist: "Jane Doe",
    date: new Date(),
  },
  {
    id: 8,
    name: "Teeth Whitening",
    status: "Pending",
    treatment: "Teeth Whitening",
    dentist: "Jane Doe",
    date: new Date(),
  },
  {
    id: 9,
    name: "Teeth Whitening",
    status: "Pending",
    treatment: "Teeth Whitening",
    dentist: "Jane Doe",
    date: new Date(),
  },
  {
    id: 10,
    name: "Teeth Whitening",
    status: "Pending",
    treatment: "Teeth Whitening",
    dentist: "Jane Doe",
    date: new Date(),
  },
  {
    id: 11,
    name: "Teeth Whitening",
    status: "Pending",
    treatment: "Teeth Whitening",
    dentist: "Jane Doe",
    date: new Date(),
  },
  {
    id: 12,
    name: "Teeth Whitening",
    status: "Pending",
    treatment: "Teeth Whitening",
    dentist: "Jane Doe",
    date: new Date(),
  },
  {
    id: 13,
    name: "Teeth Whitening",
    status: "Pending",
    treatment: "Teeth Whitening",
    dentist: "Jane Doe",
    date: new Date(),
  },
  {
    id: 14,
    name: "Teeth Whitening",
    status: "Pending",
    treatment: "Teeth Whitening",
    dentist: "Jane Doe",
    date: new Date(),
  },
  {
    id: 15,
    name: "Teeth Whitening",
    status: "Pending",
    treatment: "Teeth Whitening",
    dentist: "Jane Doe",
    date: new Date(),
  },
];

export { CalendarPatientEvents, AppointmentPatientLists };
