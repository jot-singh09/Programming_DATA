import search from '../../assets/searchicon.svg'
const Middle = () => {
  return (
    <div>
        <div  className='max-md:py-30 pb-5 py-6 px-15 bg-zinc-950'>

        <div className='flex justify-between'>
            <div className='flex gap-25'>
            <div className='flex items-center relative'>

            <img src={search} className='w-6 left-2 absolute' alt="" />
            <input type="text" className="w-70 border p-1 rounded-md px-10 border-gray-500 text-white" placeholder='Search for dishes ...' /></div>
            <div className=''>
                <h1 className='text-3xl font-semibold text-white'>All Items</h1>
            </div>
            </div>
                <div className='flex items-center gap-5'>
                    <h1 className='text-gray-300'>120+ items found</h1>
                    <select name="dishes" className='border border-gray-500 rounded-md text-gray-300 bg-gray-900 p-1 px-5 py-1' >
                        <option value="Popularity">Popularity</option>
                        <option value="sweet">Sweet</option>
                        <option value="Thali">Thali</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Middle
