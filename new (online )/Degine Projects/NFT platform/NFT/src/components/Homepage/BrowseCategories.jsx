const BrowseCategories = () => {
  const categories = [
    {
      name: "Art",
      count: "12.5K+",
      color: "bg-orange-100 text-orange-600 border-orange-200",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      name: "Music",
      count: "8.7K+",
      color: "bg-purple-100 text-purple-600 border-purple-200",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12 0c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
    {
      name: "Gaming",
      count: "9.3K+",
      color: "bg-blue-100 text-blue-600 border-blue-200",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5zM5 14a2 2 0 00-2 2v1a2 2 0 002 2h14a2 2 0 002-2v-1a2 2 0 00-2-2H5z" />
        </svg>
      ),
    },
    {
      name: "Metaverse",
      count: "6.4K+",
      color: "bg-violet-100 text-violet-600 border-violet-200",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      name: "Collectibles",
      count: "10.2K+",
      color: "bg-cyan-100 text-cyan-600 border-cyan-200",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      name: "Photography",
      count: "7.1K+",
      color: "bg-sky-100 text-sky-600 border-sky-200",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        </svg>
      ),
    },
    {
      name: "Videos",
      count: "4.8K+",
      color: "bg-[#FEE4EB] text-pink-600 border-pink-200",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="max-w-7xl hidden mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
          <span>Browse by Categories</span>
          <span className="text-purple-600">✨</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="group bg-white hover:bg-slate-50 border border-gray-200/90 hover:border-purple-300 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2.5 transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-xs hover:shadow-md"
          >
            <div className={`p-3 sm:p-3.5 rounded-2xl ${cat.color} border transition-transform duration-300 group-hover:scale-105`}>
              {cat.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-purple-700 transition-colors">
                {cat.name}
              </h3>
              <span className="text-gray-500 text-xs font-semibold block mt-0.5">
                {cat.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategories;
