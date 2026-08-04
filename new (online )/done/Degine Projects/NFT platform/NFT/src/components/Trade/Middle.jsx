import { useState } from 'react';
import { Zap, CheckCircle, X } from 'lucide-react';

// ── NFT Images ──
import dreamOasis   from '../../assets/Trade/dream_oasis.jpg';
import cyberPunk    from '../../assets/Trade/cyber_punk.jpg';
import hexaBot      from '../../assets/Trade/hexa_bot.jpg';
import vibrantFlow  from '../../assets/Trade/vibrant_flow.jpg';
import neonCity     from '../../assets/Trade/neon_city.jpg';

import colorChronicles   from '../../assets/color_chronicles.jpg';
import galacticExplorers from '../../assets/galactic_explorers.jpg';
import metaAnimals       from '../../assets/meta_animals.jpg';
import parallelWorlds    from '../../assets/parallel_worlds.jpg';
import nft1              from '../../assets/Nft1.png';
import nft2              from '../../assets/Nft2.png';
import nft3              from '../../assets/Nft3.png';


// ── All 12 NFTs Data ──
const nftData = [
  // First 5 — shown initially
  { id: 1,  name: 'Dream Oasis',        price: '1.25', image: dreamOasis,        badge: 'Trending', badgeColor: 'bg-emerald-500' },
  { id: 2,  name: 'Cyber Punk #5472',   price: '0.85', image: cyberPunk,         badge: 'Hot',      badgeColor: 'bg-red-500' },
  { id: 3,  name: 'Hexa Bot #001',      price: '0.65', image: hexaBot,           badge: 'New',      badgeColor: 'bg-[#5139E6]' },
  { id: 4,  name: 'Vibrant Flow',       price: '1.10', image: vibrantFlow,       badge: null },
  { id: 5,  name: 'Neon City',          price: '0.90', image: neonCity,          badge: null },

  // Next 7 — shown after "Load More"
  { id: 6,  name: 'Color Chronicles',   price: '1.50', image: colorChronicles,   badge: 'Trending', badgeColor: 'bg-emerald-500' },
  { id: 7,  name: 'Galactic Explorer',  price: '2.00', image: galacticExplorers, badge: 'Hot',      badgeColor: 'bg-red-500' },
  { id: 8,  name: 'Meta Animals',       price: '0.75', image: metaAnimals,       badge: null },
  { id: 9,  name: 'Parallel Worlds',    price: '1.35', image: parallelWorlds,    badge: 'New',      badgeColor: 'bg-[#5139E6]' },
  { id: 10, name: 'Mystic Genesis',     price: '3.20', image: nft1,              badge: 'Hot',      badgeColor: 'bg-red-500' },
  { id: 11, name: 'Astro Wanderer',     price: '1.80', image: nft2,              badge: null },
  { id: 12, name: 'Pixel Kingdom',      price: '0.95', image: nft3,              badge: 'Trending', badgeColor: 'bg-emerald-500' },
];


// ── NFT Card Component ──
const NftCard = ({ nft, onBuy }) => (
  <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden group hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300">

    {/* Image */}
    <div className="relative aspect-square overflow-hidden">
      <img
        src={nft.image}
        alt={nft.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {nft.badge && (
        <span className={`absolute top-3 left-3 ${nft.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-md`}>
          🔥 {nft.badge}
        </span>
      )}
    </div>

    {/* Info */}
    <div className="p-3.5">
      <h3 className="font-bold text-gray-900 text-sm truncate mb-1">{nft.name}</h3>

      <div className="flex items-center gap-1.5 mb-3">
        <span className="font-extrabold text-gray-900 text-sm">{nft.price} ETH</span>
        <svg className="w-3.5 h-3.5 text-[#627EEA]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.75l-6.25 10.5L12 16l6.25-3.75L12 1.75zM5.75 13.5L12 22.25l6.25-8.75L12 17.25 5.75 13.5z" />
        </svg>
      </div>

      <button 
        onClick={() => onBuy(nft.name)}
        className="w-full bg-[#5139E6] hover:bg-[#3E29C2] text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-sm shadow-purple-500/20"
      >
        <Zap className="w-3.5 h-3.5" /> Buy Now
      </button>
    </div>
  </div>
);


// ── Middle Section ──
const Middle = () => {
  const [showAll, setShowAll] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [isToastVisible, setIsToastVisible] = useState(false);

  // First 5 shown, after Load More all 12
  const visibleNfts = showAll ? nftData : nftData.slice(0, 5);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setIsToastVisible(true);
    
    // Hide animation after 3 seconds
    setTimeout(() => {
      setIsToastVisible(false);
      // Remove from DOM after animation completes
      setTimeout(() => setToastMessage(null), 300);
    }, 3000);
  };

  const handleBuy = (nftName) => {
    triggerToast(`Successfully purchased ${nftName}!`);
  };

  return (
    <section className="bg-[#EDF1FB] py-6 sm:py-10 relative">
      {/* FLOATING TOP-RIGHT POPUP NOTIFICATION (HIGHEST Z-INDEX) */}
      {toastMessage && (
        <div 
          className={`fixed right-4 sm:right-8 z-100 transition-all duration-1000 ease-in-out transform ${
            isToastVisible ? 'translate-y-28 opacity-100' : '-translate-y-full opacity-0'
          }`}
          style={{ top: '0px' }}
        >
          {/* Ropes/Strings */}
          <div className="absolute md:hidden -top-28 left-6 w-[2px] h-28 bg-gradient-to-b from-transparent via-purple-300 to-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
          <div className="absolute  md:hidden  -top-28 right-6 w-[2px] h-28 bg-gradient-to-b from-transparent via-purple-300 to-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>

          {/* Toast Body */}
          <div className="relative bg-[#F2F5FE] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-purple-500/30 flex items-center gap-3 w-max max-w-[90vw] sm:max-w-sm">
            {/* Hanging knobs */}
            <div className="absolute md:hidden -top-1.5 left-5 w-2.5 h-2.5 rounded-full bg-purple-500 border border-white shadow-sm"></div>
            <div className="absolute  md:hidden  -top-1.5 right-5 w-2.5 h-2.5 rounded-full bg-purple-500 border border-white shadow-sm"></div>
            
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex-1 text-xs sm:text-sm font-semibold text-black pr-2">
              {toastMessage}
            </div>
            <button
              onClick={() => setIsToastVisible(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition-colors cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Search Bar Only ── */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search NFTs, collections or creators..."
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5139E6]/30 focus:border-[#5139E6] shadow-sm transition-all"
          />
        </div>

        {/* ── NFT Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {visibleNfts.map((nft) => (
            <NftCard key={nft.id} nft={nft} onBuy={handleBuy} />
          ))}
        </div>

        {/* ── Load More / Load Less Button ── */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-7 py-3 text-sm text-gray-700 font-semibold hover:bg-gray-50 hover:border-purple-300 transition-all cursor-pointer shadow-sm"
          >
            {showAll ? 'Load Less' : 'Load More'}
            <svg className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Middle;
