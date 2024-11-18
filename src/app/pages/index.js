"use client";

import React from "react";
import Header from "../ui/Header.jsx";
import Hero from "../ui/Hero.jsx";
import LocationList from "../ui/LocationList.jsx";
import Footer from "../ui/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <LocationList />
      <Footer />
    </div>
  );
};

export default Home;
