import { useState, useEffect, useMemo, useContext } from "react";
import recyclebin from "../../assets/cartpage/delete.svg";
import add from "../../assets/cartpage/add.svg";
import minus from "../../assets/cartpage/minus.svg";
import cart from "../../assets/cartpage/cart.svg";
import { DatauseProvider } from "../../contextApi/DatauseProvider";

const Left = () => {
  
  const [instruction, setInstruction] = useState("");
  const [length, setLength] = useState(0);
  const { settotal ,setdelivery,delivery} = useContext(DatauseProvider); // ✅ Get settotal from context
  
  // Main state for cart items
  const [cartItems, setCartItems] = useState(() => {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  });

  // State for quantities - moved outside map
  const [quantities, setQuantities] = useState({});

  // Initialize quantities when cartItems change
  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach(item => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cartItems]);

  // Save to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculate total price
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const quantity = quantities[item.id] || 1;
      
      const price = Number(item.price) || 0;
      return total + (price * quantity);
    }, 0);
  }, [cartItems, quantities]);

  // ✅ FIXED: Update total in context whenever it changes
  useEffect(() => {
    settotal(totalPrice); // Just pass the total directly
  }, [totalPrice, settotal]); // Removed onTotalChange

  // Remove item from cart
  const removeCart = (itemToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
  };

  // Update quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setQuantities(prev => ({
      ...prev,
      [itemId]: newQuantity
    }));
  };

  // Render cart items
  const renderCartItems = () => {
    return cartItems.map((val) => {
      const quantity = quantities[val.id] || 1;
      setdelivery(40)
      const productPrice = Number(val.price) || 0;
      const totalItemPrice = productPrice * quantity;
     
      

      return (
        <div 
          key={val.id} 
          className="px-5  max-xl:px-0 bg-[#101112] border-b border-gray-800 py-2 max-xl:py-0.5 xl:flex xl:justify-between items-center"
        >
          <div className="flex">
            <img src={val.img} className="w-45 max-xl:w-30 max-xl:h-20 rounded-xl" alt="" />
            <div className="flex flex-col px-5 py-1 max-xl:py-0 w-full gap-2">
              <div className="flex items-center justify-between ">
              <h1 className="text-2xl text-gray-300 font-bold max-xl:text-xl">{val.name}</h1>
              <div className="flex flex-col gap-5 xl:hidden">
              <h1  className="font-bold xl:hidden text-xl">₹{totalItemPrice}</h1>
              
              </div>

              </div>
              <div className="flex gap-3 max-xl:gap-2 items-center">
                <h1 className="text-green-300 border border-green-600 rounded-xl px-2 text-sm py-0.5 max-xl:text-[10px] max-xl:py-0.5 max-xl:px-1.5 ">
                  {val.type?.[0] || ''}
                </h1>
                <h1 className="text-green-300 border max-xl:text-[10px] max-xl:py-0.5 max-xl:px-1.5 border-green-600 rounded-xl px-2 text-sm py-0.5">
                  {val.type?.[1] || ''}
                </h1>
              </div>
              <div>
                <h1 className="text-gray-400 max-xl:hidden w-65">{val.desc}</h1>
              </div>
            </div>
          </div>
          
          <div className="flex  px-5 gap-10 items-center max-xl justify-between">
            <div className="max-xl:hidden">
              <h1 className="text-gray-200 text-xl font-bold">₹{totalItemPrice}</h1>
            </div>

            <div className="">
         
            <div className="border max-xl:ml-28.5 max-xl:mb-5 border-gray-500 rounded-xl max-xl:rounded-lg  flex gap-5 py-1 px-3 max-xl:px-2 max-xl:py-0.5 items-center  ">
              <h1 
                onClick={() => updateQuantity(val.id, quantity + 1)}
                className="cursor-pointer"
              >
                <img
                  src={add}
                  className="w-5 max-xl:w-2 hover:scale-110 duration-300 transition-all ease-in-out"
                  alt="Add"
                />
              </h1>
              <h1>{quantity}</h1>
              <h1 
                onClick={() => updateQuantity(val.id, quantity - 1)}
                className="cursor-pointer"
              >
                <img
                  src={minus}
                  className="w-5 max-xl:w-2 hover:scale-110 duration-300 transition-all ease-in-out"
                  alt="Minus"
                />
              </h1>
            </div>
               </div>
            
            <div 
              className="hover:scale-110 max-xl:mb-5 duration-300 transition-all ease-in-out xl:bg-red-800/15 border xl:border-red-800 rounded-xl px-2 py-2 cursor-pointer max-xl:bg-red-700/13 max-xl:border-red-950"
              onClick={() => removeCart(val)}
            >
              <img className="w-6 max-xl:w-5" src={recyclebin} alt="Delete" />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="py-6 px-1 max-xl:px-0 text-white">
        <div className="bg-[#111213] h-100 w-220 max-xl:w-full  py-2 rounded-xl border overflow-auto scroll-smooth duration-300 transition-all ease-in-out border-gray-600 flex flex-col gap-3 px-0">
          {cartItems.length === 0 ? ( 
            
           
            <div className="text-center h-100 w-215 max-xl:w-79 flex flex-col justify-center text-gray-400 py-10">
              <div className="flex justify-center py-5">
                <img src={cart} className="w-15" alt="" />
              </div>
              <h1 className="text-2xl">Your cart is empty</h1>
              <p className="text-sm mt-2">Add some items to get started!</p>
            </div>
          ) : (
            renderCartItems()
          )}
        </div>
      </div>

  
     
      <div className="text-white  bg-[#111213] h-35 max-xl:h-30 px-3 py-1 w-220  max-xl:w-full rounded-xl border border-gray-600 max-xl:py-3">
        <div>
          <h1 className="text-xl font-semibold max-xl:text-sm">
            Special Instructions{" "}
            <span className="text-gray-400 font-light text-sm">(optional)</span>
          </h1>
         
          <div className="py-7 max-xl:py-3 ">
            <input
              type="text"
              className="border max-xl:text-sm max-xl:px-2 text-white border-gray-500 w-full py-2 px-5 rounded-sm "
              value={instruction}
              onChange={(event) => {
                const value = event.target.value;
                if (value.length <= 200) {
                  setLength(value.length);
                  setInstruction(value);
                }
              }}
              placeholder="E.g No onions, extra cheese, separate packing..."
            />
            <div className="flex justify-end text-gray-500 px-1 max-xl:pt-2">
              <h1>{length}/200</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;