import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Dashboard from "./components/Dashboard/Dashboard"

const App = () => {
useEffect(() => {

  if (localStorage.getItem('theme') === null) {
   
    localStorage.setItem('theme', 'light')
  }
}, [])
  const [theme, settheme] = useState(localStorage.getItem('theme'))
  // console.log(theme)
  return (
    <div className={`duration-1000 transition-all ease-in-out dark:bg-[#080C15] bg-[#FBFBFC] ${theme}`}> 
    <div className="max-md:fixed w-full">

      <Navbar
      theme={theme}
      settheme={settheme}/>
      </div>

      <Dashboard
      theme={theme}/>
     
    </div>
  )
}

export default App