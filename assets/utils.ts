import { IMsgInfo } from "../ts-types/dataTypes";

//CLASS OBJECT FOR CREATING A NEW MESSAGE INSTANCE
export class Msg {
  text: string;
  readonly date: Date;
  readonly time: string;
  readonly id: string;

  constructor(text: string) {
    this.text = text;
    this.date = new Date();
    this.time = this.date.toLocaleTimeString().substring(0, 5);
    this.id = this.date.toString() + Math.random() * 1000;
  }

  private timeFormat(): string {
    let hour = this.date.getHours();
    let minute = this.date.getMinutes().toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });

    if (hour <= 11) {
      return this.time + " " + "AM";
    } else if (hour === 0) {
      12 + ":" + minute + " " + "AM";
    } else if (hour >= 13) {
      return hour - 12 + ":" + minute + " " + "PM";
    }
    return this.time + " " + "PM";
  }

  msgInfo() {
    return {
      text: this.text,
      time: this.timeFormat(),
      id: this.id,
      url: isUrl(this.text),
    };
  }
}

//FUNCTION TO SAVE ALL MESSAGES SENT TO LOCALSTORAGE
export const saveData = (key: string, value: IMsgInfo[]) =>
  value && window.localStorage.setItem(key, JSON.stringify(value));

//FUNCTION TO RETRIEVE ALL THE MESSAGES FROM LOCALSTORAGE (IF ANY)
export const retrieveData = (key: string) => {
  const messages = window.localStorage.getItem(key);
  if (messages) return JSON.parse(messages);
};

//FUNCTION TO CHECK IF A URL IS PRESENT IN THE MESSAGE SENT
export function isUrl(_string: string): string {
  var urlRE = new RegExp(
    "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?([^ ])+"
  );
  const url = _string.match(urlRE)?.shift();
  if (url?.includes("http")) return url;
  return "https://" + url;
}
