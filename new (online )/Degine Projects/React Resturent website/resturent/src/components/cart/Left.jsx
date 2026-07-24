import { useState } from "react";
import recyclebin from "../../assets/cartpage/delete.svg";
import add from "../../assets/cartpage/add.svg";
import minus from "../../assets/cartpage/minus.svg";
import cart from "../../assets/cartpage/cart.svg";
const Left = () => {
  const [lenght, setlenght] = useState(0);
  const [instruction, setinstruction] = useState("");


  const [cartItems, setCartItems] = useState(() => {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  });


const removecart = (itemToRemove) => {
  const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
  setCartItems(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  
  // ✅ Auto reload the page
  window.location.reload();
};


  let data = localStorage.getItem("cart");
  const cartdata = data ? JSON.parse(data) : [];


  let showcart = cartdata.map((val) => {
   
    const [quanity, setquanity] = useState(1);
    let productprice = Number(val.price);
    const [price, setprice] = useState(productprice);
    return (
      <div className="px-5 bg-[#101112] border-b  border-gray-800 py-2 flex justify-between items-center  ">
        <div className="flex ">
          <img src={val.img} className="w-45 rounded-md" alt="" />
          <div className="flex flex-col px-5 py-1 gap-2">
            <h1 className="text-2xl text-gray-300 font-bold ">{val.name}</h1>
            <div className="flex gap-3">
              <h1 className="text-green-300 border border-green-600 rounded-md px-2 text-sm py-0.5">
                {val.type[0]}
              </h1>
              <h1 className="text-green-300 border border-green-600 rounded-md px-2 text-sm py-0.5">
                {val.type[1]}
              </h1>
            </div>
            <div>
              <h1 className="text-gray-400 w-65">{val.desc}</h1>
            </div>
          </div>
        </div>
        <div className="flex px-5 gap-10 items-center ">
          <div>
            <h1 className="text-gray-200 text-lg font-bold">₹{price}</h1>
          </div>
          <div className="border border-gray-500 rounded-lg  flex gap-5 py-1 px-3 items-center ">
            <h1
              onClick={() => {
                if (quanity !== 0) {
                  setquanity(quanity + 1);
                  setprice(price + productprice);
                }
              }}
            >
              <img
                src={add}
                className="w-5 hover:scale-120 duration-300 transition-all ease-in-out"
                alt=""
              />
            </h1>
            <h1>{quanity}</h1>
            <h1
              onClick={() => {
                if (quanity !== 1) {
                  setquanity(quanity - 1);
                  setprice(price - productprice);
                }
              }}
            >
              <img
                src={minus}
                className="w-5 hover:scale-120 duration-300 transition-all ease-in-out "
                alt=""
              />
            </h1>
          </div>
          <div className="hover:scale-118 duration-300 transition-all ease-in-out bg-red-800/15 border border-red-800 rounded-md px-2 justify-center items-center py-2">
            <h1>
              <img
                className="w-6 "
                onClick={() => {
                  removecart(val);
                }}
                src={recyclebin}
                alt=""
              />
            </h1>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      {" "}
      <div className="py-6 px-1 text-white ">
        <div className="bg-[#111213] h-100 w-220 py-2  rounded-lg border overflow-y-scroll scroll-smooth duration-300 transition-all ease-in-out border-gray-600 flex flex-col gap-3 px-0 ">
             {cartItems.length === 0 ? (
            <div className="text-center h-100 w-215 flex flex-col  justify-center text-gray-400 py-10">
              <div  className="flex justify-center py-5">
                <img src={cart} className="w-15" alt="" />
              </div>
              <h1 className="text-2xl">Your cart is empty</h1>
              <p className="text-sm mt-2">Add some items to get started!</p>
            </div>
          ) : (
            showcart
          )}
         
        </div>
      </div>
      <div className="text-white bg-[#111213] h-35 px-3 py-1   w-220  rounded-lg border border-gray-600">
        <div>
          <h1 className="text-lg font-semibold">
            Special Instructions{" "}
            <span className="text-gray-400 font-light text-sm">(optional)</span>
          </h1>
          <h1 className="h-1 w-full text-gray-500">
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </h1>
          <div className="py-7">
            <input
              type="text"
              className=" border border-gray-500 w-full py-2 px-5 rounded-sm"
              value={instruction}
              onChange={(event) => {
                if (lenght != 200) {
                  setlenght(event.target.value.length);
                  setinstruction(event.target.value);
                }
                if (lenght == 200) {
                  if (event.nativeEvent.data == null) {
                    setlenght(event.target.value.length);
                    setinstruction(event.target.value);
                  }
                }
              }}
              placeholder="E.g No onions , extra cheese, seprate packing..."
            />
            <div className="flex justify-end text-gray-500 px-1">
              <h1>{lenght}/200</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
