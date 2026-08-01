import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Mid = () => {
  const location = useLocation();
  const [hide, sethide] = useState("hidden")
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Trade", path: "/trade" },
    { name: "Team-tree", path: "/team" },
    { name: "Create", path: "/create" },
  ];

  useEffect(() => {
    if (location.pathname=="/" || location.pathname=="/auth"){
      sethide("hidden")
    }
    else{
      sethide("flex")
    }
  
    
  }, [location.pathname])
  

  return (
    <nav className={`${hide} items-center gap-6 lg:gap-8`}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.name}
            to={item.path}
            className={`text-sm lg:text-base font-medium transition-all duration-200 relative py-1 ${
              isActive
                ? "text-[#070A18] font-semibold  after:bg-purple-600 after:h-0.5 relative after:absolute after:w-full after:duration-300 after:transition-all after:ease-in-out after:bottom-0 after:left-0 after:rounded-lg"
                : "text-[#070A18] hover:text-[#070A18] after:bg-purple-600 after:h-0.5 relative after:absolute after:w-0 hover:after:w-full after:duration-300 after:transition-all after:ease-in-out after:bottom-0 after:left-0 after:rounded-lg"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Mid;
