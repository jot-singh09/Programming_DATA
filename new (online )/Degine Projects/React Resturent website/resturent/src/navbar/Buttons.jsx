const Buttons = () => {
  return (
    <div className="max-md:hidden">
      <div className="text-gray-200 flex gap-5   ">
        <p className=" after:scale-100 after:absolute relative after:bottom-0  after:bg-orange-500 after:w-full after:h-0.5   after:left-0">Home</p>
        <a 
  className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 after:origin-left hover:after:w-full hover:ease-in-out" 
  href="/"
>
  Menu
</a>
        <a className=" after:scale-x-0 hover:after:scale-x-100 after:absolute relative after:bottom-0 after:w-0 after:bg-orange-500 hover:after:w-full after:h-0.5   after:left-0  after:transition-all after:duration-300 after:origin-left hover:ease-in-out "href="/">Cart</a>
        <a className=" after:scale-x-0 hover:after:scale-x-100 after:absolute relative after:bottom-0 after:w-0 after:bg-orange-500 hover:after:w-full after:h-0.5   after:left-0  after:transition-all after:duration-300 after:origin-left hover:ease-in-out " href="/">Order</a>
      </div>
    </div>
  );
};

export default Buttons;
