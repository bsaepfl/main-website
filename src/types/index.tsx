export type DayProps = {
  label: string;
  date: string;
  description: string;
};

export type ScheduleEventType = {
  name: string;
  icon: string;
  description: string;
  time: string;
  duration: number;
  value: string;
  date: Date;
};

export type SetDate = { (date: string, hours: number, minutes: number): Date };

export type CurrentEvent = {
  date: string;
  hour: number;
  minutes: number;
};

export type DiscoverButtonProps = {
  ping: boolean;
  href: string;
  title: string;
};

export type FaqType = {
  question: string;
  answer: string;
};

export type StartupType = {
  img: string;
  title: string;
  description: string;
  link: string;
};
