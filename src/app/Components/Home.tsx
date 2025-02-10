"use client";
import React from "react";
import Image from "next/image";

const Home = () => {
  const handleScrollToBlogs = () => {
    const blogsSection = document.getElementById("blogs-section");
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home-section" className="relative w-full h-screen text-white">
      {/* Full-screen background image */}
      <div className="absolute inset-0 -z-10">
  <video 
    src="/bike-home.mp4" 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="w-full h-full object-cover"
  />
</div>

      {/* Content Overlay */}
      <div className="relative flex flex-col justify-center items-center h-full bg-black bg-opacity-30">
        <h1 className="text-5xl md:text-6xl font-bold mb-5 text-center">
        The Ultimate Guide to Choosing the Perfect Bike
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed text-center max-w-3xl mb-6">
          Bikes have long been a symbol of freedom, adventure, and sustainability. Whether you’re a casual rider, a fitness enthusiast, or an adrenaline junkie, there’s a perfect bike waiting for you. But with so many options available, how do you choose the right one? This guide will help you navigate the world of bikes and make an informed decision.
        </p>
        <button
          onClick={handleScrollToBlogs}
          className="px-8 py-3 text-lg bg-blue-700 rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Home;
