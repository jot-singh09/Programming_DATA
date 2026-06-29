import burger from "../../assets/Burgerimg.png";
import another from "../../assets/another.png";
import fire from "../../assets/fire.svg";
import rarrow from "../../assets/rightarrow.svg";
import playicon from "../../assets/playicon.svg";
const Upper = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="text-white flex flex-col px-10 py-2 gap-2 max-md:px-5 max-md:py-1 " 
      >
      
        <div className=" flex gap-1 items-center 
        py-1 border border-orange-500 rounded-full w-50 justify-center max-xl:w-35 max-xl:text-sm">
          <img className="w-5 max-xl:hidden" src={fire} alt="fire" />
          <h1 className="font-black text-orange-600">
            Limited Daily offer
          </h1>
        </div>
        <div className=" flex flex-col gap-5 max-xl:gap-2 max-xl:py-1 py-2">
          <h1 className="text-6xl max-xl:text-4xl text-gray-300 font-black">
            Delious food <br /> delivered{" "}
            <span className="text-orange-500">fast</span>
          </h1>

          <h1 className="px-2 text-gray-300 text-xl max-xl:text-sm  max-md:text-[13px] max-md:px-1">
            Get
            <span className="text-orange-500 border-b-2 border-b-orange-500 px-1">
              20% OFF
            </span>{" "}
            on your first order
          </h1>
        </div>
        <div className="py-3 max-md:py-1 flex gap-6 items-center max-md:gap-3">
          <div>
            <button className="flex gap-3 max-md:px-2 items-center  bg-orange-600 border border-orange-600 rounded-lg px-4.5 py-2.5  max-md:py-1.5 max-md:font-semibold cursor-pointer">
              Order Now <img src={rarrow} className="w-6 max-md:w-4" alt="" />
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="border border-white rounded-full cursor-pointer p-2.5">
              <img src={playicon} className="w-6 max-md:w-5" alt="" />
            </h1>
            <h1 className=" cursor-pointer text-[18px] max-md:hidden">How it Works</h1>
          </div>
        </div>
         <div className="w-full justify-end items-end flex ml-20 absolute top-26 right-0 overflow-hidden brightness-[0.35] md:hidden">
        <img src={another} className="flex  overflow-hidden w-50  " alt="" />
      </div>
      </div>
      <div className="px-15 max-xl:py-5 max-md:hidden">
        <img className="w-150 max-xl:w-120 max-lg:w-110 " src={burger} alt="" />
      </div>
     
     
    </div>
  );
};

export default Upper;
