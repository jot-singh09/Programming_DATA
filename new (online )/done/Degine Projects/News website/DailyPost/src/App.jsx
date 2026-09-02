import { useState } from "react"
import Mainpage from "./components/mainpage/Mainpage"
import Navbar from "./components/navbar/Navbar"

const App = () => {
  const [theme, settheme] = useState('light')
  return (
    <div className={` ${theme} bg-[#FEFDFD] h-100 dark:text-white dark:bg-[#000207] font-poppin selection:bg-black selection:text-white duration-500 transition-all ease-in-out `}>
    <Navbar
   
    settheme={settheme}
    theme={theme}
    />
    <Mainpage/>
    </div>
  )
}

export default App