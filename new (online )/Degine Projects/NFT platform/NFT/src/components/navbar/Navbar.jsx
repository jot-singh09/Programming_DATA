import Left from "./Left";
import Mid from "./Mid";
import Mobilenav from "./Mobilenav";
import Right from "./Right";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between px-5 pt-1.5 max-md:px-2 border-b border-gray-200 pb-2 items-center shadow-sm shadow-gray-400  bg-[#02071F] max-md:">
        <Left />
        <div className="max-md:hidden">
          <Mid />
        </div>

        <Right />
      </div>
      <div className="md:hidden ">
        <Mobilenav />
      </div>
    </div>
  );
};

export default Navbar;
