import "remixicon/fonts/remixicon.css";

const Buttons = () => {

  return (
    <div className="flex">
      <div className="flex gap-10  items-center px-20 text-[#4B5563] font-bold max-lg:hidden ">
        <h4 className="hover:text-[#5F2ECC] hover:border-b-2 border-[#5F2ECC]">
          <a href="/trade">Trade</a>
        </h4>
        <h4 className="hover:text-[#5F2ECC] hover:border-b-2 border-[#5F2ECC]">
          <a href="/create">Create</a>
        </h4>
        <h4 className="hover:text-[#5F2ECC] hover:border-b-2 border-[#5F2ECC]">
          <a href="/assets">Assets</a>
        </h4>
        <h4 className="hover:text-[#5F2ECC] hover:border-b-2 border-[#5F2ECC]">
          <a href="/teamtree">Team Tree</a>
        </h4>
        <a
          href="/auth"
          className="bg-[#5F2ECC] hover:text-black hover:bg-gray-500 hover:border-black text-white px-5.5 py-1.5 border-[#5F2ECC] border-2 rounded-[11px] inline-block text-center no-underline"
        >
          Get Started
        </a>
      </div>
     
      
    </div>
       


  );
};

export default Buttons;
