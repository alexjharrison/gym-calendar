import data from "./assets/data.json";
import { classTimes } from "./utils/time";
import { CalendarConfig } from "@schedule-x/calendar";

export const events: CalendarConfig["events"] = (data as string[][])
  .filter(row => row[6] === "Signed in")
  .map((row, i) => ({
    ...classTimes(row[0], row[2], row[1]),
    id: i,
    people: [row[3]],
    title: row[5],
    calendarId: ["Monday", "Wednesday"].includes(row[1])
      ? "cardio"
      : ["Friday", "Saturday"].includes(row[1])
      ? "combo"
      : ["Tuesday", "Thursday", "Sunday"].includes(row[1])
      ? "strength"
      : "?",
  }));

export const calendars: CalendarConfig["calendars"] = {
  cardio: {
    colorName: "cardio",
    lightColors: {
      main: "#f91c45",
      container: "#ffd2dc",
      onContainer: "#59000d",
    },
    darkColors: {
      main: "#ffc0cc",
      onContainer: "#ffdee6",
      container: "#a24258",
    },
  },
  strength: {
    colorName: "strength",
    lightColors: {
      main: "#f9d71c",
      container: "#fff5aa",
      onContainer: "#594800",
    },
    darkColors: {
      main: "#fff5c0",
      onContainer: "#fff5de",
      container: "#a29742",
    },
  },
  combo: {
    colorName: "combo",
    lightColors: {
      main: "#1cf9b0",
      container: "#dafff0",
      onContainer: "#004d3d",
    },
    darkColors: {
      main: "#c0fff5",
      onContainer: "#e6fff5",
      container: "#42a297",
    },
  },
};
