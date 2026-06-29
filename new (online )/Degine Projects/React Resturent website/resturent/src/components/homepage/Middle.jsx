import pizza from "../../assets/pizza.png";
import burger from "../../assets/burger.png";
import fingers from "../../assets/Fingers.png";
import noddle from "../../assets/Noodle.png";
import pasta from "../../assets/pasta.png";
import pasty from "../../assets/Pasty.png";
import smothy from "../../assets/Smoty.png";
import { useState } from "react";

const Middle = () => {
  const [dis, setdis] = useState("hidden");
  const [isopen, setisopen] = useState(false);
  const openall = () => {
    if (isopen == false) {
      setdis("flex");
      setisopen(true);
    } else if (isopen == true) {
      setdis("hidden");
      setisopen(false);
    }
  };
  return (
    <div className="px-10 pb-5 text-white max-md:px-4 max-md:py-5">
      <div className="flex justify-between px-1">
        <h1 className="text-2xl font-black">Popular Categories </h1>
        <h1 className="text-gray-400 md:px-5 md:text-lg cursor-pointer" onClick={openall}>
          View all
        </h1>
      </div>
      <div className="grid grid-cols-6 cursor-pointer py-4 max-md:py-3 gap-4 max-md:gap-2 max-md:grid-cols-3 ">
        <div className="border border-gray-700 rounded-lg flex flex-col items-center  justify-center py-1   bg-[#0A0C0E] hover:scale-110 transition-all duration-300 ease-in-out">
          <img src={pizza} className="w-35" alt="" />
          <h1 className="text-xl font-semibold">Pizza</h1>
        </div>

        <div className="border border-gray-700 rounded-lg flex flex-col items-center justify-center py-1   bg-[#0A0C0E] hover:scale-110 transition-all duration-300 ease-in-out">
          <img src={burger} className="w-35" alt="" />
          <h1 className="text-xl font-semibold">Burger</h1>
        </div>
        <div className="border border-gray-700 rounded-lg flex flex-col items-center justify-center py-1   bg-[#0A0C0E] hover:scale-110 transition-all duration-300 ease-in-out">
          <img src={noddle} className="w-35" alt="" />
          <h1 className="text-xl font-semibold">Biryani</h1>
        </div>
        <div className="border border-gray-700 rounded-lg flex flex-col items-center justify-center py-1   bg-[#0A0C0E] hover:scale-110 transition-all duration-300 ease-in-out">
          <img src={pasty} className="w-35" alt="" />
          <h1 className="text-xl font-semibold">Disserts</h1>
        </div>

        <div className="border border-gray-700 rounded-lg flex flex-col items-center justify-center py-0.5   bg-[#0A0C0E] hover:scale-110 transition-all duration-300 ease-in-out">
          <img src={fingers} className="w-28 max-md:w-20" alt="" />
          <h1 className="text-xl font-semibold">Fast Food</h1>
        </div>
        <div className="border border-gray-700 rounded-lg flex flex-col items-center justify-center py-1   bg-[#0A0C0E] hover:scale-110 transition-all duration-300 ease-in-out">
          <img src={pasta} className="w-32" alt="" />
          <h1 className="text-xl font-semibold">Healthy</h1>
        </div>

        <div
          className={`border border-gray-700 rounded-lg  flex-col items-center justify-center py-1   bg-[#0A0C0E] hover:scale-110 transition-all duration-300 ease-in-out ${dis}`}
        >
          <img src={smothy} className="w-20" alt="" />
          <h1 className="text-xl max-lg:text-[17px] font-semibold">Beverages</h1>
        </div>
      </div>
    </div>
  );
};

export default Middle;
