import React, { useEffect, useState } from 'react'

const Middle = () => {
  let path = location.pathname
  const [Navbar, setNavbar] = useState([
    {
      name:'Deposit',
      link:'/deposit'
    },
    {
      name:'Withdrall',
      link:'/withdrall'
    },
    {
      name:'History',
      link:'/history'
    },

  ])
useEffect(() => {
  if (path === '/admin'){
    setNavbar([
          {
      name:'Deposit',
      link:'/deposit'
    },
    {
      name:'Withdrall',
      link:'/withdrall'
    },
    {
      name:'History',
      link:'/history'
    },
    {
      name:'Balance',
      link:'/balance'
    },
    {
      name:'All Accounts',
      link:'/allaccounts'
    },

    ])
  }
  else if (path === '/register') {
    setNavbar([]);
  }
}, [path]);

  return (
    <div className='flex pr-15 gap-4  '>
  {Navbar.map((nav)=>{ 
    return(
      <div>
          <a className='text-lg duration-300  hover:text-[#0673D4] text-gray-300 font-semibold ' href={nav.link}>{nav.name}</a>
      </div>
    )
  
  })} 

    </div>
  )
}

export default Middle
