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

const AppointmentPatientLists = [
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

const Branches = [
  {
    id: 1,
    name: "Debo Thu Duc",
    address: "123 Nguyen Van Linh, Thu Duc, Ho Chi Minh City",
    img: "https://nhakhoaparkway.com/wp-content/uploads/2024/04/z5362944066112_f7a412cc26ab13922f8cc20fb3c9e069.jpg",
  },
  {
    id: 2,
    name: "Debo Quan 5",
    address: "123 Nguyen Van Linh, Quan 5, Ho Chi Minh City",
    img: "https://nhakhoaparkway.com/wp-content/uploads/2024/04/z5362944066112_f7a412cc26ab13922f8cc20fb3c9e069.jpg",
  },
  {
    id: 3,
    name: "Debo Quan 9",
    address: "567 Nguyen Van Linh, Quan 9, Ho Chi Minh City",
    img: "https://nhakhoaparkway.com/wp-content/uploads/2024/04/z5362944066112_f7a412cc26ab13922f8cc20fb3c9e069.jpg",
  },
  {
    id: 4,
    name: "Debo Tay Ninh",
    address: "25 Lac Long Quan, TP Tay Ninh, Tay Ninh City",
    img: "https://nhakhoaparkway.com/wp-content/uploads/2024/04/z5362944066112_f7a412cc26ab13922f8cc20fb3c9e069.jpg",
  },
];

export { CalendarPatientEvents, AppointmentPatientLists, Branches };
