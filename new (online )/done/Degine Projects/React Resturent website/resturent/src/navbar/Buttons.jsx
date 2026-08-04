import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Buttons = () => {
  const [home, setHome] = useState("scale-x-0");
  const [homecol, setHomecol] = useState("");
  const [menu, setMenu] = useState("scale-x-0");
  const [menucol, setmenucol] = useState("");
  const [cart, setCart] = useState("scale-x-0");
  const [cartcol, setcartcol] = useState("");
  const [order, setOrder] = useState("scale-x-0");
  const [ordercol, setordercol] = useState("");

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    setHome("scale-x-0");
    setMenu("scale-x-0");
    setCart("scale-x-0");
    setOrder("scale-x-0");


    if (pathname === "/" || pathname === "/home") {
      setHome("scale-x-100");
      setHomecol('text-orange-600')
    } else if (pathname === "/menu") {
      setMenu("scale-x-100");
      setmenucol('text-orange-600')
    } else if (pathname === "/mycart") {
      setcartcol('text-orange-600')
      setCart("scale-x-100");
    } else if (pathname === "/order" || pathname === "/orders") {
      setordercol('text-orange-600')
      setOrder("scale-x-100");
    }
  }, [location]);

  return (
    <div className="max-md:hidden">
      <div className="text-gray-200 flex gap-5">
        <a
          href="/"
          className={`after:${home} after:absolute relative after:bottom-0 after:bg-orange-700 after:w-full after:h-0.5 after:left-0 after:transition-all after:duration-300 after:origin-left 
          ${homecol} hover:after:scale-x-100 hover:text-orange-600 hover:scale-110 hover:font-semibold duration-300 transition-all ease-in-out`}
        >
          Home
        </a>
       
        <a
          href="/menu"
          className={`after:${menu} after:absolute relative after:bottom-0 after:bg-orange-700 after:w-full after:h-0.5 after:left-0 after:transition-all after:duration-300 after:origin-left ${menucol}  hover:after:scale-x-100 hover:text-orange-600 hover:scale-110 hover:font-semibold duration-300 transition-all ease-in-out`}
        >
          Menu
        </a>

        <a
          href="/mycart"
          className={`after:${cart} after:absolute relative after:bottom-0 after:bg-orange-700 after:w-full after:h-0.5 after:left-0 after:transition-all after:duration-300 after:origin-left ${cartcol} hover:after:scale-x-100 hover:text-orange-600 hover:scale-110 hover:font-semibold duration-300 transition-all ease-in-out`}
        >
          Cart
        </a>

        <a
          href="/order"
          className={`after:${order} after:absolute relative after:bottom-0 after:bg-orange-700 after:w-full after:h-0.5 after:left-0 after:transition-all after:duration-300 after:origin-left ${ordercol}   hover:after:scale-x-100 hover:text-orange-600 hover:scale-110 hover:font-semibold duration-300 transition-all ease-in-out`}
        >
          Order
        </a>
      </div>
    </div>
  );
};

export default Buttons;
