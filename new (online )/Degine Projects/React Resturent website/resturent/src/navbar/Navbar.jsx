import Buttons from "./Buttons"
import Icons from "./Icons"
import Logo from "./Logo"
import MobileNav from "./MobileNav"

const Navbar = () => {
  return (
    <div>

    <div className="w-full h-16 bg-[#0B0B0D] duration-500 transition-all ease-in-out flex justify-between items-center">
      <Logo/>
      <Buttons/>
      <Icons />
    </div>
       <div className="md:hidden ">
      <MobileNav/>
       </div>
    </div>
  )
}

export default Navbar
