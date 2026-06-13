import 'remixicon/fonts/remixicon.css'
const buttons = () => {
  return (
    <div>

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
        className="bg-[#5F2ECC] hover:text-black text-white px-5.5 py-1.5 border-[#5F2ECC] border-2 rounded-[11px] inline-block text-center no-underline"
      >
        Get Started
      </a>
    </div>
    <div className=" lg:hidden">
      <h1 className='mx-10 text-xl'><i class="ri-bar-chart-horizontal-line"></i></h1>
    </div>
    </div>
  );
};

export default buttons;
