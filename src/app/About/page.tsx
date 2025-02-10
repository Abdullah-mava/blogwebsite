import React from "react";



export default function About() {
  return (
    <div className="min-h-screen bg-white">
      
      <div
        className="h-72 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/header-hero-1.jpg')",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-black text-8xl font-bold font-body ">About Us</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-700 text-4xl font-body">
        Rev up your passion for bikes with our expert insights, thrilling rides, and the latest gear – all in one place!
        </p>

        

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 font-body">why read our blogs</h2>
            <p className="text-gray-600 font-body text-3xl">
            Our goal is to help you make informed decisions about bikes, gear, and riding techniques. Whether you're looking for buying guides, cycling tips, or the latest biking trends, we've got you covered!
            Join us on this journey, and let’s ride together toward knowledge and adventure! 🚴‍♀️
            </p>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 font-body">Our Values</h2>
            <p className="text-gray-600 text-3xl font-body">
                      our passion for biking drives everything we do. We believe in sharing knowledge, inspiring adventures, and building a strong biking community. Our core values shape our content and commitment to our readers:

          🌍 Sustainability – We promote biking as an eco-friendly and healthy lifestyle choice.

          📚 Education – We provide accurate, valuable, and easy-to-understand information about bikes, maintenance, and riding techniques.

          🚴‍♀️ Adventure – Whether it’s a scenic ride or an off-road challenge, we encourage exploration and thrill-seeking on two wheels.

          🤝 Community – We aim to connect riders of all levels, fostering a space where cycling enthusiasts can share experiences and knowledge.

          🛠 Quality – From bike reviews to maintenance tips, we ensure well-researched and practical advice for our readers.

          Join us in celebrating the joy of biking! Let’s ride towards a better, healthier, and more adventurous future together. 🚵‍♂️💨
            </p>
          </div>
        </div>
      </div>
    
    </div>
  );
}