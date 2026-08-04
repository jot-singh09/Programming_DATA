import marketplaceHero from '../../assets/Trade/cyber_punk.jpg';

const Upper = () => {
  return (
    <section className="relative overflow-hidden bg-[#EDF1FB] pt-6 pb-10 sm:pt-8 sm:pb-14">

      {/* Background Glows */}
      <div className="absolute -top-20 left-1/3 w-96 h-96 bg-purple-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 -right-20 w-80 h-80 bg-indigo-400/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-300/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ───── Hero Banner ───── */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#2D1B69] via-[#3B28A0] to-[#5139E6] shadow-2xl shadow-purple-600/20 mb-8">

          {/* Decorative circles inside banner */}
          <div className="absolute -top-16 -left-16 w-52 h-52 bg-purple-500/20 rounded-full blur-[60px]" />
          <div className="absolute -bottom-10 right-10 w-44 h-44 bg-indigo-400/20 rounded-full blur-[50px]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center p-6 sm:p-8 lg:px-10 lg:py-8 relative z-10">

            {/* Left — Text */}
            <div className="flex flex-col gap-4">
              <span className="bg-white/15 backdrop-blur-sm text-purple-100 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full w-fit border border-white/10">
                ✦ NFT Marketplace
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Marketplace
              </h1>

              <p className="text-purple-200/90 text-sm sm:text-base max-w-md leading-relaxed">
                Discover, collect and trade extraordinary NFTs from talented creators around the world.
              </p>
            </div>

            {/* Right — Illustration */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={marketplaceHero}
                alt="Marketplace"
                className="w-full max-w-xs sm:max-w-sm lg:max-w-[340px] h-auto object-contain rounded-2xl drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* ───── Stats Cards ───── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">

          {/* Daily Limit */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="p-3 rounded-xl bg-[#EEEAFD]">
              <svg className="w-6 h-6 text-[#5139E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-xs font-medium">Daily Limit</p>
              <p className="text-2xl font-extrabold text-gray-900">5.00 ETH</p>
              <p className="text-gray-400 text-xs">Per Day</p>
            </div>
          </div>

          {/* Limit Used */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="p-3 rounded-xl bg-[#E1F5E7]">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-gray-500 text-xs font-medium">Limit Used</p>
              <p className="text-2xl font-extrabold text-gray-900">1.25 ETH</p>
              <span className="text-gray-400 text-xs">25% Used</span>
              <div className="w-full h-1.5 bg-gray-200 rounded-full mt-1.5 overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '25%' }} />
              </div>
            </div>
          </div>

          {/* Wallet Balance */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="p-3 rounded-xl bg-[#EEEAFD]">
              <svg className="w-6 h-6 text-[#5139E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-xs font-medium">Wallet Balance</p>
              <p className="text-2xl font-extrabold text-gray-900">2.75 ETH</p>
              <p className="text-gray-400 text-xs">Available Balance</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Upper;
