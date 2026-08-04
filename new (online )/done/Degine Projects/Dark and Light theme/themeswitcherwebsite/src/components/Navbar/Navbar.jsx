import { useState } from "react";
import Left from "./Left";
import Middle from "./Middle";
import Mobile from "./Mobile"
import Right from "./Right";

const Navbar = ({theme,settheme}) => {
    const [height, setheight] = useState("h-0")
  return (
    <div className="w-full">

    <div className={`h-15 dark:bg-[#080E15] border-b dark:border-gray-700 bg-gray-100  dark:shadow-gray-800 w-full flex justify-between px-3 max-lg:px-1 duration-1000 transition-all ease-in-out items-center overflow-hidden ${theme}`}>
      <Left />
      <div className="max-lg:hidden">
        <Middle 
       />
      </div>
      <Right 
      setheight={setheight}
       theme={theme}
       settheme={settheme} />
    </div>

      <div className="lg:hidden">
            <Mobile
            height={height}/>
        </div>
       </div>
  );
};

export default Navbar;
