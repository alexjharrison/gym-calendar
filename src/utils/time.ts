const addMinutes = (date: Date, minutes: number) =>
  new Date(date.getTime() + minutes * 60000);

const createDate = (date: string, time: string) => new Date(`${date} ${time}`);

export const formatDate = (dt: Date) => {
  const year = dt.getFullYear();
  const month = String(dt.getMonth() + 1).padStart(2, "0"); // Month is 0-based, so add 1
  const day = String(dt.getDate()).padStart(2, "0");
  const hours = String(dt.getHours()).padStart(2, "0");
  const minutes = String(dt.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

export const classTimes = (dateStr: string, timeStr: string, day: string) => {
  const date = createDate(dateStr, timeStr);
  const classLength = day === "Saturday" ? 60 : 45;
  return {
    start: formatDate(date),
    end: formatDate(addMinutes(date, classLength)),
  };
};
