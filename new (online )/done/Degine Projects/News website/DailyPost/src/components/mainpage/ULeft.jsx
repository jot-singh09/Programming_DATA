import { useEffect, useState } from "react";
import one from "../../assets/1st.png";
import secound from "../../assets/2nd.png";
import USA from "../../assets/USA.png";
import SUN from "../../assets/sunsine.png";
import SUP from "../../assets/SUP.png";
import ROC from "../../assets/ROC.png";
const ULeft = () => {
  const [i, seti] = useState(0)
  const [w, setw] = useState('w-0')
  useEffect(() => {
  const intervalId = setInterval(() => {
    setw('w-full')
    seti(prevI => {
      if (prevI === 1) {
        return 0;
      }
      return prevI + 1;
    });
  }, 10000);

  return () => clearInterval(intervalId);
}, []);
useEffect(() => {
  setw('w-full')
}, [])
useEffect(() => {
   const intervalId = setInterval(() => {
    setw('w-0')
   },9100)
}, [])


  const img = [[one], [secound]];
  const sideone = [[USA],[SUN]]
  const sidesec = [[SUP],[ROC]]
 
 
  return (
    <div className="w-[85%]">
      
      <div className=" pl-5 grid grid-cols-2 py-1.5 overflow-hidden">
        <div className={` grid-rows-2 ${w} relative transition-all duration-300 ease-linear`}>
          <img src={img[i]} className="transition-all h-[90%] ease-in-out duration-500" alt="" />
          {/* <div className="absolute bottom-5 overflow-hidden left-2 flex flex-col gap-4 text-black">
            <h1 className="bg-blue-700 px-4 py-0.5 w-fit rounded-md text-white text-sm font-semibold ">{features[i]} </h1>
            <h1 className="text-white text-2xl font-semibold ">{showheading} </h1>
            <h1 className="text-white text-lg ">{subheading[i]} </h1>
          </div> */}
        </div>
        <div className="grid grid-rows-2  pl-4 w-[67%] pt-0.5 h-[83%]">
      <div className={`${w} transition-all duration-500 ease-initial`}>
        <img src={sideone[i]} className="overflow-hidden" alt="" />
      </div>
      <div className={`${w} transition-all duration-500 ease-initial`}>
        <img src={sidesec[i]} alt="" />
      </div>
        </div>
      </div>
    </div>
  );
};

export default ULeft;
