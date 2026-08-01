import { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Datauseprovider } from '../../ContextAPi/Datauseprovider';
import { Bell, Menu, X, Sparkles } from 'lucide-react';

const Right = () => {
  const { setopennav, opennav } = useContext(Datauseprovider);
  const location = useLocation();

  // Determine button label and link target based on route
  const isHomeOrAuth = location.pathname === "/" || location.pathname === "/auth";
  const buttonText = isHomeOrAuth ? "Get Started" : "Disconnect";
  const buttonTarget = isHomeOrAuth ? "/auth" : "/";

  const toggleMobileNav = () => {
    if (opennav === "h-0" || !opennav) {
      setopennav("h-82");
    } else {
      setopennav("h-0");
    }
  };

  return (
    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
      {/* Notification Bell */}
      <button className="relative hidden sm:flex p-2 rounded-full text-slate-700 hover:text-purple-600 bg-slate-100/80 hover:bg-purple-50 border border-slate-200 transition-all cursor-pointer">
        <span className="absolute top-1 right-1 w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
        <Bell className="w-4 h-4" />
      </button>

      {/* Action Button: Get Started (All screens) or Disconnect (Hidden on mobile, shown inside mobile drawer) */}
      <Link
        to={buttonTarget}
        className={`${
          !isHomeOrAuth ? "hidden md:flex" : "flex"
        } bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-xs md:text-sm px-3.5 sm:px-4 py-2 md:py-2.5 rounded-xl shadow-md shadow-purple-500/20 transition-all duration-200 active:scale-95 items-center gap-1.5 cursor-pointer`}
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>{buttonText}</span>
      </Link>

      {/* Mobile Hamburger Menu Toggle Button - HIDDEN on "/" and "/auth" */}
      {!isHomeOrAuth && (
        <button
          onClick={toggleMobileNav}
          className="md:hidden p-2 text-slate-700 hover:text-purple-700 bg-slate-100 hover:bg-purple-50 rounded-xl border border-slate-200 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {opennav === "h-82" ? <X className="w-5 h-5 text-purple-700" /> : <Menu className="w-5 h-5" />}
        </button>
      )}
    </div>
  );
};

export default Right;