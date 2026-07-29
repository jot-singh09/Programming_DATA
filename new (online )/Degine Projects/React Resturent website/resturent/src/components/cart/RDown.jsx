import { useContext, useState } from "react";
import { DatauseProvider } from "../../contextApi/DatauseProvider";

const RDown = () => {
  const [inputh, setInputh] = useState("xl:h-10");
  const [hei, sethie] = useState("h-50");
  const [inputhmlb, setInputhmlb] = useState("max-xl:h-10");
  const [active, setactive] = useState(false);
  const { total, setOderplace,delivery } = useContext(DatauseProvider);
  const showpopup = ()=>{
    if (delivery==40){

      setOderplace("fixed");
      setTimeout(() => {
        setOderplace("invisible");
      }, 2000);
    }
  }
  return (
    <div
      className={`bg-[#101112] border border-gray-700 duration-700 transition-all ease-in-out   rounded-lg w-80 max-xl:w-full ${hei}`}
    >
      <div className="px-5  text-gray-200 ">
        <h1 className="text-lg pb-3 pt-5 font-semibold">Enter Your Adress</h1>
        <textarea
          type="text"
          onMouseEnter={() => {
            setInputh("h-30");
            setInputhmlb("h-30");
            sethie("h-85");
          }}
          onClickCapture={() => {
            if (active == false) {
              sethie("xl:h-80");
              setInputh("xl:h-30");
              setactive(true);
            } else if (active == true) {
              setactive(false);
            }
          }}
          onMouseLeave={() => {
            sethie("h-55");
            setInputhmlb("max-xl:h-10");
            if (active == false) {
              setInputh("h-10");
              sethie("xl:h-50");
            }
          }}
          placeholder="Write here"
          className={` border-2 pt-1.5 text-orange-600 resize-none border-orange-900 duration-1000 transition-all ease-in-out   w-full ${inputh} ${inputhmlb} px-2 rounded-sm`}
        />
      </div>
      <div className="px-5 pt-5 w-full flex justify-center ">
        <button
          onClick={showpopup}
          className="bg-orange-700 px-8 hover:bg-orange-800 duration-300 transition-all ease-in-out hover:scale-105 text-white font-semibold text-lg py-3 rounded-md"
        >
          Place your Order ₹{total + ((total * 10) / 100 + delivery)}
        </button>
      </div>
    </div>
  );
};

export default RDown;
