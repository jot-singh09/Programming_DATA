import { useState } from 'react'
import menu from '../../assets/menu.svg'
const Right = ({setnavactive}) => {
    const [isactive, setisactive] = useState(false)
  return (
    <div className="px-3 flex gap-3" >
           <div>
             <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7 text-gray-800 max-md:hidden"
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6"
          />

        <circle cx="9" cy="20" r="1.2" fill="currentColor" />
        <circle cx="18" cy="20" r="1.2" fill="currentColor" />
      </svg>

          </div> 

        <button className="px-5 max-md:hidden py-1.5 hover:bg-green-800 duration-500 transition-all ease-in-out hover:scale-107 shadow shadow-green-600 bg-green-700 text-white font-poppins font-medium rounded-sm">Book Conclusion</button>

        <img src={menu} onClick={()=>{
            if(isactive==false){
                setnavactive('h-62')
                setisactive(true)
            }
            else if (isactive==true){
                setnavactive('h-0')
                setisactive(false)
            }
        }} className='w-6.5 active:scale-60 duration-500 lg:hidden' alt="" />
        
    </div>
  )
}

export default Right