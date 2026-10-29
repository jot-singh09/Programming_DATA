import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import {
  FaHome,
  FaBookOpen,
  FaUsers,
  FaCalendarPlus,
  FaUndoAlt,
  FaPlusCircle,
  FaFileAlt,
  FaChevronDown,
  FaChevronRight,
  // Members
  FaUserPlus,
  FaUserEdit,
  FaUserMinus,
  // Books
  FaBookMedical,
  FaBook,
  FaTrashAlt,
  // Stock
  FaLayerGroup,
  FaBoxOpen,
  FaBoxes,
  FaEdit,
} from "react-icons/fa";

/* ---------- NAV DATA ---------- */
const NAV_ITEMS = [
  { name: "Dashboard", path: "/dashboard", icon: FaHome },

  {
    name: "Books",
    path: "/books",
    icon: FaBookOpen,
    hasDropdown: true,
    children: [
      { name: "Issue Book", path: "/books/issue", icon: FaBookMedical },
      { name: "Return Book", path: "/books/return", icon: FaBook },
      // { name: "Delete Book", path: "/books/delete", icon: FaTrashAlt },

      /* ---- NESTED group: Stock ---- */
      {
        name: "Stock",
        path: "/stock",
        icon: FaLayerGroup,
        hasDropdown: true, // nested dropdown
        children: [
          { name: "Add Stock", path: "/stock/add", icon: FaBoxOpen },
          { name: "Edit Stock", path: "/stock/edit", icon: FaEdit },
          { name: "Delete Stock", path: "/stock/delete", icon: FaBoxes },
        ],
      },
    ],
  },

  {
    name: "Student",
    path: "/student",
    icon: FaUsers,  
    hasDropdown: true,
    children: [
      { name: "Add Student", path: "/student/add", icon: FaUserPlus },
      { name: "Edit Student", path: "/student/edit", icon: FaUserEdit },
      { name: "Delete Student", path: "/student/delete", icon: FaUserMinus },
    ],
  },



  { name: "Transactions", path: "/transactions", icon: FaFileAlt },
];

/* ---------- NAVBAR ---------- */
const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [activeItem, setActiveItem] = useState("");
  // Top-level dropdown open (by name)
  const [openDropdown, setOpenDropdown] = useState(null);
  // Nested dropdown open (by name) — e.g. "Stock"
  const [openNested, setOpenNested] = useState(null);

  const navRef = useRef(null);

  /* Outside click closes all dropdowns */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setOpenNested(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Active state + auto-open on route change */
  useEffect(() => {
    // Find top-level item
    const currentItem = NAV_ITEMS.find((item) => {
      if (item.matchPaths) return item.matchPaths.some((p) => currentPath.startsWith(p));
      if (currentPath.startsWith(item.path)) return true;
      // also match nested children
      if (item.children) {
        return item.children.some((c) => {
          if (c.path && currentPath.startsWith(c.path)) return true;
          if (c.children) return c.children.some((cc) => currentPath.startsWith(cc.path));
          return false;
        });
      }
      return false;
    });

    if (currentItem) {
      setActiveItem(currentItem.name);
      if (currentItem.hasDropdown) {
        const childActive = currentItem.children.some(
          (c) =>
            (c.path && currentPath.startsWith(c.path)) ||
            (c.children && c.children.some((cc) => currentPath.startsWith(cc.path)))
        );
        if (childActive) setOpenDropdown(currentItem.name);

        // Auto-open nested Stock if a /stock/* route is active
        const stockGroup = currentItem.children.find(
          (c) => c.name === "Stock" && c.children
        );
        if (stockGroup && stockGroup.children.some((cc) => currentPath.startsWith(cc.path))) {
          setOpenNested("Stock");
        }
      }
    } else if (currentPath === "/") {
      setActiveItem("Dashboard");
    }
  }, [currentPath]);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
    // closing a top-level dropdown should also close the nested one
    setOpenNested(null);
  };

  const toggleNested = (name) => {
    setOpenNested((prev) => (prev === name ? null : name));
  };

  return (
    <div className="fixed top-0 left-0 h-screen bg-[#020C18] w-64 flex flex-col shadow-xl">
      {/* Logo */}
      <div className="px-4 py-3 border-b border-gray-700/50 h-20 flex items-center">
        <img src={logo} className="w-40 object-contain" alt="LibraHub Logo" />
      </div>

      {/* Nav */}
      <div
        ref={navRef}
        className="bg-[#04121E] flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeItem === item.name;
          const isOpen = openDropdown === item.name;

          /* ---------- Dropdown group ---------- */
          if (item.hasDropdown) {
            return (
              <div key={item.name}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white/10 text-white font-medium"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon className={`text-xl ${isActive ? "text-white" : "text-gray-400"}`} />
                  <span className="flex-1 text-left">{item.name}</span>
                  <FaChevronDown
                    className={`text-xs transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-1 ml-6 flex flex-col gap-1 border-l border-gray-700/60 pl-3">
                    {item.children.map((child) => {
                      /* ---- Nested dropdown (Stock) ---- */
                      if (child.hasDropdown) {
                        const nestedOpen = openNested === child.name;
                        const nestedActive = child.children.some((cc) =>
                          currentPath.startsWith(cc.path)
                        );
                        return (
                          <div key={child.name}>
                            <button
                              onClick={() => toggleNested(child.name)}
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
                                nestedActive
                                  ? "bg-white/10 text-white"
                                  : "text-gray-400 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              <child.icon className="text-base" />
                              <span className="flex-1 text-left">{child.name}</span>
                              <FaChevronRight
                                className={`text-[10px] transition-transform duration-200 ${
                                  nestedOpen ? "rotate-90" : ""
                                }`}
                              />
                            </button>

                            {nestedOpen && (
                              <div className="mt-1 ml-4 flex flex-col gap-1 border-l border-gray-700/50 pl-3">
                                {child.children.map((sub) => {
                                  const subActive = currentPath.startsWith(sub.path);
                                  return (
                                    <Link
                                      key={sub.name}
                                      to={sub.path}
                                      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs transition-colors duration-150 ${
                                        subActive
                                          ? "bg-white/10 text-white"
                                          : "text-gray-400 hover:text-white hover:bg-white/5"
                                      }`}
                                    >
                                      <sub.icon className="text-sm" />
                                      <span>{sub.name}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      }

                      /* ---- Regular child link ---- */
                      const childActive = currentPath.startsWith(child.path);
                      return (
                        <Link
                          key={child.name}
                          to={child.path}
                          className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
                            childActive
                              ? "bg-white/10 text-white"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <child.icon className="text-base" />
                          <span>{child.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          /* ---------- Standard link ---------- */
          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => {
                setActiveItem(item.name);
                setOpenDropdown(null);
                setOpenNested(null);
              }}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                item.isSpecial
                  ? `mt-2 mb-2 font-semibold shadow-lg ${
                      isActive
                        ? "bg-yellow-500 text-black shadow-yellow-500/50"
                        : "bg-[#F5B041] hover:scale-105 text-black"
                    }`
                  : `${
                      isActive
                        ? "bg-white/10 text-white font-medium hover:scale-105"
                        : "text-gray-400 hover:text-white hover:bg-white/5 hover:scale-105"
                    }`
              }`}
            >
              <item.icon
                className={`text-xl ${
                  item.isSpecial
                    ? "text-2xl text-black"
                    : isActive
                    ? "text-white"
                    : "text-gray-400"
                }`}
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