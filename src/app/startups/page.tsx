import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StartUpsView from "../../components/views/startups/StartUpsView";

const Startups = () => {
  return (
    <div>
      <Header />
      <div>
        <StartUpsView />
      </div>
      <Footer />
    </div>
  );
};

export default Startups;