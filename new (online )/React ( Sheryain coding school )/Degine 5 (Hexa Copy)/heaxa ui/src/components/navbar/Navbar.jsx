import Logo from "./Logo";
import Buttons from "./Buttons";
const Navbar = () => {
  return (
    <div className="bg-white w-full py-2.5 flex justify-between">
      <Logo />
      <Buttons />
    </div>
  );
};

export default Navbar;
