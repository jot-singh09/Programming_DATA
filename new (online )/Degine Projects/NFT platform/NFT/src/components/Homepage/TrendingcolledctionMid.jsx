
import nft1 from '../../assets/Nft1.png';
import metaAnimals from '../../assets/meta_animals.jpg';
import parallelWorlds from '../../assets/parallel_worlds.jpg';
import colorChronicles from '../../assets/color_chronicles.jpg';
import galacticExplorers from '../../assets/galactic_explorers.jpg';

const TrendingcolledctionMid = () => {
  const collections = [
    {
      id: 1,
      title: "Cyber Odyssey",
      price: "$1.25",
      owner: "Neck",
      image: nft1,
    },
    {
      id: 2,
      title: "Meta Animals",
      price: "$0.85",
      owner: "Petter",
      image: metaAnimals,
    },
    {
      id: 3,
      title: "Parallel Worlds",
      price: "$1.65",
      owner: "Gray",
      image: parallelWorlds,
    },
    {
      id: 4,
      title: "Color Chronicles",
      price: "$0.95",
      owner: "John",
      
      image: colorChronicles,
    },
    {
      id: 5,
      title: "Galactic Explorers",
      price: "$1.35",
      owner: "Mohan",
      image: galacticExplorers,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6 sm:mb-8 md:pt-15">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            <span>Trending Collections</span>
            <span className="text-purple-600">✨</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-1 font-medium">
            Explore the most popular NFT collections right now
          </p>
        </div>

        <button className="bg-white hover:bg-slate-50 text-gray-800 border border-gray-300 px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xs">
          <span>View All Collections</span>
          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Grid of 5 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {collections.map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-gray-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115 scale-105 active:scale-115"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-40"></div>
            </div>

            {/* Content Details */}
            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-gray-900 text-base truncate group-hover:text-purple-700 transition-colors max-md:text-purple-700">
                  {item.title}
                </h3>
                {/* Verified Check */}
                <svg className="w-4 h-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="flex justify-between items-center text-xs pt-2 border-t border-gray-100 mt-1">
                <div>
                  <span className="text-gray-500 font-medium block">price</span>
                  <span className="font-bold text-gray-900">{item.price}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 font-medium flex items-center gap-1">
                     <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Owner 
                  </span>
                  <span className="font-bold text-gray-900">{item.owner}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingcolledctionMid;