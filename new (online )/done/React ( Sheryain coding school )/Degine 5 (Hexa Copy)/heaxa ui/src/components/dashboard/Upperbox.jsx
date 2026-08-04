
const Upperbox = () => {
  return (
    <div>
      <div className="bg-white w-[81%] gap-6 mx-30 grid grid-cols-4 h-70 border px-10 py-8 border-white rounded-3xl text-black ">
        <div className=" bg-blue-100 w-[17vw] h-[12vh] gap-1 justify-center border border-blue-100 rounded-2xl flex flex-col items-center">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-indigo-600">USER001</h1>
          <h5 className="text-gray-500">User ID</h5>
        </div>
        <div className=" bg-white  w-[17vw] h-[12vh] gap-1 justify-center border border-white rounded-2xl flex flex-col items-center">
          <h1 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">Direct </h1>
          <h5 className="text-gray-500  text-sm">Referred by</h5>
        </div>
         <div className=" bg-blue-100 w-[17vw] h-[12vh] gap-1 justify-center border border-blue-100 rounded-2xl flex flex-col items-center">
          <h1 className="text-sm sm:text-base lg:text-lg font-bold text-green-600">$0.00</h1>
          <h5 className="text-gray-500">Wallet Balance</h5>
        </div>
         <div className=" bg-blue-100 w-[17vw] h-[12vh] gap-1 justify-center border border-blue-100 rounded-2xl flex flex-col items-center">
          <h1 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">None</h1>
          <h5 className="text-gray-500">Active Package</h5>
        </div>
      
        <div className="px-4">

        <h3 className="text-gray-700">Referral Link:</h3>
            
        <div className="flex flex-col  gap-2 ">
        <input type="text" id="referral-link" value="https://hexaway.com/ref/USER001" class="flex-1 w-200 px-3 py-2 bg-white border border-gray-300 rounded-lg text-xs sm:text-sm" readonly=""></input>
        <button onclick="copyReferralLink()" class="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs sm:text-sm hover:bg-indigo-700 transition-colors">Copy</button>
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Upperbox
