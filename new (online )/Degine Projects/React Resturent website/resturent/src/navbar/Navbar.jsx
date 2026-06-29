import Buttons from "./Buttons"
import Icons from "./Icons"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#0B0B0D] flex justify-between items-center">
      <Logo/>
      <Buttons/>
      <Icons/>
    </div>
  )
}

export default Navbar
