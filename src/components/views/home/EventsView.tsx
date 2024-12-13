import React from "react";

const EventsView = () => {

  return (
    <div className="w-full flex flex-col justify-start items-center bg-dark-900 relative">
      <div
        id="Events"
        className="h-[52px] sm:h-[70px] w-full absolute -top-[52px] sm:-top-[70px] pointer-events-none"
      />
      <div className="w-full max-w-[1100px] flex flex-col items-center py-20 px-4 sm:px-10 gap-16">
        <h2 className="w-full font-bold text-3xl sm:text-4xl text-dark-500 indent-2">
          Upcoming <span className="text-dark-200">Events</span>
        </h2>

        <iframe
          src="https://lu.ma/embed/calendar/cal-KuAvNkii7TFKkpK/events"
          className="w-[500] h-[800px] md:w-[800px] xl:w-[1000px] border-none rounded-xl"
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
  );
};

export default EventsView;
