export type TimeInterval = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type Time = {
  date: string;
  time: TimeInterval;
  timeArray: string[];
};
