import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PastEventsView from "../../components/views/pastevents/PastEventsView";

const PastEvents = () => {
  return (
    <div>
      <Header />
      <div>
        <PastEventsView />
      </div>
      <Footer />
    </div>
  );
};

export default PastEvents;

export const Head = () => <title>BSA - About</title>;