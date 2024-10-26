// app/events/upcomingEvents/page.tsx
import ScheduleEvent from '../../components/ScheduleEvent';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewEvent from '@/components/NewEvent';
import Image from 'next/image';
import events_illu from "../../../public/events/event_illustration.webp";
import events_illu_phone from "../../../public/events/event_illustration_phone.webp";




export default async function UpcomingEvents() {



  return (
    <div className="flex flex-col min-h-screen ">
      <Header />

      <div className="bg-dark-100 w-full pt-40 lg:pt-32 pb-80 px-14 lg:px-20 xl:px-36 2xl:px-52 font-bold z-0">
      <div className="flex flex-col gap-32 lg:gap-14 lg:mb-10 w-full">
        <div className="flex flex-col lg:flex-row justify-start gap-32 lg:gap-0 lg:justify-between 2xl:pr-20 w-full h-full items-center lg:items-start">
          <div className="flex flex-col items-center lg:items-start gap-10 lg:h-80">
            <div className="flex flex-col md:flex-row md:justify-start items-center gap-4">
              <span className="bg-gradient-to-r bg-clip-text text-transparent  from-gray-100 to-gray-500 text-6xl md:text-6xl">
                UPCOMING
              </span>
              <span className="bg-gradient-to-r bg-clip-text text-transparent from-gray-100 to-gray-500 text-6xl md:text-6xl">
                EVENTS
              </span>
            </div>
            <div className="hidden lg:flex lg:flex-row h-full">
              <div className="flex flex-col h-full items-center px-1 ">
                <div className="circle_blue"></div>
                <div className="w-0 h-48 border-4 rounded-b-xl border-dark-600 drop-shadow-6xl"></div>
              </div>
              <div className="w-full"></div>
            </div>
          </div>
          <div className="h-auto hidden lg:block">
            <Image src={events_illu} alt="illustration events" width={300} height={300}/>
          </div>
          <div className="h-auto lg:hidden">
            <Image src={events_illu_phone} alt="illustration events" width={100} height={100}/>
          </div>
        </div>

        <div className="">
          <NewEvent
            titleOrange="SUI"
            titleGray="Hackathon 2"
            titleGray2=""
            description="Our second Edition of the Sui Hackathon, with over 20000$ in pool prize !"
          />
        </div>
        

        
        
      </div>
    </div>

      <Footer />
    </div>
  );
}
