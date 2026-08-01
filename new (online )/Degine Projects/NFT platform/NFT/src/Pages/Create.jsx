import React, { useState } from 'react';
import Navbar from "../components/navbar/Navbar";
import Down from "../components/Homepage/Down";
import { Upload, Sparkles, Plus, Trash2, CheckCircle2, Image as ImageIcon, Info, Zap } from 'lucide-react';
import nftSample from "../assets/Nft1.png";

const Create = () => {
  const [title, setTitle] = useState('Celestial Cosmic Crystal');
  const [description, setDescription] = useState('A rare, hand-crafted digital crystal generated on the HEXAWAY ecosystem with cosmic gradient shaders.');
  const [collection, setCollection] = useState('HEXAWAY Genesis');
  const [royalty, setRoyalty] = useState('5');
  const [price, setPrice] = useState('1.5');
  const [previewImage, setPreviewImage] = useState(nftSample);
  const [isMinting, setIsMinting] = useState(false);
  const [mintSuccess, setMintSuccess] = useState(false);

  const [properties, setProperties] = useState([
    { trait_type: 'Background', value: 'Nebula Purple' },
    { trait_type: 'Rarity', value: 'Mythic' }
  ]);

  const handleAddProperty = () => {
    setProperties([...properties, { trait_type: '', value: '' }]);
  };

  const handleRemoveProperty = (index) => {
    setProperties(properties.filter((_, i) => i !== index));
  };

  const handlePropertyChange = (index, field, val) => {
    const updated = [...properties];
    updated[index][field] = val;
    setProperties(updated);
  };

  const handleMint = (e) => {
    e.preventDefault();
    setIsMinting(true);
    setTimeout(() => {
      setIsMinting(false);
      setMintSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-[#070A18] min-h-screen text-white font-sans flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Page Header */}
        <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Creator Studio
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">Create New NFT Item</h1>
              <p className="text-slate-400 text-sm mt-1">
                Upload your digital artwork, set metadata, and mint directly to the HEXAWAY platform.
              </p>
            </div>
          </div>
        </section>

        {/* Form and Preview Grid */}
        <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Form Column (7 Cols) */}
            <form onSubmit={handleMint} className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Media File Upload Area */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-200 flex items-center justify-between">
                  <span>Upload Digital Media *</span>
                  <span className="text-xs text-slate-400 font-normal">JPG, PNG, GIF, MP4 (Max 50MB)</span>
                </label>
                
                <div className="border-2 border-dashed border-slate-700 hover:border-purple-500 rounded-3xl p-8 bg-slate-900/50 flex flex-col items-center justify-center text-center transition-all cursor-pointer group">
                  <div className="w-14 h-14 rounded-2xl bg-purple-900/30 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Upload className="w-7 h-7" />
                  </div>
                  <p className="text-sm font-bold text-white">Click or drag & drop artwork here</p>
                  <p className="text-xs text-slate-400 mt-1">High resolution artwork yields better marketplace visibility</p>
                </div>
              </div>

              {/* Title & Collection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-300">NFT Title *</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Cosmic Crystal #01"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 focus:border-purple-500 rounded-xl text-sm text-white outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-300">Collection *</label>
                  <select
                    value={collection}
                    onChange={(e) => setCollection(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 focus:border-purple-500 rounded-xl text-sm text-white outline-none transition-colors cursor-pointer"
                  >
                    <option value="HEXAWAY Genesis">HEXAWAY Genesis</option>
                    <option value="Cyberpunk Warriors">Cyberpunk Warriors</option>
                    <option value="Parallel Worlds">Parallel Worlds</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-300">Description</label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide a detailed description of your item..."
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 focus:border-purple-500 rounded-xl text-sm text-white outline-none transition-colors resize-none"
                />
              </div>

              {/* Price & Royalty */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-300">Listing Price (ETH) *</label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="e.g. 1.5"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 focus:border-purple-500 rounded-xl text-sm text-white outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-300">Royalty Fee (%)</label>
                  <input
                    type="text"
                    value={royalty}
                    onChange={(e) => setRoyalty(e.target.value)}
                    placeholder="e.g. 5"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 focus:border-purple-500 rounded-xl text-sm text-white outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Properties / Attributes */}
              <div className="flex flex-col gap-3 pt-2 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1">
                    <span>Item Properties / Attributes</span>
                  </label>
                  <button
                    type="button"
                    onClick={handleAddProperty}
                    className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Property
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {properties.map((prop, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Trait Type (e.g. Rarity)"
                        value={prop.trait_type}
                        onChange={(e) => handlePropertyChange(idx, 'trait_type', e.target.value)}
                        className="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                      />
                      <input
                        type="text"
                        placeholder="Value (e.g. Legend)"
                        value={prop.value}
                        onChange={(e) => handlePropertyChange(idx, 'value', e.target.value)}
                        className="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveProperty(idx)}
                        className="p-2 text-slate-500 hover:text-rose-400 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isMinting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-base shadow-xl shadow-purple-600/25 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                {isMinting ? (
                  <span>Minting NFT Item...</span>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    <span>Create & Mint NFT</span>
                  </>
                )}
              </button>
            </form>

            {/* Right Live Preview Column (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Live Card Preview</h3>
              
              <div className="sticky top-24 bg-slate-900/90 border border-purple-500/30 rounded-3xl p-5 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 mb-4 border border-slate-800">
                  <img
                    src={previewImage}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-purple-300 border border-purple-500/30">
                    {collection}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs text-purple-400 font-semibold">@You (Creator)</span>
                  <h3 className="text-xl font-bold text-white">{title || 'Untitled NFT'}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {description || 'No description provided yet.'}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-slate-800 text-xs">
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-500 font-medium block">Price</span>
                      <span className="text-sm font-bold text-white">{price || '0.00'} ETH</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-500 font-medium block">Royalty</span>
                      <span className="text-sm font-bold text-purple-400">{royalty || '0'}%</span>
                    </div>
                  </div>

                  {properties.filter(p => p.trait_type && p.value).length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {properties.filter(p => p.trait_type && p.value).map((p, i) => (
                        <span key={i} className="text-[10px] bg-purple-950/60 border border-purple-800/50 text-purple-300 px-2 py-1 rounded-lg">
                          <span className="text-slate-400">{p.trait_type}:</span> {p.value}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Success Modal */}
        {mintSuccess && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 max-w-md w-full rounded-3xl p-6 text-center flex flex-col items-center gap-4 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">NFT Minted Successfully!</h3>
              <p className="text-xs text-slate-400">
                Your item <span className="text-purple-300 font-semibold">{title}</span> has been created and listed on HEXAWAY.
              </p>
              <button
                onClick={() => setMintSuccess(false)}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>

      <Down />
    </div>
  );
};

export default Create;