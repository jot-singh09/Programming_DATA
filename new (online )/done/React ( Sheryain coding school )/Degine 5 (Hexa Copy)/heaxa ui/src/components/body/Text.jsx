const Text = () => {
  
  return (
    <div >
      <div className="flex items-center flex-col py-25 gap-10 bg-[#E3E9F1] max-sm:hidden ">
        <h1 className="text-6xl  font-semibold text-[#682ACD] min-[320px]:text-center ">
          <span className="text-[#1C1F4C] ">Discover,</span> Trade & Create NFTs
        </h1>
        <p className="text-gray-700  text-2xl ">
          Join the future of digital art trading
        </p>
        <a
          href="/auth"
          className="px-10 py-4 text-[19px] font-black text-white border-[#5E2ECC] border-2 rounded-[15px] bg-[#5E2ECC]"
        >
          Start Trading Now
        </a>
      </div>
      <div className="sm:hidden flex flex-col items-center w-full py-30 gap-6 bg-[#E3E9F1] ">
        <h1 className="text-[35px] items-center  leading-11 flex flex-col font-semibold  text-[#1A1E45] self-center"> Discover
            Trade & <br /> <span className="flex items-center text-[#682ACD]">Creates
          NFTs.</span>
        </h1>
        <p className="text-gray-700  text-lg ">
          Join the future of digital art trading
        </p>
          <a
          href="/auth"
          className="px-10 py-4 text-[19px] font-black text-white border-[#5E2ECC] border-2 rounded-[15px] bg-[#5E2ECC]"
        >
          Start Trading Now
        </a>
      </div>
    </div>
  );
};

export default Text;
