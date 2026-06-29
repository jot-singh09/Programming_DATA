import Navbar from "../../navbar/Navbar"
import Middle from "./Middle"
import Upper from "./Upper"

const Homepage = () => {
  return (
    <div className="bg-zinc-950">
      <Navbar/>
      <div className="flex flex-col gap-5 ">
      <Upper/>
      <Middle/>
      </div>

    </div>
  )
}

export default Homepage
