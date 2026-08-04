import 'remixicon/fonts/remixicon.css'
const Buttons = () => {
  return (
    <div>
      <div className="flex text-white gap-10 items-center px-10 font-bold max-md:hidden">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Blog</h4>
        <h4>Contact</h4>
        <button className="bg-[#1A5AED] px-3 py-[2px] border-2 border-[#1A5AED] rounded-[10px] ">Get Started</button>
      </div>
      <div className="block text-white">
        <h4 className='hidden max-md:px-10 text-[20px] max-md:block'><i class="ri-bar-chart-horizontal-line"></i></h4>
      </div>
      
    </div>
  )
}

export default Buttons
