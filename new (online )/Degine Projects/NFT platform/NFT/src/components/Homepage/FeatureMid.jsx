const FeatureMid = () => {
  const stats = [
    {
      value: "25K+",
      label: "NFTs Created",
      bgColor: "bg-[#E7E2FD] text-[#5139E6]",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      value: "12K+",
      label: "Artists",
      bgColor: "bg-[#FEF4DF] text-amber-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      value: "45K+",
      label: "Collectors",
      bgColor: "bg-[#E9F8E1] text-emerald-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      value: "350K+",
      label: "Volume (USDT)",
      bgColor: "bg-[#FEE4EB] text-rose-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="bg-white border border-gray-200/90 rounded-3xl p-5 md:p-8 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3.5 sm:gap-4 group cursor-default">
              <div className={`p-3 sm:p-3.5 rounded-2xl ${stat.bgColor} transition-transform duration-300 group-hover:scale-105 shrink-0`}>
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-600 mt-0.5">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureMid;