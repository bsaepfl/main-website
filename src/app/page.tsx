import * as React from "react";
import Header from "../components/Header";
import HeroView from "../components/views/home/HeroView";
import Footer from "../components/Footer";
import EventsView from "../components/views/home/EventsView";
import JoinUsView from "../components/views/home/JoinUsView";
import StartupView from "../components/views/home/StartupView";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <div>
        <HeroView />
        <EventsView />
        <StartupView />
        <JoinUsView />
      </div>
      <Footer />
    </div>
  );
}
