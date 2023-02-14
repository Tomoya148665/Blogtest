import { formatISO, parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja/index.js";

export const formatDatetime = (datetime: string, withTime = true): string =>
  new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "medium",
    timeStyle: withTime ? "short" : undefined,
    // Safari対応 https://github.com/w3c/respec/issues/1357#issuecomment-760913749
  }).format(new Date(datetime));

export const formatDatetimeWithDay = (
  datetime: string,
  withTime = true
): string => {
  // Safari対応 https://github.com/w3c/respec/issues/1357#issuecomment-760913749
  const time = new Date(datetime);
  const output = format(time, "yyyy年MM月dd日(eee)", { locale: ja });

  return withTime ? `${output} ${format(time, "HH:mm")}` : output;
};

export const parseISODateString = (dateString: string | Date) =>
  typeof dateString === "string" ? parseISO(dateString) : dateString;

export const ISODateTimeToDateString = (
  dateTimeString: null | undefined | string | Date,
  withoutDay = false
) => {
  if (!dateTimeString) return undefined;
  const dateTime = parseISODateString(dateTimeString);

  return withoutDay
    ? format(dateTime, "yyyy-MM")
    : formatISO(dateTime, { representation: "date" });
};
