import { useEffect, useRef } from "react";
import Logo from "./Logo";
import Buttons from "./Buttons";

const Navbar = () => {
  const navRef = useRef(null);
  const isNavOpen = useRef(false);

  const toggleNav = () => {
    if (navRef.current) {
      if (isNavOpen.current) {
        navRef.current.style.display = "none";
        isNavOpen.current = false;
      } else {
        navRef.current.style.display = "block";
        isNavOpen.current = true;
      }
    }
  };

  // Initialize the nav to be hidden on mount
  useEffect(() => {
    if (navRef.current) {
      navRef.current.style.display = "none";
    }
  }, []);

  return (
    <div >
      <div className="bg-white border-black border-b-[0.1px] w-full py-2.5 flex justify-between fixed max-lg:hidden ">
        <Logo />
        <Buttons />
      </div>

      {/* mobile view  */}

      <div className="bg-white border-black border-b-[0.1px] w-full py-2.5 flex justify-between fixed lg:hidden">
        <Logo />
        <div className="lg:hidden">
          <h1 onClick={toggleNav} className="mx-10 text-xl cursor-pointer">
            <i className="ri-bar-chart-horizontal-line"></i>
          </h1>
        </div>
      </div>


      {/* nav bar  */}
      <div id="n" ref={navRef} className="nav pt-10 top-16 left-0 w-full bg-white shadow-lg z-50">
       <div className="bg-white px-5 flex flex-col pt-5 pb-5 gap-4 ">
      
      <h1 className="border-b border-b-[#222]"><a href="/trade">Trade</a> </h1>
      <h1 className="border-b border-b-[#222]"><a href="/create">Create</a> </h1>
      <h1 className="border-b border-b-[#222]"><a href="/assets">Assets</a> </h1>
      <h1 className="border-b border-b-[#222]"><a href="/teamtree">TeamTree</a> </h1>
      
    
    </div>
        </div>
      </div>
    
  );
};

export default Navbar;