import nft1 from '../../assets/Nft1.png';
import metaAnimals from '../../assets/meta_animals.jpg';
import parallelWorlds from '../../assets/parallel_worlds.jpg';
import colorChronicles from '../../assets/color_chronicles.jpg';
import galacticExplorers from '../../assets/galactic_explorers.jpg';

const ActivityAndCreators = () => {
  const activities = [
    {
      id: 1,
      user: "Alex",
      action: "bought",
      item: "Galaxy NFT",
      price: "2.5",
      time: "2m ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
      id: 2,
      user: "Sophie",
      action: "listed",
      item: "Neon Dreams",
      price: "1.8",
      time: "5m ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    },
    {
      id: 3,
      user: "John",
      action: "sold",
      item: "Crypto Punk #152",
      price: "3.2",
      time: "7m ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
  ];

  const creators = [
    {
      rank: 1,
      name: "Arivlex",
      volume: "12.5",
      avatar: nft1,
    },
    {
      rank: 2,
      name: "MetaArtist",
      volume: "9.8",
      avatar: metaAnimals,
    },
    {
      rank: 3,
      name: "CryptoMage",
      volume: "7.3",
      avatar: parallelWorlds,
    },
    {
      rank: 4,
      name: "NebulaCraft",
      volume: "6.9",
      avatar: colorChronicles,
    },
    {
      rank: 5,
      name: "PixelAlchemist",
      volume: "5.7",
      avatar: galacticExplorers,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Left Column: Live Activity */}
        <div className="lg:col-span-4 bg-white border border-gray-200/90 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex justify-between items-center mb-5 sm:mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span>Live Activity</span>
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
              </h3>
            </div>

            <div className="flex flex-col gap-3.5 sm:gap-4">
              {activities.map((act) => (
                <div
                  key={act.id}
                  className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-gray-200/70 hover:border-purple-300 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={act.avatar}
                      alt={act.user}
                      className="w-10 h-10 rounded-full bg-white p-0.5 border border-gray-300 shrink-0"
                    />
                    <div className="flex flex-col text-xs sm:text-sm">
                      <span className="text-gray-800">
                        <strong className="text-gray-900 font-bold">{act.user}</strong>{" "}
                        <span className="text-gray-500">{act.action}</span>{" "}
                        <span className="text-purple-700 font-bold">{act.item}</span>
                      </span>
                      <span className="text-gray-400 text-xs mt-0.5 font-medium">{act.time}</span>
                    </div>
                  </div>

                  <div className="text-right pl-2">
                    <span className="font-extrabold text-gray-900 text-xs sm:text-sm block">
                      {act.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-purple-700 border border-gray-200 rounded-xl text-xs font-bold transition-all cursor-pointer">
            View All Activity
          </button>
        </div>
            {/* there we write code */}
             {/* Right Column: Top Creators */}
        <div className="lg:col-span-8 max-lg:hidden bg-white border border-gray-200/90 rounded-3xl p-5 sm:p-6 shadow-sm">
          <div className="flex justify-between items-center mb-5 sm:mb-6">
            <h3 className="text-xl font-bold text-gray-900">Top Creators</h3>
            <button className="text-purple-700 hover:text-purple-900 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer">
              <span>View All Creators</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {creators.map((c) => (
              <div
                key={c.rank}
                className="relative bg-slate-50 hover:bg-white border border-gray-200/70 hover:border-purple-300 rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-2xs hover:shadow-xs group"
              >
                {/* Rank Badge */}
                <span className="absolute top-2.5 left-2.5 w-6 h-6 rounded-lg bg-white text-gray-800 font-extrabold text-xs flex items-center justify-center border border-gray-200 shadow-2xs">
                  {c.rank}
                </span>

                {/* Avatar */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden mb-2.5 mt-2 border-2 border-purple-200 group-hover:border-purple-500 transition-colors shadow-sm">
                  <img src={c.avatar} alt={c.name} className="w-full h-full object-cover" />
                </div>

                <h4 className="font-bold text-gray-900 text-sm truncate w-full group-hover:text-purple-700 transition-colors">
                  {c.name}
                </h4>
                <p className="text-gray-500 text-xs mt-0.5 font-medium">
                  Volume <span className="text-gray-900 font-bold">{c.volume}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default ActivityAndCreators;