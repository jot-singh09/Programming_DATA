import { useContext } from "react";
import { Datauseprovider } from "../../ContextAPi/Datauseprovider";
import { Link, useLocation } from "react-router-dom";

const Mobilenav = () => {
  const { opennav,setopennav } = useContext(Datauseprovider);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Home", path: "/" },
    { name: "Trade", path: "/trade" },
    { name: "Create", path: "/create" },
    { name: "Team-tree", path: "/team" },
  ];
  

  return (
    
    <div
      className={`overflow-hidden transition-all duration-1000 ease-in-out border-b shadow-sm shadow-black border-slate-800/80 bg-white ${
        opennav === "h-0" || !opennav ? "max-h-0 opacity-0 py-0" : "max-h-125 opacity-100 py-4"
      }`}
    >
      <div className="px-4 flex flex-col gap-3">
        <div className="flex flex-col gap-1 pt-1">
          {navItems.map((item) => {
            // Check if current path matches this item's path
            const isActive = location.pathname === item.path || 
                           (item.path !== "/" && location.pathname.startsWith(item.path));
            
            return (
              <Link
              onClick={()=>{
                setopennav("h-0")
              }}
                key={item.name}
                to={item.path}
                className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                  isActive 
                    ? "text-white bg-purple-700 hover:text-purple-300" 
                    : "text-black-200 hover:text-black hover:bg-slate-800/60"
                }`}
              >
                <span className="font-semibold text-sm">{item.name}</span>
                <svg 
                  className={`w-4 h-4 ${
                    isActive ? "text-white" : "text-slate-500"
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}
        </div>

        {/* Mobile Connect Wallet Button */}
        <div className="pt-2">
          <button className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm py-3 rounded-xl shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 active:scale-98 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Connect Wallet</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobilenav;