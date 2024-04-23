import { DayProps, FaqType, ScheduleEvent } from "../types";
import { generateDate } from "../utils";

export const navigationPreEvent: DayProps[] = [
  {
    label: "Tue, 03 Oct",
    date: "2023-10-03",
    description: "Pre-Event",
  },
  {
    label: "Thu, 05 Oct",
    date: "2023-10-05",
    description: "Pre-Event",
  },
  {
    label: "Tue, 10 Oct",
    date: "2023-10-10",
    description: "Pre-Event",
  },
  {
    label: "Thu, 12 Oct",
    date: "2023-10-12",
    description: "Pre-Event",
  },
  {
    label: "Mon, 16 Oct",
    date: "2023-10-16",
    description: "Pre-Event",
  },
];

export const navigationEvent: DayProps[] = [
  {
    label: "Sat, 21 Oct",
    date: "2023-10-21",
    description: "1st Day",
  },
  {
    label: "Sun, 22 Oct",
    date: "2023-10-22",
    description: "2nd Day",
  },
];

export const schedule: ScheduleEvent[] = [
  // PRE EVENT
  {
    name: "Workshop #1: Introduction to Sui and Installation - BC 129",
    icon: "workshop",
    description: "",
    time: "18:00",
    date: generateDate("2023-10-03", 18, 0),
    duration: 2,
    value: "2023-10-03",
  },
  {
    name: "Office hours: In person at CE 1 104 and online via Telegram",
    icon: "team",
    description: "",
    time: "18:00",
    date: generateDate("2023-10-05", 18, 0),
    duration: 2,
    value: "2023-10-05",
  },
  {
    name: "Workshop #2: Little introduction & track presentation with projects. Place TBD",
    icon: "workshop",
    description: "",
    time: "18:00",
    date: generateDate("2023-10-10", 18, 0),
    duration: 2,
    value: "2023-10-10",
  },
  {
    name: "Office hours: In person at INM 203 and online via Telegram",
    icon: "team",
    description: "",
    time: "18:00",
    date: generateDate("2023-10-12", 18, 0),
    duration: 2,
    value: "2023-10-12",
  },
  {
    name: "Workshop #3: Latecomers & Deep Dive into the Ecosystem",
    icon: "workshop",
    description: "",
    time: "18:00",
    date: generateDate("2023-10-16", 18, 0),
    duration: 2,
    value: "2023-10-16",
  },

  // HACKATHON

  {
    name: "Registration",
    icon: "registration",
    description: "",
    time: "08:00",
    date: generateDate("2023-10-21", 8, 0),
    duration: 2,
    value: "2023-10-21",
  },
  {
    name: "Breakfast",
    icon: "breakfast",
    description: "",
    time: "08:00",
    date: generateDate("2023-10-21", 8, 0),
    duration: 2,
    value: "2023-10-21",
  },
  {
    name: "Opening Ceremony",
    icon: "ceremonyOpen",
    description: "",
    time: "10:00",
    date: generateDate("2023-10-21", 10, 0),
    duration: 0,
    value: "2023-10-21",
  },
  {
    name: "Sui Overview",
    icon: "workshop",
    description: "",
    time: "11:00",
    date: generateDate("2023-10-21", 11, 0),
    duration: 1,
    value: "2023-10-21",
  },
  {
    name: "Team Building",
    icon: "team",
    description: "",
    time: "11:30",
    date: generateDate("2023-10-21", 11, 30),
    duration: 0,
    value: "2023-10-21",
  },
  {
    name: "Hacking Start!",
    icon: "code",
    description: "",
    time: "12:00",
    date: generateDate("2023-10-21", 12, 0),
    duration: 0,
    value: "2023-10-21",
  },
  {
    name: "Brunch",
    icon: "meal",
    description: "",
    time: "13:00",
    date: generateDate("2023-10-21", 13, 0),
    duration: 1,
    value: "2023-10-21",
  },
  {
    name: "Snacks",
    icon: "snacks",
    description: "",
    time: "17:00",
    date: generateDate("2023-10-21", 17, 0),
    duration: 1,
    value: "2023-10-21",
  },
  {
    name: "Dinner",
    icon: "meal",
    description: "",
    time: "20:00",
    date: generateDate("2023-10-21", 20, 0),
    duration: 1,
    value: "2023-10-21",
  },
  {
    name: "Midnight Snacks",
    icon: "snacks",
    description: "",
    time: "00:00",
    date: generateDate("2023-10-22", 0, 0),
    duration: 1,
    value: "2023-10-22",
  },
  {
    name: "Breakfast",
    icon: "breakfast",
    description: "",
    time: "07:00",
    date: generateDate("2023-10-22", 7, 0),
    duration: 2,
    value: "2023-10-22",
  },
  {
    name: "Project Submissions Due!",
    icon: "projectSubmission",
    description: "",
    time: "13:00",
    date: generateDate("2023-10-22", 13, 0),
    duration: 0,
    value: "2023-10-22",
  },
  {
    name: "Lunch",
    icon: "meal",
    description: "",
    time: "13:00",
    date: generateDate("2023-10-22", 13, 0),
    duration: 1,
    value: "2023-10-22",
  },
  {
    name: "Judging",
    icon: "judging",
    description: "",
    time: "13:00",
    date: generateDate("2023-10-22", 13, 0),
    duration: 2,
    value: "2023-10-22",
  },
  {
    name: "Closing Ceremony and Announcement of the Winners",
    icon: "podium",
    description: "",
    time: "15:00",
    date: generateDate("2023-10-22", 15, 0),
    duration: 2,
    value: "2023-10-22",
  },
];

export const faqQuestions: FaqType[] = [
  {
    question: "Can I participate?",
    answer:
      "You must be at least 18 years old and a student, including apprentices and PhD students, or have graduated in the past 24 months. You also need to be studying/graduated from a European University or live in Europe.",
  },
  {
    question: "How much does it cost?",
    answer: "Thanks to our sponsors, attendance is free (including food).",
  },
  {
    question: "I am new to Sui and Move, can I participate?",
    answer:
      "Absolutely! Our events are open to both beginners and veterans of the blockchain world. This event in particular will be tailored to attendees who have a basic knowledge in Computer Science and are interested in exploring or starting a journey in blockchain.",
  },
  {
    question:
      "Will there be any preparation if we do not know the programming language?",
    answer:
      "Of course! For the next three weeks, we will have workshops and Office hours where you can come to learn. If you sign up, you'll be able to enter the Telegram group for the hackathon in which Move developers await for your questions.\nFinally, not all of the hack is about code! You also need to have ideas and knowledge in Finance and marketing can be very helpful for your team!",
  },
  {
    question: "What is the size of the teams?",
    answer:
      "Teams can range from 3 to 5 participants. We recommend having 2 participants that know how to code and one from a Business background.",
  },
  {
    question: "Where is it?",
    answer:
      "The Sui x BSA Hackathon will take place in EPFL’s Lausanne campus, BC Building. You can find directions in the section above.",
  },
  {
    question: "What should I bring?",
    answer:
      "Your laptop and charger, as well as toiletries and a sleeping bag if you plan on sleeping there. Please bring a valid ID for admission.",
  },
  {
    question: "Where will I sleep?",
    answer:
      "We have limited space in a separate sleeping area, as well as showers. Please bring a sleeping bag if you’d like to use it.",
  },
  {
    question: "Will my travel be reimbursed?",
    answer:
      "We will reimburse up to 200 CHF of travel from outside of Switzerland, and 75 CHF of travel within Switzerland outside of the Lausanne area, upon presentation of receipts and a project submission at the end of the event.",
  },
  {
    question: "What if I don't have a team?",
    answer:
      "You don’t need one to apply! Part of the fun of a hackathon is meeting new people. We have created a Telegram group in which you will be added upon form registration were you will be able to find a team. You can also come during our workshops to find a team! It is also possible to create teams the first day of hacking.",
  },
  {
    question: "What about intellectual property?",
    answer:
      "We do not claim any rights on any of your intellectual property whatsoever. Everything you create, at Sui x BSA hackathon or not, belongs to you.",
  },
];
