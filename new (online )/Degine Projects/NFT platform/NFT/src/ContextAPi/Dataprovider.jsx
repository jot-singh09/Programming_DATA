// import { Datauseprovider } from "./Datauseprovider";
import { useState } from "react"
import { Datauseprovider } from "./Datauseprovider"
const Dataprovider = (props) => {
    const [opennav, setopennav] = useState("h-0")
    const [setw, setnavw] = useState("w-0")
    const [word, setword] = useState("")
  return (
   <div>
      <Datauseprovider.Provider value={{opennav,setopennav,setw,setnavw,word,setword}}>
        {props.children}
      </Datauseprovider.Provider>
    </div> 
  )
}

export default Dataprovider