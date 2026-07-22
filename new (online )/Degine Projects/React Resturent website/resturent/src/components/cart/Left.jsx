import pizza from "../../assets/pizza.png";
const Left = () => {
  let data = localStorage.getItem('cart');
  const cartData = data ? JSON.parse(data) : [];
  console.log(data)
  let showcart = cartData.map((val)=>{
    return(
      <div className="py-6 px-1">
          <div className="bg-[#111213] h-100 w-220 py-10 rounded-lg border border-gray-700">
          <div className="px-5 bg-gray-500 rounded-lg">
            <div className="flex ">
            <img src={val.img} className="w-45 rounded-md" alt="" />
            <div className="flex px-5 py-1 gap-2">
            <h1 className="text-2xl font-bold ">{val.name}</h1>
            <div className="flex">
              <h1 className="bg-linear-0 from-green-700 to-green-900">Veg</h1>
            </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div>
    {showcart}
     
    </div>
  );
};

export default Left;