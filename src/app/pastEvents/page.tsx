// app/events/pastEvents/page.tsx
import ScheduleEvent from '../../components/ScheduleEvent';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Events from "../../components/Events";

interface Event {
  date: string;
  duration?: number;
  name: string;
  icon: string;
}

async function getPastEvents(): Promise<Event[]> {
  // In a real application, you might fetch this data from an API
  const pastEvents: Event[] = [
    {
      date: '2023-08-15T09:00:00',
      duration: 2,
      name: "Summer Code Camp 2023 Opening Ceremony",
      icon: "ceremonyOpen"
    },
    // ... other events
  ];

  return pastEvents;
}

export default async function PastEvents() {
  const pastEvents = await getPastEvents();

  const isCurrentEvent = (event: Event) => {
    const now = new Date();
    const eventDate = new Date(event.date);
    return now >= eventDate && now < new Date(eventDate.getTime() + (event.duration || 0) * 60 * 60 * 1000);
  };
  
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-14">
        <Events />
      </main>

      <Footer />
    </div>
  );
}
