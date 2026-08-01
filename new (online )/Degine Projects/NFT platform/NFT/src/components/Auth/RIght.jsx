import React, { useState } from 'react';
import { ShieldCheck, Wallet, ArrowRight, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RIght = () => {
  const [userAddress, setUserAddress] = useState('');
  const [referralAddress, setReferralAddress] = useState('');

  return (
    <div className="bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full w-full">
      <div>
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 flex items-start justify-between gap-2">
          <div className="text-left">
            <h2 className="text-[#1C212E] font-helvetica font-bold text-2xl sm:text-3xl tracking-tight">
              Connect Your Wallet
            </h2>
            <p className="text-[#686B83] text-xs sm:text-sm mt-1 font-sans">
              Enter your wallet details to access the HEXAWAY NFT marketplace
            </p>
          </div>
          <Link
            to="/"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#6F2CEE] bg-slate-50 hover:bg-purple-50 px-3 py-1.5 rounded-xl border border-slate-200/80 transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </div>

        {/* Input Form Fields */}
        <div className="flex flex-col gap-4 sm:gap-5 pt-2 sm:pt-4">
          
          {/* User Wallet Address Input */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[#1C212E] text-xs font-bold font-sans flex items-center gap-1.5">
              <Wallet className="w-3.5 h-3.5 text-[#6F2CEE]" />
              User Wallet Address
            </label>
            <input
              type="text"
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
              placeholder="Enter user wallet address (0x...)"
              className="w-full px-3.5 sm:px-4 py-3 rounded-xl border border-slate-200 focus:border-[#6F2CEE] focus:ring-2 focus:ring-purple-100 outline-none text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition-all font-mono bg-slate-50/50"
            />
          </div>

          {/* Referral Wallet Address Input */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[#1C212E] text-xs font-bold font-sans flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#6F2CEE]" />
              Referral Wallet Address
            </label>
            <input
              type="text"
              value={referralAddress}
              onChange={(e) => setReferralAddress(e.target.value)}
              placeholder="Enter referral wallet address (0x...)"
              className="w-full px-3.5 sm:px-4 py-3 rounded-xl border border-slate-200 focus:border-[#6F2CEE] focus:ring-2 focus:ring-purple-100 outline-none text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition-all font-mono bg-slate-50/50"
            />
          </div>

          {/* Connect Wallet Button */}
          <Link
            to="/dashboard"
            className="w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-gradient-to-r from-[#6F2CEE] to-[#8F53FF] hover:from-[#5E23CF] hover:to-[#7E3DFF] text-white font-bold text-sm sm:text-base shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer group mt-2"
          >
            <Wallet className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Connect Wallet</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <p className="text-[11px] text-slate-400 text-center leading-relaxed mt-1">
            By connecting your wallet, you agree to HEXAWAY's{' '}
            <a href="#" className="text-[#6F2CEE] underline hover:text-purple-800">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#6F2CEE] underline hover:text-purple-800">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      {/* Footer Security Badge */}
      <div className="mt-8 pt-4 border-t border-slate-100">
        <div className="bg-[#F4F5FD] p-3 sm:p-3.5 rounded-2xl flex items-center justify-center gap-3 text-left border border-purple-100/50">
          <div className="w-8 h-8 rounded-full bg-purple-100 text-[#6F2CEE] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-[#1C212E]">Protected by blockchain technology</h5>
            <p className="text-[11px] text-[#686B83]">Your data and digital assets are safe and secure with us.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RIght;