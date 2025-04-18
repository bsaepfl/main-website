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

export interface Article {
  id: string;
  title: string;
  body: string;
  date: string;
  authors: string[];
  image?: string;
  sponsor?: string;
}

export interface Member {
  id: string;
  name: string;
  section: string;
  image?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
}