"use client";
import React from "react";
import Link from "next/link";
const About = () => {
 

  return (
    <div id="about-section" className="bg-gray-100 py-16 px-5">
      {/* Outer container with max-width like main and navbar */}
      <div className="max-w-7xl mx-auto">
        {/* Inner container */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          About Us
          </h1>

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-md md:text-5xl leading-7 text-center md:text-left flex-1">
            we are passionate about everything related to bikes. Whether you're a casual rider, a fitness enthusiast, or an adrenaline-seeking mountain biker, our blog is your ultimate destination for biking knowledge.
            </p>
            
            <img
              src="/about-bike.jpg"
              alt="Contact Us"
              className="rounded-lg shadow-lg max-w-full md:max-w-xs w-full"
            />
          </div>

          {/* Button */}
          <div className="text-center mt-6">
           <Link href="/About"> <button
              className="px-6 py-3 text-lg bg-blue-400 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 text-white"
            >
              Find out now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
