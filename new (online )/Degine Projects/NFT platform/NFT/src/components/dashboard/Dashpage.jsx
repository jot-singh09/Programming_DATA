import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Homepage/Down";
import Upper from "./Upper";
import Middle from "./Middle";
import Down from "./Down";

const Dashpage = () => {
  return (
    <div className="min-h-screen bg-[#F4F6FD] flex flex-col justify-between font-sans">
      <div>
        <Navbar />

        {/* MAIN DASHBOARD CONTAINER */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
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
