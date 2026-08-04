import { useEffect, useState } from "react";
import menu from '../../assets/menu.svg'
const Right = ({theme,settheme,setheight}) => {
  const [icon, seticon] = useState("hidden")
  const [sumicon, setsumicon] = useState("hidden")
  const [active, setactive] = useState(false)
    useEffect(() => {
      if (theme=="light"){
          seticon("block")
          setsumicon("hidden")
        }
        else if (theme=="dark"){
          setsumicon("block")
          seticon("hidden")
      }
    
     
    }, [theme])
    
    const changetheme = ()=>{
      if (theme=="light"){
        settheme("dark")
        localStorage.setItem('theme','dark')
      }
      else if (theme=="dark"){
        settheme("light")
        localStorage.setItem('theme','light')
      }
    }

    function opennav (){
      if (active==false){
        setheight("h-80")
        setactive(true)
      }
      else if (active==true){
        setheight("h-0")
        setactive(false)
      }

    }

  return (
    <div className="pr-3 flex gap-3 items-center">
      <div className="border-2 rounded-full p-0.5 dark:border-gray-800 duration-1000 transition-all ease-in-out max-lg:p-0.5 border-gray-200 justify-between dark:p-1 hover:scale-105 " onClick={()=>{
        changetheme()
      }}>
        <svg 
  xmlns="http://www.w3.org/2000/svg" 
  className={`${icon} w-6 h-6 text-yellow-500 dark:text-yellow-400 duration-1000 transition-all ease-in-out`}
  fill="currentColor" 
  viewBox="0 0 24 24"
  
>
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
</svg>

<svg 
  xmlns="http://www.w3.org/2000/svg" 
  className={` ${sumicon} w-5 h-5 text-yellow-500 dark:text-yellow-400 duration-1000 transition-all ease-in-out`}
  fill="currentColor" 
  viewBox="0 0 24 24"
>
  <circle cx="12" cy="12" r="5" />
  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round"
  />
</svg>

        
      </div>
      <button  className="bg-[#9014FD]  max-lg:hidden max-lg:px-3 dark:text-white px-5 py-1 rounded-lg font-semibold ">
        Get Started
      </button>

        <button
         
          className="lg:hidden p-2 text-slate-700 hover:text-purple-700 bg-linear-to-r from-purple-600 to-indigo-600 hover:bg-purple-50 rounded-xl border border-grsy-600 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu" onClick={opennav}
        >
          <img src={menu} className="w-6" alt="" />
        </button>
    </div>
  );
};

export default Right;
