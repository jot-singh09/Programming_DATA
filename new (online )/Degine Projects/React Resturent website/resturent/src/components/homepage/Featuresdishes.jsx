import pizza from '../../assets/bpizza.png'
import burger from '../../assets/bburger.png'
import cake from '../../assets/bcake.png'
import bariini from '../../assets/bbirgani.png'
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

        <div className="border max-md:flex border-gray-500 rounded-md  max-md:justify-between">
          <h1 className='absolute border border-orange-700 bg-orange-600 rounded-full px-1 text-[13px] m-1'>20% off</h1>
        <img src={pizza} className='rounded-t-md max-md:w-50 max-sm:w-30 max-sm:h-25' alt="" />
        <div>

        <div className='flex justify-between px-2  pt-2'>
        <h1 className='font-black text-xl max-sm:text-lg'>Cheese Pizza</h1>
        <h1 className='font-bold flex text-lg gap-1'><img src={star} className='w-6' alt="" />4.6</h1>
        </div>


        <div className='px-2 py-2 max-sm:py-1'>
          <h1 className='text-gray-300 max-sm:text-sm'>Classic cheese pizza with a blend of mozzarella</h1>
        </div>
        <div className='flex justify-between px-4 max-sm:py-1 py-2 items-center '>
          <h1 className='text-2xl font-semibold'>₹249</h1>
          <button className='flex bg-orange-600 rounded-md  px-6 py-1 max-md:px-4'>Add <img src={add} className='w-6 ' alt="" /></button>
        </div>
        </div>
        </div>

        <div className="border max-md:flex border-gray-500 max-md:justify-between rounded-md  ">
           <h1 className='absolute border border-orange-700 bg-orange-600 rounded-full px-1 text-[13px] m-1'>13% off</h1>
        <img src={burger} className='rounded-t-md max-md:w-50 max-sm:w-30 max-sm:h-25' alt="" />
        <div>
        <div className='flex justify-between px-2 pt-2'>
        <h1 className='font-black text-xl max-sm:text-lg'>Chicken Burger</h1>
        <h1 className='font-bold flex text-lg gap-1'><img src={star} className='w-6' alt="" />4.5</h1>
        </div>


        <div className='px-3 py-2 max-sm:py-1 max-sm:px-2 '>
          <h1 className='text-gray-300 max-sm:text-sm'>Grilled chiken burger with cheesey sauce</h1>
        </div>
        <div className='flex justify-between px-4 py-2  max-sm:py-1 items-center '>
          <h1 className='text-2xl font-semibold'>₹179</h1>
          <button className='flex bg-orange-600 rounded-md  px-6 py-1 max-md:px-4'>Add <img src={add} className='w-6' alt="" /></button>
        </div>
        </div>
        </div>


        <div className="border max-md:flex border-gray-500 rounded-md max-md:justify-between ">
           <h1 className='absolute border border-orange-700 bg-orange-600 rounded-full px-1 text-[13px] m-1'>7% off</h1>
        <img src={bariini} className='rounded-t-md max-md:w-50 max-sm:w-30 max-sm:h-25' alt="" />
        <div>
        <div className='flex justify-between px-2 pt-2'>
        <h1 className='font-black text-xl max-sm:text-lg'>Veg Biryani</h1>
        <h1 className='font-bold flex text-lg gap-1'><img src={star} className='w-6' alt="" />4.7</h1>
        </div>


        <div className='px-2 py-2 max-sm:py-1'>
          <h1 className='text-gray-300 max-sm:text-sm'>Aromatic basmati rice with veggies & spices</h1>
        </div>
        <div className='flex justify-between px-4 py-2 max-sm:py-1 items-center '>
          <h1 className='text-2xl font-semibold'>₹199</h1>
          <button className='flex bg-orange-600 rounded-md  px-6 py-1 max-md:px-4'>Add <img src={add} className='w-6' alt="" /></button>
        </div>
        </div>
        </div>

        <div className="border max-md:flex border-gray-500 rounded-md max-md:justify-between ">
           <h1 className='absolute border border-orange-700 bg-orange-600 rounded-full px-1 text-[13px] m-1 '>17% off</h1>
        <img src={cake} className='rounded-t-md max-md:w-50 max-sm:w-30 max-sm:h-25' alt="" />
        <div>
        <div className='flex justify-between px-2 pt-2'>
        <h1 className='font-black text-xl max-sm:text-[17px]'>Choco Lava Cake</h1>
        <h1 className='font-bold  flex text-lg gap-1'><img src={star} className='w-6' alt="" />4.8</h1>
        </div>


        <div className='px-3 max-sm:py-1  py-2'>
          <h1 className='text-gray-300 max-sm:text-sm'>Warm chocolate cake with molten center</h1>
        </div>
        <div className='flex justify-between px-4 py-2 max-sm:py-1 items-center '>
          <h1 className='text-2xl font-semibold'>₹249</h1>
          <a href='/' className='flex bg-orange-600 rounded-md  px-6 py-1 max-md:px-4'>Add <img src={add} className='w-6' alt="" /></a>
        </div>
        </div>
        </div>
        

      </div>
    </div>
  )
}

export default Featuresdishes
