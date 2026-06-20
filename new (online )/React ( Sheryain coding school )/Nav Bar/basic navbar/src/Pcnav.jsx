import Logo from "./Logo"

const Pcnav = () => {
  return (
    <div>
      <div  className="flex justify-between items-center bg-[#222] text-white w-full h-15">
         <Logo/>
         <div className="flex gap-10 px-15">
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Blog</h4>
            <h4>Contact</h4>

         </div>
      </div>
    </div>
  )
}

export default Pcnav
