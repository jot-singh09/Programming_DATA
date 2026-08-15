const Between = () => {
  let btns = [{ name: "Home" },
    {name:'About'},
    {name:'Contant'}
  ];
  return <div className="text-white flex gap-15 justify-center cursor-pointer">
    {btns.map((val)=>{
        return(
              <div className="group overflow-hidden relative">
            <div  className=" transition-all duration-1000 hover:duration-500 ease-in-out group-hover:-translate-y-full">
            <h1>{val.name}</h1>
            </div>
            <div className=" transition-all duration-500 ease-in-out   translate-y-full group-hover:translate-y-0 absolute inset-0 ">
            <h1 className="text-[#B93613]">{val.name}</h1>
            </div>
        </div>
        )
    })}


    
  </div>;
};

export default Between;
