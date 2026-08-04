import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Homepage/Down";
import Upper from "./Upper";
import Middle from "./Middle";
import Down from "./Down";

const Dashpage = () => {
  return (
    <div className="min-h-screen bg-[#EDF1FB] text-gray-900 font-sans selection:bg-purple-700 selection:text-white flex flex-col justify-between relative overflow-hidden">
      {/* Ambient background glow effects matching Homepage */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-80 right-10 w-96 h-96 bg-indigo-300/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10">
        <div className="fixed z-10 w-full">
        <Navbar />
        </div>


        {/* MAIN DASHBOARD CONTAINER */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8 max-lg:pt-20 lg:pt-25">
          {/* Upper Section: Welcome Banner & Balance Stats */}
          <Upper />

          {/* Middle Section: Active Package & Our Packages Grid */}
          <Middle />

          {/* Down Section: Full-Width Recent Activities & Bottom CTA Banner */}
          <Down />
        </main>
      </div>

      {/* Page Footer */}
      <Footer />
    </div>
  );
};

export default Dashpage;
