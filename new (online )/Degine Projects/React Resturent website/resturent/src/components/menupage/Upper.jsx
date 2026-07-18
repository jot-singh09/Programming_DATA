import bg from '../../assets/Menupage/upperbg.png'
import lessthen from '../../assets/Menupage/lessthan.svg'
import { useState } from 'react'
const Upper = () => {
    const [first, setfirst] = useState('bg-orange-600')
    const [secound, setsecound] = useState('bg-gray-900')
    const [third, setthird] = useState('bg-gray-900')
    const [fourth, setfourth] = useState('bg-gray-900')
    const [fifth, setfifth] = useState('bg-gray-900')
    function firstfun(){
        setfirst('bg-orange-800')
        setsecound('bg-gray-900')
        setthird('bg-gray-900')
        setfourth('bg-gray-900')
        setfifth('bg-gray-900')
    }
    function secoundfun(){
        setsecound('bg-orange-600')
        setfirst('bg-gray-900')
        setthird('bg-gray-900')
        setfourth('bg-gray-900')
        setfifth('bg-gray-900')
    }
    function thirdfun(){
        setthird('bg-orange-600')
        setsecound('bg-gray-900')
        setfirst('bg-gray-900')
        setfourth('bg-gray-900')
        setfifth('bg-gray-900')
    }
    function fourthfun(){
        setfourth('bg-orange-600')
        setthird('bg-gray-900')
        setsecound('bg-gray-900')
        setfirst('bg-gray-900')
        setfifth('bg-gray-900')
    }
    function fifthfun(){
        setfifth('bg-orange-600')
        setsecound('bg-gray-900')
        setfirst('bg-gray-900')
        setthird('bg-gray-900')
        setfourth('bg-gray-900')
    }
  return (

      
      <div>
       
        <div className='w-full'>
      <div className='absolute max-sm:left-1 left-10  max-md:left-3 max-md:top-14 top-22'>
        <div className='flex gap-2 items-center max-lg:hidden  px-10 text-gray-300'>
        <a href='/' className='hover:text-orange-600 hover:scale-110 hover:font-semibold duration-300 transition-all ease-in-out'>Home</a>
        <img src={lessthen} className='w-10' alt="" />
        <a href='/menu' className='text-orange-600'>Menu</a>
        </div>
        <div className='text-gray-300 duration-300 transition-all py-2 px-6'>
            <h1 className='text-7xl max-lg:text-5xl max-sm:text-3xl font-semibold'>Our Menu</h1>
            <h1 className='py-2.5 max-md:py-1 px-2 max-lg:text-sm max-lg:w-100 max-sm:w-70 text-lg w-130 max-sm:px-0'>Delicious meals made with love. Choose your favorite from our wide range of dishes</h1>

        </div>
        <div className='text-white cursor-pointer flex items-center justify-start flex-wrap gap-4 text-xl max-lg:text-lg max-md:text-sm py-3  max-sm:px-1 px-7'>
            <h1 className={`${first} rounded-full  hover:bg-orange-700 hover:scale-110 duration-300 active:scale-50 transition-all px-4 py-1 items-center` } onClick={firstfun}>All items</h1>
            <h1 className={`${secound} rounded-full hover:bg-orange-700 hover:scale-110 active:scale-50 duration-300 transition-all  px-4 py-1 items-center` } onClick={secoundfun}>Appetizers</h1>
            <h1 className={`${third} rounded-full hover:bg-orange-700 hover:scale-110 duration-300 active:scale-50 transition-all  px-4 py-1 items-center` } onClick={thirdfun}>Main Course</h1>
            <h1 className={`${fourth} rounded-full hover:bg-orange-700 hover:scale-110 active:scale-50 duration-300 transition-all  px-4 py-1 items-center` } onClick={fourthfun}>Drinks</h1>
            <h1 className={`${fifth} rounded-full hover:bg-orange-700 hover:scale-110 duration-300 active:scale-50 transition-all  px-4 py-1 items-center` } onClick={fifthfun}>Desserts</h1>
        </div>


      </div>
      <div>
        <img src={bg} className='' alt="" />
      </div>
        </div>
      
        
    </div>
  )
}

export default Upper
