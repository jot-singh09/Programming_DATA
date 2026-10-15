import React, { useEffect, useState } from 'react'

const Right = () => {
  let path = location.pathname;
  const [text, settext] = useState('inline')
  useEffect(() => {
    
    let fun = () => {
      if (path === "/adminpage") {
        settext("hidden");
      }
    }
    fun()
  })
  return (
    <div>
      <a href='/admin' className={`border ${text} border-[#0673D4] text-[#0673D4] rounded-full py-2 px-4`}>Sign up </a>
    </div>
  )
}

export default Right
