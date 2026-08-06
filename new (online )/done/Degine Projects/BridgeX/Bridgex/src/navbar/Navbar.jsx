import logo from '../assets/logo.png'
import light from '../assets/lightmode.svg'
import dark from '../assets/dark.svg'
const Navbar = () => {
  return (
    <div className="w-full items-center flex font-poppins duration-500 transition-all ease-in-out justify-between px-6 max-md:px-2 h-13 dark:bg-[#0C101C]  dark">
        <div className='flex gap-2 items-center'>
            <img src={logo} className='size-8 max-md:size-6' alt="" />
            <h1 className='dark:text-white font-poppins text-xl max-md:text-lg font-bold text-black'>BridgeX</h1>
        </div>
        <div className='flex gap-2 items-center pr-3 '>            
            <button  className='bg-[#5F52F9] max-md:text-sm active:scale-90 hover:scale-110 duration-500 transition-all ease-in-out dark:bg-[#3C38A8] rounded-md text-white font-medium px-2 py-1 '>
             
                Connect Wallet
            </button>
        </div>
    </div>
  )
}

export default Navbar