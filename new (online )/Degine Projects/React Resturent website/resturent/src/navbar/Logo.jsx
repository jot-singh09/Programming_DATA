import logo from "../assets/Logo.png";
const Logo = () => {
  return (
    <div>
      <div className="flex gap-1 px-5 items-center max-md:px-3">
         <div className="md:"></div>
        <img src={logo} alt="" className="w-8  " />
        <h1 className="text-gray-200 font-black text-2xl">Bite<span className="text-orange-500 ">Buddy</span></h1>
      </div>
    </div>
  );
};

export default Logo;
