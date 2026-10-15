import React from 'react'
let openacc = ()=>{}
const Openacc = () => {
  return (
    <div className="pt-10 pl-5">
      <div>
        <h1 className="text-4xl text-white font-black">Open New Account</h1>
      </div>
      <div className=" ">
        <form onSubmit={openacc} className="flex gap-5 pt-10 pb-10 flex-wrap">
          <input
            type="text"
            className="outline-none border border-gray-600 px-3 py-1  rounded-md text-white bg-[#0B1322]"
            placeholder="Name"
          />
          <input
            type="text"
            className="outline-none border border-gray-600 px-3 py-1  rounded-md text-white bg-[#0B1322]"
            placeholder="Age"
          />
          <input
            type="text"
            className="outline-none border border-gray-600 px-3 py-1  rounded-md text-white bg-[#0B1322]"
            placeholder="Phone NO"
          />
          <input
            type="text"
            className="outline-none border border-gray-600 px-3 py-1  rounded-md text-white bg-[#0B1322]"
            placeholder="Email"
          />
          <input
            type="text"
            className="outline-none border border-gray-600 px-3 py-1  rounded-md text-white bg-[#0B1322]"
            placeholder="Pin"
          />
          <input
            type="text"
            className="outline-none border border-gray-600 px-3 py-1  rounded-md text-white bg-[#0B1322]"
            placeholder="Account Tpye Current/Saving"
          />
          <button className='bg-blue-600 px-13 rounded-md py-1'>Create</button>
        </form>
      </div>

      <div className='pt-20 pb-30 px-10 '>
        <div className='border h-70 bg-white  border-gray-600 rounded-lg'></div>
      </div>
    </div>
  );
}

export default Openacc
