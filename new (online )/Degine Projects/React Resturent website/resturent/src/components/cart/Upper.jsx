import { useContext } from "react"
import { DatauseProvider } from "../../contextApi/DatauseProvider"

const Upper = () => {
  const {orderplace} = useContext(DatauseProvider)
  
  return (
    <div className="flex justify-between items-center">
      <div className="text-gray-200 flex flex-col gap-3 max-md:gap-1 ">
        <h1 className="text-6xl font-bold max-md:text-3xl max-md:font-black">Your Cart</h1>
        <p className="px-2 max-md:px-1 max-md:text-sm">Review your items and proceed to checkout.</p>
      </div>
     <div>
       <h2
        className={`bg-orange-700 py-2 mt-3 px-5 text-green-100 fixed top-0 right-0 rounded-md duration-500 transition-all ${orderplace}`}
      >
        Order Placed Sucessfully
      </h2>
     </div>
    </div>
  )
}

export default Upper
