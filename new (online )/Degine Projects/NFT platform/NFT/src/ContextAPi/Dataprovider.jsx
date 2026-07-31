// import { Datauseprovider } from "./Datauseprovider";
import { useState } from "react"
import { Datauseprovider } from "./Datauseprovider"
const Dataprovider = (props) => {
    const [opennav, setopennav] = useState("h-0")
    const [setw, setnavw] = useState("w-0")
    const [animation, setaniamtion] = useState("invisible")
    const [stopanimation, setstopaniamtion] = useState("visible")
  return (
   <div>
      <Datauseprovider.Provider value={{opennav,setopennav,setw,setnavw,animation,setaniamtion,stopanimation,setstopaniamtion}}>
        {props.children}
      </Datauseprovider.Provider>
    </div> 
  )
}

export default Dataprovider