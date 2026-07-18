import search from '../../assets/searchicon.svg'
import filter from '../../assets/Menupage/Images/filterimg.svg'
const Middle = () => {
  return (
    <div className='max-sm:py-20 max-sm:w-full  max-lg:py-2 max-sm:gap-5'>
        <div  className=' pb-5 py-10 px-15 max-xl:px-10 max-sm:px-4 bg-zinc-950 max-lg:flex max-lg:gap-5 max-sm:gap-2'>

        <div className='flex justify-between max-lg:border max-lg:w-160  max-sm:w-65 max-lg:border-gray-500 max-lg:rounded-md'>
            <div className='flex gap-25 justify-between'>
            <div className='flex items-center relative max-lg:w-full '>

            <img src={search} className='w-6  left-2 absolute' alt="" />
            <input type="text" className="w-70 lg:rounded-md lg:border lg:border-gray-500 max-lg:w-full  p-1  px-10 text-white" placeholder='Search for dishes ...' /></div>
            <div className='max-lg:hidden'>
                <h1 className='text-3xl font-semibold text-white'>All Items</h1>
            </div>
            </div>
                <div className='flex items-center gap-5 max-lg:hidden px-3'>
                    <h1 className='text-gray-300'>120+ items found</h1>
                    <select name="dishes" className='border border-gray-500 rounded-md text-gray-300 bg-gray-900 p-1 px-5 py-1' >
                        <option value="Popularity">Popularity</option>
                        <option value="sweet">Sweet</option>
                        <option value="Thali">Thali</option>
                    </select>
                </div>
            </div>
            <div className='lg:hidden'>

        <h1 className='border border-gray-500 bg-[#101113] active:scale-50 duration-150 transition-all ease-in-out p-1 px-1 rounded-md'>

            <img src={filter} className='w-6 lg:hidden ' alt="" />
        </h1>
            </div>
            
        </div>
    </div>
  )
}

export default Middle
