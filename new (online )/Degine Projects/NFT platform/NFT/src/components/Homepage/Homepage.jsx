import Navbar from "../navbar/Navbar";
import Upper from "./Upper";
import Middle from "./Middle";
import Down from "./Down";

const Homepage = () => {
  return (
    <div className="bg-[#EDF1FB] text-gray-900 min-h-screen font-sans selection:bg-purple-700 selection:text-white">
      <Navbar />
      <main className="w-full">
        <Upper />

        <div className="">
        <Middle />
        </div>
      </main>
      <Down />
    </div>
  );
};

export default Homepage;
