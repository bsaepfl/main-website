import * as React from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import HeroView from "../components/views/index/HeroView";
import Footer from "../components/Footer";
import NewsPopUp from "../components/NewsPopUp";
import EventsView from "../components/views/index/EventsView";
import JoinUsView from "../components/views/index/JoinUsView";
import StartupView from "../components/views/index/StartupView";

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
