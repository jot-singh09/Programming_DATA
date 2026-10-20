import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Assuming you are using react-router-dom
import logo from "../assets/Logo.png";
import {
  FaHome,
  FaBookOpen,
  FaUsers,
  FaCalendarPlus,
  FaUndoAlt,
  FaPlusCircle,
  FaLayerGroup,
  FaFileAlt,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const Navbar = () => {
  // 1. Get current location
  const location = useLocation();
  const currentPath = location.pathname;

  // 2. State to track active item
  const [activeItem, setActiveItem] = useState("");

  // 3. Menu Items Data
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: FaHome },
    { name: "Books", path: "/books", icon: FaBookOpen },
    { name: "Members", path: "/members", icon: FaUsers },
    { name: "Issue Books", path: "/issue-books", icon: FaCalendarPlus },
    { name: "Return Books", path: "/return-books", icon: FaUndoAlt },
    // The prominent button
    {
      name: "Add New Book",
      path: "/add   book",
      icon: FaPlusCircle,
      isSpecial: true,
    },
    { name: "Manage Stock", path: "/manage-stock", icon: FaLayerGroup },
    { name: "Transactions", path: "/transactions", icon: FaFileAlt },
  
   
  ];

  // 4. Check pathname on load and updates to set active state
  useEffect(() => {
    // Find if current path matches any item in our list
    // (Using .includes to handle potential sub-routes like /books/123)
    const currentItem = navItems.find((item) =>
      currentPath.includes(item.path)
    );

    if (currentItem) {
      setActiveItem(currentItem.name);
    } else {
      // Fallback: if path is "/", highlight Dashboard
      if (currentPath === "/") setActiveItem("Dashboard");
    }
  }, [currentPath]);

  return (
    <div className="fixed top-0 left-0 h-screen bg-[#020C18] w-64 flex flex-col shadow-xl">
      {/* --- Logo Section --- */}
      <div className="px-4 py-3 border-b border-gray-700/50 h-20 flex items-center">
        <img src={logo} className="w-40 object-contain" alt="LibraHub Logo" />
      </div>

      {/* --- Navigation Links --- */}
      <div className="bg-[#04121E] flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = activeItem === item.name;

          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setActiveItem(item.name)}
              className={`
                flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer
                ${
                  item.isSpecial
                    ? // Styles for the Yellow "Add New Book" button
                      `mt-2 mb-2 font-semibold shadow-lg ${
                        isActive
                          ? "bg-yellow-500 text-black shadow-yellow-500/50"
                          : "bg-[#F5B041] hover:scale-105 text-black"
                      }`
                    : // Styles for standard items
                      `${
                        isActive
                          ? "bg-white/10 text-white font-medium hover:scale-105" // Active state
                          : "text-gray-400 hover:text-white hover:bg-white/5 hover:scale-105" // Inactive state
                      }`
                }
              `}
            >
              <item.icon
                className={`
                  text-xl 
                  ${
                    item.isSpecial
                      ? "text-2xl text-black"
                      : isActive
                      ? "text-white"
                      : "text-gray-400"
                  }
                `}
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;