import { useState } from "react"

const Right = ({settheme,theme}) => {
    const [dark, setdark] = useState('flex')
    const [light, setlight] = useState('hidden')
    const [active, setactive] = useState(false)

const changetheme = ()=>{
   if (active==false){
     settheme('dark')
     setdark('hidden')
     setlight('flex')
     setactive(true)
    }
    else if (active==true){
        settheme('light')
        setdark('flex')
        setlight('hidden')
        setactive(false)
    }
    
   
}
  return (
    <div className="flex gap-3">
        <div onClick={changetheme}className={`${dark}`}>

        <svg 
    className="w-6 h-6 text-black hover:text-zinc-600 hover:scale-110 transition-all duration-500 ease-in-out "
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
>
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        
        
        />
</svg>
        </div>

        <div className={`${light} hover:scale-110 transition-all duration-500 ease-in-out`} onClick={changetheme}>
            <svg 
    className="w-6 h-6 text-indigo-300 hover:text-indigo-200 transition-colors duration-200"
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
>
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
</svg>
        </div>
    </div>
  )
}

export default Right