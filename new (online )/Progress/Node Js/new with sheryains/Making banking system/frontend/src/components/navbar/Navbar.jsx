import React from 'react'
import Left from './Left'
import Middle from './Middle'
import Right from './Right'

const Navbar = () => {
  return (
    <div className='bg-[#070D18] px-3 text-white h-16 flex justify-between items-center fixed top-0.5 w-full shadow-md shadow-zinc-900'>
      <Left/>
      <Middle/>
      <Right/>
    </div>
  )
}

export default Navbar
