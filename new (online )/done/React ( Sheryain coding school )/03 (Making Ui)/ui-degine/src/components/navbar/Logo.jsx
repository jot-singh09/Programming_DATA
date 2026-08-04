import logo from "../../assets/logo.png";
const Logo = () => {
  return (
    <div>
        <div className="flex items-center px-10 py-2">
            <img src={logo} alt="logo" className="w-15 max-md:w-10 " />
            <h3 className="text-[22px] px-1 text-white font-bold">Dev Practive</h3>
        </div>
    </div>
  )
}

export default Logo
