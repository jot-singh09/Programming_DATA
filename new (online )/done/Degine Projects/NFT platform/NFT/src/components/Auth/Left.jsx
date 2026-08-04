import React from 'react';
import img from '../../assets/NFTIMg.png';
import { Zap, ShieldCheck, Users } from 'lucide-react';

const Left = () => {
  return (
    <div className="bg-linear-to-b from-[#ECEFFE] via-[#E6EAFA] to-[#DEE4FA] w-full h-full p-6 sm:p-8 md:p-10 flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex flex-col gap-2 text-left">
        <div>
          <h2 className="text-[#1C212E] font-helvetica font-bold text-2xl md:text-3xl tracking-tight">
            Welcome to
          </h2>
          <h1 className="text-[#6F2CEE] font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-0.5">
            HEXAWAY
          </h1>
        </div>
        <p className="text-[#686B83] text-xs sm:text-sm md:text-base max-w-sm leading-relaxed mt-1 font-sans">
          The next generation NFT marketplace for creators, collectors and dreamers.
        </p>
      </div>

      {/* Middle Hero Graphic */}
      <div className="my-4 sm:my-6 flex items-center justify-center relative py-2">
        <div className="absolute inset-0 bg-purple-400/20 blur-3xl rounded-full scale-75"></div>
        <img
          src={img}
          alt="HEXAWAY NFT Showcase"
          className="relative z-10 w-full max-w-90 md:max-w-105 object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          />
      </div>

      {/* Bottom Feature Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-purple-200/60">
        <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2.5 sm:gap-1 text-left">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-[#6F2CEE] shrink-0">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h4 className="text-[#1C212E] font-bold text-xs md:text-sm">Fast & Easy</h4>
            <p className="text-[#686B83] text-[11px] leading-tight">
              Seamless NFT trading experience.
            </p>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2.5 sm:gap-1 text-left">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-[#6F2CEE] shrink-0">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h4 className="text-[#1C212E] font-bold text-xs md:text-sm">Secure & Trusted</h4>
            <p className="text-[#686B83] text-[11px] leading-tight">
              Built on blockchain for safe transactions.
            </p>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2.5 sm:gap-1 text-left">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-[#6F2CEE] shrink-0">
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h4 className="text-[#1C212E] font-bold text-xs md:text-sm">Community Driven</h4>
            <p className="text-[#686B83] text-[11px] leading-tight">
              Join a growing community of NFT enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;