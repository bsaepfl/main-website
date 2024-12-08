import React from "react";
import Image from "next/image";
import { pastEvents } from "../../../assets/pastevents";

const PastEventsView = () => {
  return (
    <div
      id="pastevents"
      className="w-full flex flex-col justify-start items-center bg-dark-100 text-dark-500 md:mt-[70px]"
    >
      <div className="w-full max-w-[1200px] flex flex-col items-center py-20 px-6 md:px-10 gap-12">
        <h2 className="w-full text-center font-bold text-3xl sm:text-4xl text-dark-500 indent-2 pb-8">
          Past Events <span className="text-dark-200"></span>
        </h2>
        <p className="w-full max-w-[1100px] text-center text-base sm:text-lg px-4">
          Here are all the past events either made or attended by the members of
          the Blockchain Student association.
        </p>
        <div className="w-full max-w-[800px] flex flex-col gap-16 px-4">
          {pastEvents.map((event, index) => (
            <Event
              key={`Event${index}`}
              img={event.img}
              date={event.date}
              title={event.title}
              month={event.month}
              day={event.day}
              place={event.place}
              description={event.description}
              link={event.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PastEventsView;

const Event = ({ img, date, title, month, day, place, description, link }) => {
  return (
    <a
      href={link}
      className="block hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="relative flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden h-64 max-w-[800px] mx-auto">
        <div className="relative h-64 md:h-auto md:w-1/3">
          <Image
            src={img}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />
        </div>
        <div className="flex flex-col justify-between p-6 md:w-2/3">
          <div>
            <p className="text-sm text-gray-500">{date}</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">{title}</h2>
            <p className="text-sm text-gray-500 mt-2">{place}</p>
            <p className="text-sm text-justify text-gray-700 mt-4">
              {description}
            </p>
          </div>
        </div>
        <div className="absolute top-4 right-4 text-center bg-orange-100 text-orange-700 px-4 py-2 rounded-md shadow-md">
          <p className="text-sm font-bold">{month}</p>
          <p className="text-xl font-bold">{day}</p>
        </div>
      </div>
    </a>
  );
};
