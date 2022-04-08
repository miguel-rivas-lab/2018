import { DateTime } from "luxon";

const initialDate = { years: 1990, months: 5, days: 5, hours: 13, };

const helpers = {
  dateToNumber(date) {
    return parseInt(date.split("/").join(""));
  },
  turingDate(date) {
    const newDate = DateTime.fromISO(date.replace(/[/]/g, "-")).minus(initialDate);
    return `J${newDate.year} M${newDate.month < 10 ? `0${newDate.month}` : newDate.month} T${newDate.day < 10 ? `0${newDate.day}` : newDate.day}`;
  },
  currentTuringDate() {
    const newDate = DateTime.now().minus(initialDate);
    return `J${newDate.year} M${newDate.month < 10 ? `0${newDate.month}` : newDate.month} T${newDate.day < 10 ? `0${newDate.day}` : newDate.day}`;
  },
  getID(client, date) {
    client = client.replace(/[\s./]/g, "").toLowerCase();
    date = date.replace(/\//g, "");
    return `${client}_${date}`;
  },
  getNewID(client, date) {
    client = client.replace(/[\s./]/g, "").toLowerCase();
    date = date.replace(/\//g, "");
    return `${date}_${client}`;
  },
  spinalCase(label) {
    return label
      .replace(/[!,.*+?^${(|[\\})\]:]/g, '')
      .replace(/&/g, 'and')
      .trim()
      .replace(/[ ]{1,}/g, "-")
      .toLowerCase();
  },
  pascalCase(label) {
    return label
      .replace(/[!,.*+?^${(|[\\})\]:]/g, '')
      .replace(/&/g, 'and')
      .trim()
      .replace(/[ ]{1,}/g, "");
  },
  titleCase(label) {
    return label
      .replace(/_/g, " ")
      .replace(/(?:^\w|[A-Z]|\b\w)/g, word => {
        return word.toUpperCase();
      })
      .trim()
      .replace(/-/g, " ");
  },
  hexToDec(number) {
    return parseInt(number, 16);
  },
  decToHex(number) {
    return (number).toString(16);
  },
  rad: Math.PI / 180,
  deg: 180 / Math.PI,
}

export default helpers;