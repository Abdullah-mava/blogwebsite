"use client";
import React from "react";
import Comments from "@/app/Components/Comments";
type bike = {
  image: string;
  id: string;
  title: string;
  content: string;
};

const Bike = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const res = await fetch(`https://67a72cb0203008941f66d44f.mockapi.io/bikes/${id}`);
  const bikes: bike = await res.json();

 

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">
        {bikes.title}
      </h1>

      {/* Image */}
      <div className="flex justify-center mb-6">
        <img
          src={bikes.image}
          alt={bikes.title}
          className="rounded-lg shadow-md w-full max-w-lg h-auto object-cover"
        />
      </div>

      {/* Content */}
      <p className="text-gray-700 text-lg leading-relaxed text-center">
        {bikes.content}
      </p>
      <Comments/>
    </div>
  );
};

export default Bike;
