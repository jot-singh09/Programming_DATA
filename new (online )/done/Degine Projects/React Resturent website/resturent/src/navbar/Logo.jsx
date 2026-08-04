import Menu from "../assets/menu.svg";
import logo from "../assets/Logo.png";
import { useContext, useState } from "react";
import { DatauseProvider } from "../contextApi/DatauseProvider";
const Logo = () => {
  
  const [navactive, setnavactive] = useState(false);
  const { setopennav } = useContext(DatauseProvider);
  const { setH } = useContext(DatauseProvider);
  const opennav = () => {
    if (navactive == false) {
      setopennav("visible");
      setnavactive(true);
      setH("h-25");
    } else if (navactive == true) {
      setopennav("invisible");
      setnavactive(false);
      setH("h-0");
    }
  };
  return (
    <div>
      <div className="flex gap-2 px-5 items-center max-md:px-3">
        <div className="sm:hidden">
          <img src={Menu} onClick={opennav} className="w-6" alt="" />
        </div>

        <div className="flex gap-1 px-5 items-center max-md:px-3">
        <img src={logo} alt="" className="w-8  " />
        <h1 className="text-gray-200 font-black text-2xl">
          Bite<span className="text-orange-500 ">Buddy</span>
        </h1>
        </div>
      </div>
    </div>
  );
};

export default Logo;
