import nftHeroImg from '../../assets/NFTIMg.png';
import nftHeroMbl from '../../assets/NFTIMgmbl.png';
import topsubheadingarrow from '../../assets/Homepage/topheadingarrow.svg';

const Upper = () => {
  
  return (
    <section className="relative  overflow-hidden py-8 sm:py-12 lg:py-16 bg-[#EDF1FB]">
      {/* Ambient background glow effects */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-purple-300/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-indigo-300/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center relative z-10">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 text-left">
          {/* Badge */}
          <div className="bg-[#DBDBFD] shadow-md shadow-purple-100 text-[#605CF6] text-xs sm:text-sm flex items-center gap-1.5 w-fit max-w-full px-3.5 py-1.5 rounded-xl border border-purple-200">
            <img src={topsubheadingarrow} className="w-4 sm:w-5 shrink-0" alt="" />
            <span className="font-extrabold tracking-wide uppercase text-[11px] sm:text-xs">
              THE NEXT GENERATION NFT MARKETPLACE
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.15] tracking-tight">
            Discover. Collect. <br className="hidden sm:inline" />
            Own Extraordinary{" "}
            <span className="text-purple-700">NFTs</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-sans font-medium">
            The ultimate marketplace for digital creators, collectors and dreamers. Discover rare artwork, trade with zero extra friction, and join the web3 revolution.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <a href='/dashboard'
              className="bg-[#5139E6] hover:bg-[#3E29C2] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Explore Marketplace</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a href='/create'
              className="bg-white hover:bg-slate-50 border border-purple-200 text-[#5139E6] font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Create NFT</span>
              <span className="text-purple-600 font-black">+</span>
            </a>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-5 border-t border-gray-300/80 mt-2">
            <div className="flex items-start gap-3 bg-white/90 p-3 rounded-2xl border border-gray-200 shadow-xs">
              <div className="p-2 rounded-xl bg-[#E7E2FD] text-[#5139E6] shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Fast & Easy</h4>
                <p className="text-gray-600 text-xs mt-0.5">Seamless NFT trading experience.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/90 p-3 rounded-2xl border border-gray-200 shadow-xs">
              <div className="p-2 rounded-xl bg-[#FEF4DF] text-amber-600 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Secure & Trusted</h4>
                <p className="text-gray-600 text-xs mt-0.5">Built on blockchain safety.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/90 p-3 rounded-2xl border border-gray-200 shadow-xs">
              <div className="p-2 rounded-xl bg-[#E9F8E1] text-emerald-600 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Community Driven</h4>
                <p className="text-gray-600 text-xs mt-0.5">Join thousands of creators.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Showcase */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-[1.02]">
            <img
              src={nftHeroImg}
              alt="HEXAWAY Hero NFT Showcase"
              className="hidden sm:block w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(99,91,255,0.25)]"
            />
            <img
              src={nftHeroMbl}
              alt="HEXAWAY Mobile Hero Showcase"
              className="sm:hidden w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(99,91,255,0.25)] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upper;
