import React from "react";
import Navbar from "./../components/Navbar";
import GetButton from "./../components/GetButton";
import Banner from "./../components/Banner";
import CardGrid from "./../components/CardGrid";
import Featured from "./../components/Featured";
import Secondhand from "./../components/Secondhand";
import SmallBanner from "./../components/SmallBanner";
import CircleOP from "./../components/CircleOP";
import Footer from "./../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <GetButton />
      <Banner />
      <CardGrid />
      <Featured />
      <Secondhand />
      <SmallBanner />
      <CircleOP />
      <Footer />
    </>
  );
};

export default Home;
