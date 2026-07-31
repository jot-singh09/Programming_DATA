import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // ← Add this import
import { Datauseprovider } from '../../ContextAPi/Datauseprovider';

const Right = () => {
  const { setopennav, setnavw, setword } = useContext(Datauseprovider);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [seepath, setseepath] = useState("hidden");
  const [menu, setmenu] = useState("hidden");
  const location = useLocation(); // ← Now this will work

  const toggleMobileNav = () => {
    if (!isMenuOpen) {
      setopennav("h-82");
      setword("");
      setnavw("w-full");
      setIsMenuOpen(true);
    } else {
      setopennav("h-0");
      setword("");
      setnavw("w-0");
      setIsMenuOpen(false);
    }
  };
  
  useEffect(() => {
    if (location.pathname !== "/") {
      setseepath("hidden");
      setmenu("flex")
    } else {
      setseepath("visible"); // ← Added else to handle home page
      setmenu("hidden")
    }
    
   
  }, [location.pathname]);

  return (
    <div className="flex items-center gap-3 lg:gap-4 max-md:pr-2 ">
      
      <button className="relative max-md:hidden p-2 rounded-full text-black hover:text-black bg-white shadow-md border border-slate-800 hover:border-slate-700 transition-all">
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-700 rounded-full animate-pulse"></span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>

      <button className={`bg-linear-to-r max-md:${seepath} from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium  text-xs md:text-sm px-4 py-2.5 md:py-2 rounded-xl shadow-lg shadow-indigo-600/25 transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer`}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Connect Wallet</span>
      </button>

      <button
        onClick={toggleMobileNav}
        className={`md:hidden max-md:${menu} p-2 text-purple-950 hover:text-purple-900 bg-white rounded-lg border border-purple-950`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  );
};

export default Right;