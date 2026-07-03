import { useState } from 'react'
import Prneertikka from '../../assets/Menupage/Images/PneerTikka.png'
import mint from '../../assets/Menupage/Images/MintMajito.png'
import baryani from '../../assets/Menupage/Images/Biryani.png'
import cake from '../../assets/Menupage/Images/ChocoLavacake.png'
import butterchicken from '../../assets/Menupage/Images/ButterChicken.png'
import heart from '../../assets/Menupage/heart.svg'
import redheart from '../../assets/Menupage/Images/redheart.svg'
import plus from '../../assets/addsign.svg'
const Right = () => {
  const [heartt, setheartt] = useState(`${heart}`)
  const [seheartt, setseheartt] = useState(`${heart}`)
  const [isactive, setisactive] = useState(false)
  function chgheart(){
    if (isactive==false){
      setheartt(`${redheart}`)
      setisactive(true)
    }
    else if (isactive==true){
      setheartt(`${heart}`)
      setisactive(false)
    }
  }
  function schgheart(){
    if (isactive==false){
      setseheartt(`${redheart}`)
      setisactive(true)
    }
    else if (isactive==true){
      setseheartt(`${heart}`)
      setisactive(false)
    }
  }
  return (
    <div className="bg-[#101113] w-219 rounded-lg flex px-1  py-1 flex-col gap-3">
      <div className="flex  border border-gray-800 justify-between rounded-md">
        <div className='flex text-gray-200 gap-2'>
          <img src={Prneertikka} className='w-60' alt="" />
          <div className='px-5 py-4 flex flex-col gap-2'>
            <h1 className='font-semibold text-2xl '>Paneer Tikka</h1>
            <p className='w-70'>Cottage cheese cubes marinated in spices and grilled to prefection </p>
              <div className='flex gap-3 py-2 text-gray-300 '>
                <h1 className='border bg-zinc-800 border-gray-600 rounded-md px-2 '>Veg</h1>
                <h1 className='border bg-zinc-800 border-gray-600 rounded-md px-2 '>Mild</h1>
              </div>
          </div>
        </div>
          <div className='text-gray-200 flex flex-col'>
            <div className='flex gap-20 px-7  py-5'>
              <h1 className='font-semibold'>₹199</h1>
              <img src={`${heartt}`}  alt="" onClick={chgheart} className='w-6 duration-1000 transition-all hover:scale-120 '/>
            </div>
            <div>
              <button className='bg-orange-600 hover:bg-orange-700 hover:scale-110 duration-300 transition-all flex gap-2 py-2 p-1 px-9 rounded-md'>Add to Cart 
                
                <img src={plus} className='w-6  border-l-black' alt="" />
              </button>
            </div>
          </div>
           


      </div>
      <div className="flex  border border-gray-800 justify-between rounded-md">
        <div className='flex text-gray-200 gap-2'>
          <img src={butterchicken} className='w-60' alt="" />
          <div className='px-5 py-4 flex flex-col gap-2'>
            <h1 className='font-semibold text-2xl '>Butter Chicken</h1>
            <p className='w-75'>Tender chickencooked in ceramy tomato gravy with indian spices </p>
              <div className='flex gap-3 py-2 text-gray-300 '>
                <h1 className='border bg-zinc-800 border-gray-600 rounded-md px-2 '>Non-Veg</h1>
                <h1 className='border bg-zinc-800 border-gray-600 rounded-md px-2 '>Mild</h1>
              </div>
          </div>
        </div>
          <div className='text-white flex flex-col'>
            <div className='flex gap-20 px-7  py-5'>
              <h1 className='font-semibold'>₹299</h1>
              <img src={`${seheartt}`}  alt="" onClick={schgheart} className='w-6 duration-1000 transition-all hover:scale-120 '/>
            </div>
            <div>
              <button className='bg-orange-600 hover:bg-orange-700 hover:scale-110 duration-300 transition-all flex gap-2 py-2 p-1 px-9 rounded-md'>Add to Cart 
                
                <img src={plus} className='w-6  border-l-black' alt="" />
              </button>
            </div>
          </div>
      </div>

      <div className="flex  border border-gray-800 justify-between rounded-md">
        <div className='flex text-gray-200 gap-2'>
          <img src={baryani} className='w-60' alt="" />
          <div className='px-5 py-4 flex flex-col gap-2'>
            <h1 className='font-semibold text-2xl '>Butter Chicken</h1>
            <p className='w-75'>Tender chickencooked in ceramy tomato gravy with indian spices </p>
              <div className='flex gap-3 py-2 text-gray-300 '>
                <h1 className='border bg-zinc-800 border-gray-600 rounded-md px-2 '>Non-Veg</h1>
                <h1 className='border bg-zinc-800 border-gray-600 rounded-md px-2 '>Mild</h1>
              </div>
          </div>
        </div>
          <div className='text-white flex flex-col'>
            <div className='flex gap-20 px-7  py-5'>
              <h1 className='font-semibold'>₹299</h1>
              <img src={`${seheartt}`}  alt="" onClick={schgheart} className='w-6 duration-1000 transition-all hover:scale-120 '/>
            </div>
            <div>
              <button className='bg-orange-600 hover:bg-orange-700 hover:scale-110 duration-300 transition-all flex gap-2 py-2 p-1 px-9 rounded-md'>Add to Cart 
                
                <img src={plus} className='w-6  border-l-black' alt="" />
              </button>
            </div>
          </div>
      </div>

       <div className="flex  border border-gray-800 justify-between rounded-md">
        <div className='flex text-gray-200 gap-2'>
          <img src={cake} className='w-60' alt="" />
          <div className='px-5 py-4 flex flex-col gap-2'>
            <h1 className='font-semibold text-2xl '>Butter Chicken</h1>
            <p className='w-75'>Tender chickencooked in ceramy tomato gravy with indian spices </p>
              <div className='flex gap-3 py-2 text-gray-300 '>
                <h1 className='border bg-zinc-800 border-gray-600 rounded-md px-2 '>Non-Veg</h1>
                <h1 className='border bg-zinc-800 border-gray-600 rounded-md px-2 '>Mild</h1>
              </div>
          </div>
        </div>
          <div className='text-white flex flex-col'>
            <div className='flex gap-20 px-7  py-5'>
              <h1 className='font-semibold'>₹299</h1>
              <img src={`${seheartt}`}  alt="" onClick={schgheart} className='w-6 duration-1000 transition-all hover:scale-120 '/>
            </div>
            <div>
              <button className='bg-orange-600 hover:bg-orange-700 hover:scale-110 duration-300 transition-all flex gap-2 py-2 p-1 px-9 rounded-md'>Add to Cart 
                
                <img src={plus} className='w-6  border-l-black' alt="" />
              </button>
            </div>
          </div>
      </div>

       <div className="flex  border border-gray-800 justify-between rounded-md">
        <div className='flex text-gray-200 gap-2'>
          <img src={mint} className='w-60' alt="" />
          <div className='px-5 py-4 flex flex-col gap-2'>
            <h1 className='font-semibold text-2xl '>Butter Chicken</h1>
            <p className='w-75'>Tender chickencooked in ceramy tomato gravy with indian spices </p>
              <div className='flex gap-3 py-2 text-gray-300 '>
                <h1 className='border bg-zinc-800 border-gray-600 rounded-md px-2 '>Non-Veg</h1>
                <h1 className='border bg-zinc-800 border-gray-600 rounded-md px-2 '>Mild</h1>
              </div>
          </div>
        </div>
          <div className='text-white flex flex-col'>
            <div className='flex gap-20 px-7  py-5'>
              <h1 className='font-semibold'>₹299</h1>
              <img src={`${seheartt}`}  alt="" onClick={schgheart} className='w-6 duration-1000 transition-all hover:scale-120 '/>
            </div>
            <div>
              <button className='bg-orange-600 hover:bg-orange-700 hover:scale-110 duration-300 transition-all flex gap-2 py-2 p-1 px-9 rounded-md'>Add to Cart 
                
                <img src={plus} className='w-6  border-l-black' alt="" />
              </button>
            </div>
          </div>
      </div>
           


    </div>
  )
}

export default Right
