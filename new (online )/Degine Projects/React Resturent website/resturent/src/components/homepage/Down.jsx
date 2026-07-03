import baryani from '../../assets/fullsizebaryani.png'
const Down = () => {
  return (
    <div className='px-10 max-sm:px-4 pb-10 bg-zinc-950'>

  <div className="relative border rounded-md border-orange-500 w-full max-md:h-43 h-auto  " >
  <img 
    src={baryani} 
    alt="Special" 
    className="w-full md:h-90 block max-md:w-300 h-38 "
  />
  
  <div className="absolute top-11 max-md:left-5 max-md:top-4 left-14 gap-10   text-white text-center">
    <div className='flex flex-col max-md:gap-1 gap-2 items-start'>

    <h2 className="text-2xl max-sm:text-sm">Today's Special</h2>
    <h1 className="text-5xl font-bold max-md:text-2xl">Spicy Biryani</h1>
    <p className=" mt-1 max-md:mt-0 text-2xl text-white max-md:text-lg">Flat <span className='text-4xl max-md:text-xl  text-orange-600 font-semibold'>25%</span> OFF</p>
    <button className="mt-4 max-mdLmt-0 px-10 py-2 max-md:mt-1 max-md:px-6 font-semibold bg-orange-600 text-white rounded-lg hover:bg-orange-900">
      Order Now
    </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Down
