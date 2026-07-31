import search from '../../assets/search.svg'
import wallet from '../../assets/wallet.svg'
import notification from '../../assets/notification.svg'
import menu from '../../assets/menu.svg'

import { useContext, useState } from 'react'
import { Datauseprovider } from '../../ContextAPi/Datauseprovider'
const Right = () => {
  const {opennav,setopennav,setnavw,setword} = useContext(Datauseprovider)
  const [Isactive, setIsactive] = useState(false)
  return (
    <div  className='flex items-center gap-5 pr-3'>
      <img src={search} className='w-6 max-md:hidden max-lg:hidden' alt="" />
     
      <button className='flex max-md:hidden max-lg:text-sm bg-[#5139E6] active:scale-110 active:bg-blue-900 max-md:text-sm text-white px-3 py-1.5 rounded-md gap-2 duration-500  transition-all ease-in-out hover:bg-blue-900'><img src={wallet} className='w-5 max-md:w-4' alt="" />Connect Wallet</button>
      <img src={notification} className='w-6 md:hidden' alt="" />
      <img src={menu} className='md:hidden w-7' onClick={()=>{
          if (Isactive==false){
            setopennav("h-82")
            setword("")
            setnavw("w-full")
            setIsactive(true)
          }
          else if (Isactive==true){
            setopennav("h-0")
            setword("drop-shadow-[0_0_10px_#3b82f6]")
            setnavw("w-0")
            setIsactive(false)
          }
          console.log(opennav)
      }} alt="" />
    </div>
  )
}

export default Right