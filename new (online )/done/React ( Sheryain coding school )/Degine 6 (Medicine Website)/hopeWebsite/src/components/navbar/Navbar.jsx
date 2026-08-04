import Buttons from "./Buttons"
import Logo from "./Logo"
import Mobilenav from "./Mobilenav"
import Requestcallback from "./Requestcallback"

const Navbar = () => {
  return (
    <div > 
      <div className="max-lg:hidden flex justify-between items-center">
        <Logo/>
        <Buttons/>
        <Requestcallback/>
      </div>
      <div className="lg:hidden">
        <Logo/>
        <Buttons/>
        <Mobilenav/>
      </div>
    </div>
  )
}

export default Navbar
