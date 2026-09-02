import { useState } from "react"
import Left from "./Left"
import Middle from "./Middle"
import Mobile from "./Mobile"
import Right from "./Right"

const Navbar = () => {
    const [navactive, setnavactive] = useState('h-0')
  return (
    <div>

    <div className="w-full border-b border-gray-600 shadow-sm shadow-gray-400 flex justify-between h-16 items-center px-2">
        <Left/>
        <div className="max-lg:hidden">
            <Middle/>
        </div>
        <Right
        setnavactive={setnavactive}/>
    </div>
        <div className="lg:hidden">
            <Mobile
            navactive={navactive}/>
        </div>
    </div>
  )
}

export default Navbar