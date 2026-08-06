import { useContext } from "react"
import { Datauseprovider } from "./Contextapi/Datauseprovider"
import Navbar from "./navbar/Navbar"
import Home from "./Mainpage/Home"

const App = () => {

  return (
    <div>
    <Navbar/>
    <Home/>
    </div>
  )
}

export default App