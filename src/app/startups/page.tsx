import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StartUpsView from "../../components/views/startups/StartUpsView";
import { Metadata } from 'next';


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

export const metadata: Metadata = {
  title: 'BSA - About',
  description: 'Learn about our blockchain startups and initiatives',
  openGraph: {
    title: 'BSA - About',
    description: 'Learn about our blockchain startups and initiatives',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BSA - About',
    description: 'Learn about our blockchain startups and initiatives',
  },
};

