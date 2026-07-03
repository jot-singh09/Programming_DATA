import search from "../assets/searchicon.svg";
import shop from "../assets/shop.svg";
import profile from "../assets/profile.svg";
import { useContext, useState } from "react";
import { DatauseProvider } from "../contextApi/DatauseProvider";

const Icons = () => {
     const { setclicksearch} = useContext(DatauseProvider);
  const [isactive, setisactive] = useState(false);

  
  const opensearch = () => {
    if (isactive == false) {
      setclicksearch("flex");
      setisactive(true);
    } else if (isactive == true) {
      setclicksearch("hidden");
      setisactive(false);
    }
  };
  
 
  return (
    <div className="px-7">
      <div className="text-white flex gap-5 max-sm:gap-4">
        <img className="w-6 " onClick={opensearch} src={search} alt="" />
        <img className="w-6" src={shop} alt="" />
        <img
          className="w-6 border-white rounded-full border-2"
          src={profile}
          alt=""
        />
       
      </div>
    </div>
  );
};

export default Icons;
