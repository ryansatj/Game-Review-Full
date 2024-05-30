import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-8">Game Review</h1>
      <p className="text-lg mb-12">Discover reviews across our users or review your games.</p>
      <a href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Join Us
      </a>
    </div>
  );
};

export default LandingPage;
