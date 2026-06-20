import { useState } from 'react';
import Logo from "./Logo"
const Mobilena = () => {
    const [isActive, setIsActive] = useState(false);
    const nav = document.querySelector('#navopn')
    function opennav(){
        console.log('clicked');
            if (isActive==true){
                setIsActive(false)
                nav.style.display='none';
                
            }
            else if (isActive==false){
                nav.style.display='flex'
                setIsActive(true)

            }
    }
  return (
    <div>

   
    <div className="bg-[#222] text-white w-full h-10 flex justify-between items-center">
        
      <Logo/>
      <div className="px-10">
         <h1 className="px-10 text-sm">
       <img className="w-10" onClick={opennav} src="https://imgs.search.brave.com/9oIDHljy0LUwsOi1I6VdJGegMCbw8Y2EDr5zLnxceEk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/dGh1bWJfYmFjay9m/aDI2MC9iYWNrZ3Jv/dW5kLzIwMjIwODAx/L3BuZ3RyZWUtZ2xv/c3N5LWJ1dHRvbi1i/YXItZ2xvd2luZy1u/YXZpZ2F0aW9uLXBo/b3RvLWltYWdlXzg3/OTg5MDYuanBn" alt="icon" />
      </h1>

      </div>
    </div>
      <div id="navopn" className="bg-[#444] hidden flex flex-col gap-5 px-4 underline text-white w-full">
        <h4>Home</h4>
        <h4>About</h4>
        <h4 className="pb-5">Contact</h4>
      </div>
     </div>
  )
}

export default Mobilena
