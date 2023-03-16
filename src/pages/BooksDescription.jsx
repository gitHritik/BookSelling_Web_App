import React from "react";
import Footer from "../components/Footer";
import Navbar from "./../components/Navbar";
import Books from "../components/Books";
import Description from "../components/Description";

const BooksDescription = () => {
  return (
    <>
      <Navbar />
      <Books />
      <Description />
      <Footer />
    </>
  );
};

export default BooksDescription;
