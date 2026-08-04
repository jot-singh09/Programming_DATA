
import Navbar from "../../navbar/Navbar"
import Middle from "./Middle"
import Upper from "./Upper"
import Down from "./Down"
import MobileNav from "../../navbar/MobileNav"
const Homepage = () => {
  
  return (
    <div className="bg-zinc-950">
      <Navbar/>
      
       <div className="flex flex-col gap-5 ">
       <Upper />
       <Middle/>
       <Down/>

       </div>
//     </div>
  )
}

export default Homepage


// import { useState } from "react"
// import Navbar from "../../navbar/Navbar"
// import Middle from "./Middle"
// import Upper from "./Upper"
// import Down from "./Down"

// const Homepage = () => {
//   const [clicksearch, setclicksearch] = useState('hidden')
  
//   return (
//     <div className="bg-zinc-950">
//       <Navbar  setclicksearch={setclicksearch}/>
//       <div className="flex flex-col gap-5 ">
//       <Upper clicksearch={clicksearch}/>
//       <Middle/>
//       <Down/>
//       </div>

//     </div>
//   )
// }

// export default Homepage
