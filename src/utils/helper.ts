import { addSeconds, differenceInDays, endOfDay, startOfDay } from "date-fns";

export const formatUserName = (firstName: string, lastName: string) => {
  return [firstName, lastName].join(" ");
};

export const formatDentistName = (firstName: string, lastName: string) => {
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
