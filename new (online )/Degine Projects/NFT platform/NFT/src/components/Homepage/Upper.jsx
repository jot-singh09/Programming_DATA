import topsubheadingarrow from "../../assets/Homepage/topheadingarrow.svg";
const Upper = () => {
  return (
    <div className=" h-100 grid grid-cols-2 max-lg:grid-cols-1 w-full gap-6">
      <div className="flex flex-col gap-3.5 w-full">
        <div className="bg-[#DBDBFD] shadow-xl shadow-blue-100 text-[#605CF6] text-sm flex items-center gap-0.5 w-fit max-w-full px-3 py-0.5 rounded-lg">
          <img src={topsubheadingarrow} className="w-5 shrink-0" alt="" />
          <h1 className="font-semibold text-xs sm:text-sm">
            THE NEXT GENERATION NFT MARKETPLACE
          </h1>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black w-full md:w-120 max-w-full leading-tight">
            Discover. Collect. Own Extraordinary{" "}
            <span className="text-purple-700">NFTs</span>
          </h1>
          <h1 className="w-full md:w-90 max-w-full font-poppins text-gray-600 text-sm sm:text-base">
            The ultimate marketplace for digital creators. collectors and
            dreamers.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Upper;
