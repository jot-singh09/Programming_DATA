import pizza from '../../assets/bpizza.png'
import burger from '../../assets/bburger.png'
import star from '../../assets/star.svg'
import add from '../../assets/addsign.svg'
const Featuresdishes = () => {
  return (
    <div className="px-10 max-md:px-4">
      <div className="flex justify-between max-md:px-1">
        <h1 className="text-white font-black text-2xl">Features Dishes</h1>
        <h1 className="text-gray-400 md:px-5 md:text-lg cursor-pointer ">View all</h1>
      </div>
      <div className="grid grid-cols-4 py-4 gap-2 max-md:gap-3 max-md:grid-cols-1 text-gray-200">

        <div className="border max-md:flex border-gray-500 rounded-md  ">
        <img src={pizza} className='rounded-t-md max-md:w-30' alt="" />
        <div>
        <div className='flex justify-between px-2 pt-2'>
        <h1 className='font-black text-xl'>Cheese pizza</h1>
        <h1 className='font-bold flex text-lg gap-1'><img src={star} className='w-6' alt="" />4.6</h1>
        </div>


        <div className='px-2 py-2'>
          <h1 className='text-gray-300'>Classic cheese pizza with a blend of mozzarella</h1>
        </div>
        <div className='flex justify-between px-4 py-2 items-center '>
          <h1 className='text-2xl font-semibold'>₹249</h1>
          <button className='flex bg-orange-600 rounded-md  px-6 py-1 max-md:px-4'>Add <img src={add} className='w-6' alt="" /></button>
        </div>
        </div>
        </div>

        <div className="border max-md:flex border-gray-500 rounded-md  ">
        <img src={burger} className='rounded-t-md max-md:w-32 max-md:h-30' alt="" />
        <div>
        <div className='flex justify-between px-2 pt-2'>
        <h1 className='font-black text-xl'>Cheese pizza</h1>
        <h1 className='font-bold flex text-lg gap-1'><img src={star} className='w-6' alt="" />4.6</h1>
        </div>


        <div className='px-2 py-2'>
          <h1 className='text-gray-300'>Classic cheese pizza with a blend of mozzarella</h1>
        </div>
        <div className='flex justify-between px-4 py-2 items-center '>
          <h1 className='text-2xl font-semibold'>₹249</h1>
          <button className='flex bg-orange-600 rounded-md  px-6 py-1 max-md:px-4'>Add <img src={add} className='w-6' alt="" /></button>
        </div>
        </div>
        </div>


        <div className="border max-md:flex border-gray-500 rounded-md  ">
        <img src={pizza} className='rounded-t-md max-md:w-30' alt="" />
        <div>
        <div className='flex justify-between px-2 pt-2'>
        <h1 className='font-black text-xl'>Cheese pizza</h1>
        <h1 className='font-bold flex text-lg gap-1'><img src={star} className='w-6' alt="" />4.6</h1>
        </div>


        <div className='px-2 py-2'>
          <h1 className='text-gray-300'>Classic cheese pizza with a blend of mozzarella</h1>
        </div>
        <div className='flex justify-between px-4 py-2 items-center '>
          <h1 className='text-2xl font-semibold'>₹249</h1>
          <button className='flex bg-orange-600 rounded-md  px-6 py-1 max-md:px-4'>Add <img src={add} className='w-6' alt="" /></button>
        </div>
        </div>
        </div>

        <div className="border max-md:flex border-gray-500 rounded-md  ">
        <img src={pizza} className='rounded-t-md max-md:w-30' alt="" />
        <div>
        <div className='flex justify-between px-2 pt-2'>
        <h1 className='font-black text-xl'>Cheese pizza</h1>
        <h1 className='font-bold flex text-lg gap-1'><img src={star} className='w-6' alt="" />4.6</h1>
        </div>


        <div className='px-2 py-2'>
          <h1 className='text-gray-300'>Classic cheese pizza with a blend of mozzarella</h1>
        </div>
        <div className='flex justify-between px-4 py-2 items-center '>
          <h1 className='text-2xl font-semibold'>₹249</h1>
          <button className='flex bg-orange-600 rounded-md  px-6 py-1 max-md:px-4'>Add <img src={add} className='w-6' alt="" /></button>
        </div>
        </div>
        </div>
        

      </div>
    </div>
  )
}

export default Featuresdishes
