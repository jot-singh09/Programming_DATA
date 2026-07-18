import star from '../../assets/star.svg'
import star_half from '../../assets/star-half.svg'
const Left = () => {
  return (
    <div className=" px-15 max-xl:px-10  py-2 cursor-pointer max-lg:hidden">
      <div className="border border-gray-800 w-70 max-xl:w-55 rounded-md bg-[#101113] pb-5">
        <div className="text-gray-100 flex py-2 justify-between px-3">
            <h1 className="font-semibold">Filters</h1>
            <h1 className="text-orange-600 font-medium">Clear All</h1>
        </div>
         <div className="w-full max-w-md">
      {/* Header */}
      

      {/* Bar Container */}
      <div className="relative px-4 py-2">
        {/* Track */}
        <div className="relative h-1.5  bg-gray-200 rounded-full">
          {/* Filled Progress */}
          <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-orange-600 rounded-full" />
          
          {/* Left Thumb */}
          <div className="absolute -top-1.5 left-0 w-4 h-4 bg-orange-600 border-2 border-orange-600 rounded-full shadow-sm transform -translate-x-1/2" />
          
          {/* Right Thumb */}
          <div className="absolute -top-1.5 right-0 w-4 h-4 bg-orange-600 border-2 border-orange-600 rounded-full shadow-sm transform translate-x-1/2" />
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-2 px-4">
        <span className="text-xs text-gray-500">$0</span>
        <span className="text-xs text-gray-500">$1000+</span>
      </div>
    </div>
    <div className="py-5 px-1 text-gray-600">
    <hr />
    </div>
    <div className="flex flex-col gap-4">
      <div><h1 className="text-[17px] text-gray-200 font-semibold px-3">Dietary Preference</h1></div>
      <div className="flex flex-col gap-1">
        <div className="px-3 flex gap-2 ">
          <input type="checkbox" className="bg-none border border-gray-400 " />
          <h1 className="text-gray-400">Vegetarian</h1>
        </div>
        <div className="px-3 flex gap-2 ">
          <input type="checkbox" className="bg-none border border-gray-400 hover:scale-110 duration-700 transition-all" />
          <h1 className="text-gray-400">Non-vegetarian</h1>
        </div>
        <div className="px-3 flex gap-2 ">
          <input type="checkbox" className="bg-none border border-gray-400 hover:scale-110 duration-700 transition-all" />
          <h1 className="text-gray-400">Vegan</h1>
        </div>
        <div className="px-3 flex gap-2 ">
          <input type="checkbox" className="bg-none border border-gray-400 hover:scale-110 duration-700 transition-all" />
          <h1 className="text-gray-400">Gluten Free</h1>
        </div>

      </div>
    </div>
    <div className="py-5 px-1 text-gray-600">
    <hr />
    </div>
    <div className="flex flex-col gap-4">
      <div><h1 className="text-[17px] text-gray-200 font-semibold px-3">Spice Level</h1></div>
      <div className="flex flex-col gap-1">
        <div className="px-3 flex gap-2 ">
          <input type="checkbox" className="bg-none border border-gray-400 hover:scale-110 duration-700 transition-all" />
          <h1 className="text-gray-400">Mild</h1>
        </div>
        <div className="px-3 flex gap-2 ">
          <input type="checkbox" className="bg-none border border-gray-400 hover:scale-110 duration-700 transition-all" />
          <h1 className="text-gray-400">Medium</h1>
        </div>
        <div className="px-3 flex gap-2 ">
          <input type="checkbox" className="bg-none border border-gray-400 hover:scale-110 duration-700 transition-all" />
          <h1 className="text-gray-400">Spicy</h1>
        </div>

      </div>
    </div>

    <div className="py-5 px-1 text-gray-600">
    <hr />
    </div>
    
<div><h1 className="text-[17px] text-gray-200 font-semibold px-3">Rating</h1></div>
    <div className='flex px-3 py-1 gap-3'>
      <div className='flex'>

        <img src={star} className='w-6' alt="" />
        <img src={star} className='w-6' alt="" />
        <img src={star} className='w-6' alt="" />
        <img src={star} className='w-6' alt="" />
        <img src={star_half} className='w-5' alt="" />
      </div>
        <h1 className='text-gray-400'>4.0 & above</h1>
    </div>
      </div>
    </div>
  )
}

export default Left
