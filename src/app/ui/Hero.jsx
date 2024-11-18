"use client";

import React from "react";

const Hero = () => {
  return (
    <div
      className="flex tablet:flex-col mobile:flex-col"
      style={{ height: "80vh" }}
    >
      <div className="bg-gray-900 w-full flex justify-center items-center">
        <img
          src="/images/hero.jpg"
          alt="books"
          style={{ height: "70%", width: "60%", objectFit: "cover" }}
          className="rounded-lg rotateImg"
        />
      </div>

      <div className="bg-gray-400 tablet:py-32 mobile:py-10 w-full flex justify-start items-center">
        <div>
          <p className="font-nunito font-bold text-4xl mx-4 line-to-animate animation-typewriter laptop:text-3xl mobile:text-17">
            Discover Locations & Hostels Near You
          </p>
          <p className="font-semibold text-2xl ml-4 mr-40 my-3 mobile:hidden">
            "Explore new places, find your perfect hostel, and create
            unforgettable memories."
          </p>
          <p className="font-semibold text-xl mx-4 my-2 mobile:text-base mobile:my-0">
            Find and Book Your Ideal Hostel Easily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
