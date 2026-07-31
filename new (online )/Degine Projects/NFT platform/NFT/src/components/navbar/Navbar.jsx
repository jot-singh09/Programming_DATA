import Left from "./Left";
import Mid from "./Mid";
import Mobilenav from "./Mobilenav";
import Right from "./Right";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-md border-b border-slate-800/80 shadow-sm shadow-black/20">
      <div className=" mx-auto px-2 sm:px-2 lg:px-4 py-3 flex justify-between items-center shadow-[0_4px_30px_rgba(139,92,246,0.15)]">
        <Left />
        <div className="hidden md:flex items-center">
          <Mid />
        </div>
        <Right />
      </div>
      <div className="md:hidden">
        <Mobilenav />
      </div>
    </header>
  );
};

export default Navbar;
