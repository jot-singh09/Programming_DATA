import Upper from "./Upper"
import Navbar from "../navbar/Navbar"

const Mainpage = () => {
  return (
    <div className="bg-gray-300 h-500 w-full">
      {/* nav bar */}
      <div >
     <Navbar/>
      </div>

      {/* dashboard code */}
      <div className="py-15">
     <Upper/>
      </div>

  
    </div>
  )
}

export default Mainpage
