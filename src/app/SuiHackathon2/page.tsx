// app/events/sui-hackathon-2/page.tsx
import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScheduleEvent from '../../components/ScheduleEvent';

interface Event {
  date: string;
  duration?: number;
  name: string;
  icon: string;
}

const hackathonEvents: Event[] = [
  {
    date: '2023-09-01T09:00:00',
    duration: 1,
    name: "Opening Ceremony",
    icon: "ceremonyOpen"
  },
  {
    date: '2023-09-01T10:00:00',
    duration: 2,
    name: "Sui Blockchain Workshop",
    icon: "workshop"
  },
  {
    date: '2023-09-01T13:00:00',
    duration: 1,
    name: "Networking Lunch",
    icon: "meal"
  },
  {
    date: '2023-09-01T14:00:00',
    duration: 4,
    name: "Hacking Begins",
    icon: "code"
  },
  {
    date: '2023-09-02T09:00:00',
    duration: 8,
    name: "Hacking Continues",
    icon: "code"
  },
  {
    date: '2023-09-03T09:00:00',
    duration: 4,
    name: "Final Hacking Session",
    icon: "code"
  },
  {
    date: '2023-09-03T14:00:00',
    duration: 2,
    name: "Project Presentations",
    icon: "presentation"
  },
  {
    date: '2023-09-03T16:00:00',
    duration: 1,
    name: "Judging",
    icon: "judging"
  },
  {
    date: '2023-09-03T17:00:00',
    duration: 1,
    name: "Closing Ceremony & Awards",
    icon: "ceremonyClose"
  },
];

export default function SuiHackathon2() {
  const isCurrentEvent = (event: Event) => {
    const now = new Date();
    const eventDate = new Date(event.date);
    return now >= eventDate && now < new Date(eventDate.getTime() + (event.duration || 0) * 60 * 60 * 1000);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold mb-2">Sui Hackathon 2</h1>
            <p className="text-xl">September 1-3, 2023 | Virtual Event</p>
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">About the Event</h2>
            <p className="text-gray-700 mb-6">
              Join us for an exciting 3-day virtual hackathon focused on building innovative applications on the Sui blockchain. 
              Whether you&apos;re a seasoned blockchain developer or just getting started, this event is perfect for you!
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Event Schedule</h2>
            <ul className="space-y-4 mb-8">
              {hackathonEvents.map((event, index) => (
                <ScheduleEvent
                  key={index}
                  event={event}
                  isCurrentEvent={isCurrentEvent}
                />
              ))}
            </ul>
            
            <div className="text" >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
