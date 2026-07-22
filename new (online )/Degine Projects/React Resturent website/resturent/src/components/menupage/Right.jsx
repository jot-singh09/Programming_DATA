import { useContext, useState } from "react";
import heart from "../../assets/Menupage/heart.svg";
import redheart from "../../assets/Menupage/Images/redheart.svg";
import plus from "../../assets/addsign.svg";
import { DatauseProvider } from "../../contextApi/DatauseProvider";

const Right = () => {
  const { val, showcartpop, setShowcartpop } = useContext(DatauseProvider);
  const [items, setItems] = useState(val);

  const toggleHeart = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isLiked: !item.isLiked } : item,
      ),
    );
  };

  // ✅ Function to add item to cart in localStorage
  const addToCart = (item) => {
    // Get existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex !== -1) {
      // If item exists, increase quantity
      cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
    } else {
      // If new item, add it with quantity 1
      cart.push({
        ...item,
        quantity: 1,
        addedAt: new Date().toISOString()
      });
    }
    
    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update button text
    const updatedItems = items.map(i => 
      i.id === item.id ? { ...i, button: 'In Cart', iscart: true } : i
    );
    setItems(updatedItems);
    
    // Show popup
    setShowcartpop("fixed");
    setTimeout(() => {
      setShowcartpop("invisible");
    }, 2000);
  };

  // ✅ Function to remove from cart
  const removeFromCart = (itemId) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update button text
    const updatedItems = items.map(i => 
      i.id === itemId ? { ...i, button: 'Add to Cart', iscart: false } : i
    );
    setItems(updatedItems);
  };

  // ✅ Function to check if item is in cart
  const isItemInCart = (itemId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.some(item => item.id === itemId);
  };

  // ✅ Get total cart count
  const getCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  return (
    <div className="flex flex-col gap-5 px-3 max-sm:px-1">
      {/* Popup notification */}
      <h2
        className={`bg-orange-700 py-2 mt-3 px-5 text-green-100 fixed top-0 right-0 rounded-md duration-500 transition-all ${showcartpop}`}
      >
        Item Added Successfully
      </h2>

      {items.map((val) => {
        const heartIcon = val.isLiked ? redheart : heart;
        const isInCart = isItemInCart(val.id);

        return (
          <div key={val.id} className="w-210 max-sm:w-full max-xl:w-200">
            <div className="bg-[#121314] rounded-lg text-gray-200 flex flex-col sm:flex-row justify-between">
              {/* Image and Details Section */}
              <div className="flex flex-col sm:flex-row w-full">
                {/* Image - Mobile friendly */}
                <div className="w-full sm:w-auto">
                  <img
                    src={val.img}
                    className="w-full sm:w-55 h-48 sm:h-auto object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                    alt={val.name}
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-1 sm:gap-2 px-3 sm:px-5 py-3 sm:py-0">
                  <h1 className="font-bold text-xl sm:text-2xl pt-0 sm:pt-3">
                    {val.name}
                  </h1>
                  <p className="text-xs sm:text-sm w-full sm:w-70 line-clamp-2">
                    {val.desc}
                  </p>
                  <div className="flex items-center py-1 sm:py-2 gap-3 sm:gap-5 flex-wrap">
                    <h1 className="px-2 sm:px-3 py-0.5 border rounded-md text-xs sm:text-sm border-gray-600 bg-[#101113]">
                      {val.type[0]}
                    </h1>
                    <h1 className="px-2 sm:px-3 py-0.5 border rounded-md text-xs sm:text-sm border-gray-600 bg-[#101113]">
                      {val.type[1]}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Price, Heart, and Add to Cart Section */}
              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-normal px-3 sm:px-2 py-3 sm:py-0 w-full sm:w-auto">
                <div className="flex items-center gap-4 sm:gap-20 px-0 sm:px-7 py-0 sm:py-5 w-full sm:w-auto justify-between sm:justify-normal">
                  <h1 className="font-semibold text-lg max-md:px-2 max-sm:text-2xl sm:text-xl">
                    {val.price}
                  </h1>
                  <img
                    src={heartIcon}
                    alt="heart"
                    onClick={() => toggleHeart(val.id)}
                    className="w-5 sm:w-6 duration-300 transition-all hover:scale-125 cursor-pointer active:scale-90"
                  />
                </div>

                <div className="py-1 sm:py-5 w-full sm:w-auto max-md:px-5">
                  <button 
                    className={`w-full sm:w-auto py-1.5 sm:py-2 px-4 sm:px-6 text-sm sm:text-base items-center font-semibold 
                      ${isInCart ? 'bg-orange-800 hover:bg-orange-900' : 'bg-orange-600 hover:bg-orange-700'} 
                      hover:scale-105 sm:hover:scale-110 duration-700 transition-all flex gap-2 rounded-md justify-center`}
                    onClick={() => {
                      if (isInCart) {
                        // If already in cart, remove it
                        removeFromCart(val.id);
                      } else {
                        // Add to cart
                        addToCart(val);
                      }
                    }}
                  >
                    {isInCart ? 'Remove ' : 'Add to Cart'}
                    <img
                      src={plus}
                      className="w-4 sm:w-6 hidden sm:block"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Right;