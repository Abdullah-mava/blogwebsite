"use client";
import { useRouter } from "next/navigation";

export default function Blogs() {
  const router = useRouter();

  const navigateToPosts = () => {
    router.push("/Posts");
  };

  return (
    <div id="blogs-section" className="bg-gray-100 py-16 px-5">
      {/* Container with max-width */}
      <div className="max-w-7xl mx-auto">
        {/* Blog card */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Want to explore the world of bikes? Click here to read our blogs!
          </h1>
          <p className="text-xl md:text-xl text-gray-700 text-center mb-6">
          Discover a world of biking knowledge! Learn about different types of bikes, their features, and how to choose the perfect one for your adventures. Click below to explore our blogs!
          </p>
          <div className="flex justify-center">
            <button
              onClick={navigateToPosts}
              className="inline-block px-6 py-3 text-lg bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-white"
            >
              Go to Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
