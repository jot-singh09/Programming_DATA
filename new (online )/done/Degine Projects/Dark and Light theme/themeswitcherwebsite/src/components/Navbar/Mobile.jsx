
const Mobile = ({height}) => {
  return (
    <div className="duration-1000 transition-all ease-in-out">
        <div className={` bg-gray-100  dark:bg-[#0A1219] shadow-sm shadow-gray-400 dark:shadow-gray-800 ${height} overflow-hidden backdrop-blur-md duration-1000 transition-all ease-in-out`}>
            <div className={`flex text-lg px-3 py-3 flex-col gap-3 text-gray-700 dark:text-white `}>
                <div className=" bg-linear-to-r from-purple-600 to-indigo-600  px-2 text-white font-bold py-1.5 flex justify-between items-center rounded-lg">
                <p className="font-inter">Home</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-4 h-4 text-white" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
                </div>

                <div className= "font-medium px-2 text-gray-700 dark:text-white flex justify-between items-center">
                <p className="font-inter">Features</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-4 h-4 text-slate-400" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
                </div>

                <div className= "font-medium px-2 text-gray-700 dark:text-white flex justify-between items-center">
                <p className="font-inter">Services</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-4 h-4 text-slate-400" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
                </div>

                <div className= "font-medium px-2 text-gray-700 dark:text-white flex justify-between items-center">
                <p className="font-inter">Pricing
</p>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-4 h-4 text-slate-400" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
                </div>

                <div className= "font-medium px-2 text-gray-700 dark:text-white flex justify-between items-center">
                <p className="font-inter">Testimonlals</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-4 h-4 text-slate-400" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
                </div>
                <div className= "font-medium px-2 text-gray-700 dark:text-white flex justify-between items-center">
                <p className="font-inter">Contact</p>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-4 h-4 text-slate-400" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
                </div>
               
                 <div className="w-full bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-sm py-3 rounded-xl shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles w-4 h-4" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                <p className="font-inter">Get Started</p>
               
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mobile 