import React from 'react'
import Navbar from '../navbar/Navbar'
import Left from './Left'
import Right from './Right'

const Registerpage = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-between pt-12 '>
        <Left/>
        <Right/>
      </div>
    </div>
  )
}

export default Registerpage
