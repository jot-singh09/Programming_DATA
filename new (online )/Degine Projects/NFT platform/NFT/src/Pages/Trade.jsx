import React, { useState } from 'react';
import Navbar from "../components/navbar/Navbar";
import Down from "../components/Homepage/Down";
import { Search, Filter, Sparkles, Heart, ArrowUpRight, CheckCircle2, ShoppingBag, X, Zap } from 'lucide-react';

import nft1 from "../assets/Nft1.png";
import nft2 from "../assets/Nft2.png";
import nft3 from "../assets/Nft3.png";
import art1 from "../assets/color_chronicles.jpg";
import art2 from "../assets/galactic_explorers.jpg";
import art3 from "../assets/meta_animals.jpg";
import art4 from "../assets/parallel_worlds.jpg";

const Trade = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalNft, setActiveModalNft] = useState(null);
  const [buySuccess, setBuySuccess] = useState(false);

  const categories = ['All', 'Art', 'Gaming', 'Music', 'Photography', 'Metaverse'];

  const initialNfts = [
    {
      id: 1,
      title: 'Celestial Realms #402',
      category: 'Art',
      price: '2.45',
      usdPrice: '$8,450',
      image: nft1,
      creator: '@Arivlex',
      likes: 142,
      status: 'On Auction',
      endsIn: '04h 12m'
    },
    {
      id: 2,
      title: 'Cyber Mecha Sentinel',
      category: 'Gaming',
      price: '1.85',
      usdPrice: '$6,380',
      image: nft2,
      creator: '@MechaCorp',
      likes: 98,
      status: 'Buy Now',
      endsIn: 'Direct Sale'
    },
    {
      id: 3,
      title: 'Neon Cyberpunk Valkyrie',
      category: 'Gaming',
      price: '3.10',
      usdPrice: '$10,690',
      image: nft3,
      creator: '@Valkyrie_Art',
      likes: 215,
      status: 'Buy Now',
      endsIn: 'Direct Sale'
    },
    {
      id: 4,
      title: 'Color Chronicles Genesis',
      category: 'Art',
      price: '0.95',
      usdPrice: '$3,275',
      image: art1,
      creator: '@ChromaLabs',
      likes: 87,
      status: 'Buy Now',
      endsIn: 'Direct Sale'
    },
    {
      id: 5,
      title: 'Galactic Explorers #089',
      category: 'Metaverse',
      price: '4.20',
      usdPrice: '$14,490',
      image: art2,
      creator: '@AstroStudio',
      likes: 310,
      status: 'On Auction',
      endsIn: '08h 45m'
    },
    {
      id: 6,
      title: 'Meta Animal Species X',
      category: 'Photography',
      price: '1.40',
      usdPrice: '$4,830',
      image: art3,
      creator: '@BiomArt',
      likes: 124,
      status: 'Buy Now',
      endsIn: 'Direct Sale'
    },
    {
      id: 7,
      title: 'Parallel Dimension #11',
      category: 'Metaverse',
      price: '2.90',
      usdPrice: '$10,000',
      image: art4,
      creator: '@QuantumRealm',
      likes: 176,
      status: 'On Auction',
      endsIn: '02h 30m'
    },
  ];

  const filteredNfts = initialNfts.filter((nft) => {
    const matchesCategory = selectedCategory === 'All' || nft.category === selectedCategory;
    const matchesSearch = nft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          nft.creator.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePurchaseConfirm = () => {
    setBuySuccess(true);
    setTimeout(() => {
      setBuySuccess(false);
      setActiveModalNft(null);
    }, 2000);
  };

  return (
    <div className="bg-[#070A18] min-h-screen text-white font-sans flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Hero Header Section */}
        <section className="relative py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/15 blur-3xl rounded-full pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Live Marketplace
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Explore & Trade <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Digital Assets</span>
              </h1>
              <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl">
                Discover verified rare NFT collectibles, digital artworks, and metaverse items from world-class creators.
              </p>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl text-center">
                <p className="text-xs text-slate-400 font-medium">Volume</p>
                <p className="text-lg font-bold text-white mt-0.5">$14.2M</p>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl text-center">
                <p className="text-xs text-slate-400 font-medium">Items</p>
                <p className="text-lg font-bold text-purple-400 mt-0.5">24.5K</p>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl text-center">
                <p className="text-xs text-slate-400 font-medium">Fee</p>
                <p className="text-lg font-bold text-emerald-400 mt-0.5">0.5%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Search Controls */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/70 border border-slate-800/80 p-4 rounded-2xl backdrop-blur-md">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search NFTs or Creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                      : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* NFT Items Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
          {filteredNfts.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-slate-800">
              <p className="text-slate-400 text-base">No NFTs found matching "{searchQuery}".</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredNfts.map((nft) => (
                <div
                  key={nft.id}
                  className="bg-slate-900/80 border border-slate-800/90 hover:border-purple-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-900/20 group flex flex-col justify-between"
                >
                  <div>
                    {/* Image Preview Container */}
                    <div className="relative aspect-square overflow-hidden bg-slate-950">
                      <img
                        src={nft.image}
                        alt={nft.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-purple-300 border border-purple-500/30 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-purple-400" /> {nft.status}
                      </div>
                      <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-300 flex items-center gap-1">
                        <Heart className="w-3 h-3 text-rose-500 fill-rose-500/30" /> {nft.likes}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <span className="font-medium text-purple-400 flex items-center gap-1">
                          {nft.creator} <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        </span>
                        <span>{nft.category}</span>
                      </div>
                      <h3 className="text-base font-bold text-white truncate">{nft.title}</h3>

                      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                        <div>
                          <p className="text-[11px] text-slate-400 uppercase font-medium">Price</p>
                          <p className="text-sm font-extrabold text-white flex items-center gap-1">
                            {nft.price} ETH <span className="text-xs text-slate-400 font-normal">({nft.usdPrice})</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="p-4 pt-0">
                    <button
                      onClick={() => setActiveModalNft(nft)}
                      className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs md:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-purple-600/20"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{nft.status === 'On Auction' ? 'Place Bid' : 'Buy Now'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Quick Buy / Bid Interactive Modal */}
        {activeModalNft && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 max-w-md w-full rounded-3xl p-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
              <button
                onClick={() => setActiveModalNft(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/60 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {buySuccess ? (
                <div className="text-center py-8 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Order Confirmed!</h3>
                  <p className="text-xs text-slate-400 max-w-xs">
                    You have successfully placed your request for <span className="text-purple-300 font-semibold">{activeModalNft.title}</span>.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={activeModalNft.image}
                      alt={activeModalNft.title}
                      className="w-20 h-20 rounded-2xl object-cover border border-slate-700"
                    />
                    <div>
                      <span className="text-xs text-purple-400 font-semibold">{activeModalNft.creator}</span>
                      <h3 className="text-lg font-bold text-white">{activeModalNft.title}</h3>
                      <p className="text-xs text-slate-400">Category: {activeModalNft.category}</p>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col gap-2.5 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>Item Price:</span>
                      <span className="text-white font-bold">{activeModalNft.price} ETH ({activeModalNft.usdPrice})</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Est. Network Fee:</span>
                      <span className="text-slate-300">0.001 ETH (~$3.20)</span>
                    </div>
                    <div className="border-t border-slate-800 pt-2 flex justify-between text-sm font-bold text-white">
                      <span>Total Amount:</span>
                      <span className="text-purple-400">{activeModalNft.price} ETH</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePurchaseConfirm}
                    className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-purple-600/30 transition-all cursor-pointer mt-2"
                  >
                    Confirm Purchase ({activeModalNft.price} ETH)
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Down />
    </div>
  );
};

export default Trade;