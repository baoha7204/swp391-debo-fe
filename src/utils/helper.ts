import {
  addSeconds,
  differenceInDays,
  endOfDay,
  startOfDay,
  format,
} from "date-fns";
import { enUS } from "date-fns/locale";
import dayjs from "dayjs";

export const formatUserName = (firstName: string, lastName: string) => {
  return [firstName, lastName].join(" ");
};

export const formatDentistName = (name: string | null) => {
  if (!name) return "None";
  return ["Dr.", name].join(" ");
};

export const formatDentistFullName = (
  firstName: string | null,
  lastName: string | null
) => {
  if (!firstName || !lastName) return "Dr. Unknown";
  return ["Dr.", firstName, lastName].join(" ");
};

export const VietnamesePhoneNumberRegex =
  /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

export const DateFormatS = (props: string | number | Date) => {
  const date = new Date(props);
  // const hour = date.getUTCHours();
  // const minute = date.getUTCMinutes();
  // const second = date.getUTCSeconds();
  let day: number | string = date.getUTCDate();
  let month: number | string = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  const newDate = day + "/" + month + "/" + year;
  return newDate;
};

export function percentToNumber(percent = 0) {
  const roundedNumber = parseFloat(percent.toFixed(2));
  return roundedNumber;
}

export const differenceInDaysOmitTime = (start: Date, end: Date) => {
  return differenceInDays(endOfDay(addSeconds(end, -1)), startOfDay(start));
};

export const sanitizeString = (str: string) => str.toLocaleLowerCase().trim();

export const getHourFormat = (hourFormat: "12" | "24") => {
  return hourFormat === "12" ? "hh:mm a" : "HH:mm";
};

export const formatDate = (date: Date) =>
  format(date, `dd MMMM yyyy ${getHourFormat("12")}`, {
    locale: enUS,
  });

export const isValidDate = (date: unknown) =>
  date instanceof Date && !isNaN(date.getTime());

export const formatTime = (time: number) =>
  dayjs(time + "", "HH").format("HH:mm A");

export const formatDateSlot = (
  slot: number,
  date?: Date,
  format = "YYYY-MM-DDTHH"
) => {
  const dateRes = dayjs(date).format("YYYY-MM-DD");
  return dayjs(`${dateRes}T${slot}`, format).toDate();
};

export const formatDateSlotString = (
  slot: number,
  date?: Date,
  format = "YYYY-MM-DDTHH"
) => {
  if (!date) return "None";
  const dateRes = dayjs(date).format("YYYY-MM-DD");
  return dayjs(`${dateRes}T${slot}`, format).format("YYYY-MM-DD HH:mm A");
};

export const formatDateOnlyString = (date?: Date, format = "YYYY-MM-DD") => {
  return !date ? "None" : dayjs(date).format(format);
};

export const formatVnMoney = (value: number | null) =>
  value
    ? value.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      })
    : "0 VND";

export const formatNumericMonthToAbbreviated = (value: number) =>
  dayjs(value + "", "M").format("MMM");

export const formatStatus = (date: Date, timeSlot: number, value: string) => {
  if (value !== "future") return value;
  const begin = formatDateSlot(timeSlot, date);
  if (dayjs().isBefore(begin)) return value;
  const end = formatDateSlot(timeSlot + 1, date);
  if (dayjs().isAfter(begin) && dayjs().isBefore(end)) return "on-going";
  return "done";
};
