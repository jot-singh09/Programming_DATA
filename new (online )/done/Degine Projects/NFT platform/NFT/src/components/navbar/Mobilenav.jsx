import { useContext, useEffect, useState } from "react";
import { Datauseprovider } from "../../ContextAPi/Datauseprovider";
import { Link, useLocation } from "react-router-dom";
import { Sparkles, ChevronRight } from "lucide-react";

const Mobilenav = () => {
  const { opennav, setopennav } = useContext(Datauseprovider);
  const location = useLocation();

  const isHomeOrAuth = location.pathname === "/" || location.pathname === "/auth";
  const buttonText = isHomeOrAuth ? "Get Started" : "Disconnect";
  const buttonTarget = isHomeOrAuth ? "/auth" : "/";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Trade", path: "/trade" },
    { name: "Create NFT", path: "/create" },
    { name: "Team Network", path: "/team" },
  ];

  return (
    <div
      className={`overflow-hidden transition-all duration-1000 ease-in-out border-b shadow-lg border-slate-200 bg-white/95 backdrop-blur-md ${
        opennav === "h-0" || !opennav ? "max-h-0 opacity-0 py-0" : "max-h-125 opacity-100 py-4"
      }`}
    >
      <div className="px-4 flex flex-col gap-3">
        <div className="flex flex-col gap-1 pt-1">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path));

            return (
              <Link
                onClick={() => {
                  setopennav("h-0");
                }}
                key={item.name}
                to={item.path}
                className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                  isActive
                    ? "text-white bg-purple-600 font-bold shadow-md shadow-purple-500/20"
                    : "text-slate-700 hover:text-purple-600 hover:bg-purple-50 font-medium"
                }`}
              >
                <span className="text-sm">{item.name}</span>
                <ChevronRight
                  className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Action Button: Show Disconnect in side navbar only (not Get Started) */}
        {!isHomeOrAuth && (
          <div className="pt-2">
            <Link
              to="/"
              onClick={() => setopennav("h-0")}
              className="w-full bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-sm py-3 rounded-xl shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Disconnect</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobilenav;