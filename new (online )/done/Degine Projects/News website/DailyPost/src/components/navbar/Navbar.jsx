import Datetime from "./Datetime"
import Left from "./Left"
import Mid from "./Mid"
import Right from "./Right"

const Navbar = ({settheme ,theme}) => {
  return (
    <div>

    <div className="bg-[#FEFDFD] dark:bg-[#000308] dark:border-gray-700  transition-all duration-500 ease-in-out h-16.5 w-full border-b border-gray-300 flex items-center justify-between px-3 ">
        <Left/>
        <Mid/>
        <Right
        settheme={settheme}
        theme={theme}
        />
    </div>
    <div className="px-5"> 
        <Datetime/>
    </div>
        </div>
        
  )
}

export default Navbar