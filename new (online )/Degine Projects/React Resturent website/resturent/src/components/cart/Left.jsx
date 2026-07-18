const Left = () => {
  let data = localStorage.getItem('cart');
  const cartData = data ? JSON.parse(data) : [];
  console.log(cartData);
  
  return (
    <div>
      {cartData.map((val) => {
        return (
          <h1 className="text-white">daslfkj</h1>
        );
      })}
    </div>
  );
};

export default Left;