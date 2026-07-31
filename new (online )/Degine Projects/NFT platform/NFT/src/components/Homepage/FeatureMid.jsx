import box from '../../assets/box.svg'
import collector from '../../assets/collectors.svg'
import group from '../../assets/community.svg'
import Grow from '../../assets/Growup.svg'
const FeatureMid = () => {

  return (
    <div className="pl-10 max-md:pl-1.5 md:pr-50 pt-15 ">
        <h1 className='font-bold text-2xl pb-2 pl-1'>HEXAWAY Features</h1>
        <div className="grid grid-cols-4 max-lg:grid-cols-3 pb-3 max-md:grid-cols-2 bg-white md:border border-gray-300 w-full rounded-md ">

            <div className='pl-3 max-md:pl-1 pt-2.5 max-md:border border-gray-200 flex gap-2'>
                <div className="bg-[#E7E2FD] size-15 rounded-md flex justify-center items-center">
                    <img src={box} className='w-9' alt="" />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-2xl font-semibold'>25K+</h1>
                    <h1 className='text-gray-600 font-medium'>NFTs Created</h1>
                </div>
            </div>

            <div className='pl-3 pt-2.5  max-md:border border-gray-200 flex gap-2'>
                <div className="bg-[#FEF4DF] size-15 rounded-md flex justify-center items-center">
                    <img src={group} className='w-9' alt="" />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-2xl font-semibold'>12K+</h1>
                    <h1 className='text-gray-600 font-medium'>Artist</h1>
                </div>
            </div>

            <div className='pl-3 pt-2.5  max-md:border border-gray-200 flex gap-2'>
                <div className="bg-[#E9F8E1] size-15 rounded-md flex justify-center items-center">
                    <img src={collector} className='w-9' alt="" />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-2xl font-semibold'>45K+</h1>
                    <h1 className='text-gray-600 font-medium'>Collectors</h1>
                </div>
            </div>

            <div className='pl-3 pt-2.5  max-md:border border-gray-200 flex gap-2'>
                <div className="bg-[#FEE4EB] size-15 rounded-md flex justify-center items-center">
                    <img src={Grow} className='w-9' alt="" />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-2xl font-semibold'>350K+</h1>
                    <h1 className='text-gray-600 font-medium'>Voloume (USDT)</h1>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FeatureMid