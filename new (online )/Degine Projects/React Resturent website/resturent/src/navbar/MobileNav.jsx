import { useContext,  useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { DatauseProvider } from "../contextApi/DatauseProvider";
import home from '../assets/Mobilenav/home.svg';
import menu from '../assets/Mobilenav/menu.svg';
import cart from '../assets/Mobilenav/cart.svg';
import order from '../assets/Mobilenav/order.svg';

const MobileNav = () => {   
  const { opennav, seth } = useContext(DatauseProvider);
  const location = useLocation();

  const navItems = [
    { icon: home, label: 'Home', path: '/' },
    { icon: menu, label: 'Menu', path: '/menu' },
    { icon: cart, label: 'Cart', path: '/cart' },
    { icon: order, label: 'Order', path: '/order' },
  ];

  return (
    <div className={`
      ${seth} 
      ${opennav}
      duration-500 
      transition-all 
      ease-in-out
      
      /* Glass Background */
      bg-white/10 
      backdrop-blur-xl 
      backdrop-saturate-150
      
      /* Position - TOP */
      fixed 
      top-15 
      left-0 
      right-0
      z-50
      
      /* Layout */
      flex 
      items-start
      py-5 
      justify-around
      
      /* Border & Effects */
      border-b 
      border-white/10
      shadow-[0_4px_30px_rgba(0,0,0,0.3)]
    `}>
      {navItems.map((item) => (
        <NavItem 
          key={item.label}
          icon={item.icon} 
          label={item.label} 
          path={item.path}
          isActive={location.pathname === item.path}
        />
      ))}
    </div>
  );
};

// NavItem with Link - SMOOTH BACKGROUND TRANSITION
const NavItem = ({ icon, label, path, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered)
 const { opennav,} = useContext(DatauseProvider);
  return (
    <Link 
      to={path}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        ${opennav}
        flex 
        flex-col 
        items-center 
        gap-0.5
        group
        relative
        px-2 
        py-0.5
        rounded-lg
        transition-all 
        duration-300
        hover:scale-105
        active:scale-95
        no-underline
      `}
    >
      {/* Icon Container with SMOOTH TRANSITION */}
      <div className={`
      ${opennav}
        w-10
        h-10
        flex 
        items-center 
        justify-center
        rounded-lg
        transition-all 
        duration-500 
        ease-in-out
        relative
        overflow-hidden
        
        /* Active state - Orange background */
        ${isActive 
          ? 'bg-orange-700 shadow-[0_0_30px_rgba(251,146,60,0.4)]' 
          : 'hover:bg-white/5'
        }
      `}>
        {/* Animated background overlay for smooth transition */}
        <div className={`
        ${opennav}
          absolute inset-0
          bg-orange-700
          transition-all 
          duration-500 
          ease-in-out
          ${isActive 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-75'
          }
        `} />
        
        {/* Shine effect on active */}
        <div className={`
        ${opennav}
          absolute inset-0
          bg-gradient-to-br from-orange-400/20 to-transparent
          transition-all 
          duration-500 
          ease-in-out
          ${isActive 
            ? 'opacity-100' 
            : 'opacity-0'
          }
        `} />
        
        <img 
          src={icon} 
          alt={label}
          className={`
            ${opennav}
            w-7
            h-7
            transition-all 
            duration-500 
            ease-in-out
            relative z-10
            ${isActive 
              ? 'brightness-200 scale-110' 
              : 'brightness-50 group-hover:brightness-100 group-hover:scale-110'
            }
          `}
        />
      </div>
      
      {/* Label with SMOOTH TRANSITION */}
      <span className={`
      ${opennav}
        text-[8px] 
        font-medium 
        tracking-widest
        uppercase
        transition-all 
        duration-500 
        ease-in-out
        ${isActive 
          ? 'text-orange-400' 
          : 'text-white/40 group-hover:text-white/70'
        }
      `}>
        {label}
      </span>
      
      {/* Active Indicator with SMOOTH TRANSITION */}
      <div className={`
      ${opennav}
        absolute 
        -top-0.5 
        left-1/2 
        -translate-x-1/2
        transition-all 
        duration-500 
        ease-in-out
        ${isActive 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-75'
        }
      `}>
        <div className={`
        ${opennav}
          w-1 
          h-1
          bg-orange-400
          rounded-full
          shadow-[0_0_12px_rgba(251,146,60,0.8)]
          animate-pulse
        " />
        <div className="
          absolute 
          -top-1.5
          -left-1.5
          w-4 
          h-4
          bg-orange-400/20
          rounded-full
          blur-xl
        `} />
      </div>
    </Link>
  );
};

export default MobileNav;