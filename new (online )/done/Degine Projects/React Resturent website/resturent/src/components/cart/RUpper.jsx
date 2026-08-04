import { useContext } from "react"
import { DatauseProvider } from "../../contextApi/DatauseProvider"

const RUpper = () => {
 const {total,delivery}= useContext(DatauseProvider)
  return (
    <div className="bg-[#101112] border border-gray-700 rounded-lg w-80 max-xl:w-full h-87"> 
    <div className="flex flex-col gap-5 text-gray-300 px-5 pt-7">
      <h1 className="font-semibold text-2xl ">Order Summery</h1>
     <div className=" flex justify-between items-center px-3">
      <h1>Subtotal </h1>
      <h1 className="text-lg font-semibold">₹{total}</h1>
     </div>
      <div className=" flex justify-between items-center px-3">
      <h1>Tax (10%) </h1>
      <h1 className="text-lg font-semibold">₹{(total*10)/100}</h1>
     </div>
     <div className=" flex justify-between items-center px-3">
      <h1>Dilevery Fee </h1>
      <h1 className="text-lg font-semibold">₹40</h1>
     </div>
    </div>
    <div className="text-gray-600 w-70 max-xl:w-[90%] justify-self-center pt-3">
      <hr />
    </div>
    <div>
      <div className="text-gray-200 px-5 pt-6 flex justify-between items-center">
        <h1 className="text-2xl font-black">Total</h1>
        <h1 className="text-orange-500 text-4xl font-extrabold">{total+((total*10)/100)+delivery}</h1>
      </div>
      <h1 className="text-gray-400 px-5 pt-2">Inclusive of all taxes</h1>
    </div>

    
    

  </div>
  )
}

export default RUpper