import React, { useState } from "react";
import {
  Wallet,
  TrendingUp,
  Box,
  Users,
  CheckCircle2,
  Copy,
  Check,
  Share2,
  X,
  CheckCircle,
} from "lucide-react";

// BALANCES & STATS CARDS DATA
const balanceStats = [
  {
    id: "wallet",
    title: "Wallet Balance",
    value: "$2.75",
    subValue: "≈ $6,245.50",
    type: "wallet",
    bgColor: "bg-white",
    iconColor: "bg-purple-100 text-[#6F2CEE]",
  },
  {
    id: "earnings",
    title: "Total Earnings",
    value: "$12.45 ",
    subValue: "≈ $28,189.34",
    badge: "This Month",
    badgeIncrease: "+2.35 ETH (+23.21%)",
    type: "stat",
    bgColor: "bg-white",
    iconColor: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "nfts",
    title: "Total NFTs",
    value: "28",
    subValue: "Across all collections",
    extraLabel: "Listed NFTs",
    extraValue: "12",
    type: "stat",
    bgColor: "bg-white",
    iconColor: "bg-blue-100 text-blue-600",
  },
  {
    id: "referral",
    title: "Referral Income",
    value: "$3.20 ",
    subValue: "≈ $7,248.11",
    extraLabel: "Total Referrals",
    extraValue: "56",
    type: "stat",
    bgColor: "bg-white",
    iconColor: "bg-amber-100 text-amber-600",
  },
];

const Upper = () => {
  const [copiedRef, setCopiedRef] = useState(false);
  const [copiedAddr, setCopiedAddr] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const walletAddress = "0xA1B2...C34D";
  const fullAddress = "0xA1B23C4D5E6F78901234567890ABCDEF";
  const referralLink = "https://hexaway.io/auth?ref=0xA1B2C34D";

  // Robust cross-browser copy function with execCommand fallback
  const safeCopy = (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  };

  const fallbackCopy = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Fallback copy failed", err);
    }
    document.body.removeChild(textArea);
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleCopyRef = (e) => {
    if (e) e.stopPropagation();
    safeCopy(referralLink);
    setCopiedRef(true);
    triggerToast("Referral Link Copied to Clipboard!");
    setTimeout(() => setCopiedRef(false), 3000);
  };

  const handleCopyAddr = (e) => {
    if (e) e.stopPropagation();
    safeCopy(fullAddress);
    setCopiedAddr(true);
    triggerToast("Wallet Address Copied to Clipboard!");
    setTimeout(() => setCopiedAddr(false), 3000);
  };

  return (
    <div className="space-y-6 relative">
      {/* FLOATING TOP-RIGHT POPUP NOTIFICATION (HIGHEST Z-INDEX) */}
      {toastMessage && (
        <div className="fixed top-6 right-2  z-9999 bg-[#F2F5FE] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-purple-500/30 flex items-center gap-3 animate-bounceIn max-w-xs sm:max-w-sm">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="flex-1 text-xs sm:text-sm font-semibold text-black">
            {toastMessage}
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* TOP USER GREETING & REFERRAL / WALLET ADDRESS HEADER BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 sm:p-6 rounded-3xl border border-slate-100 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1C212E] tracking-tight">
              Welcome back, HexaUser
            </h1>
            <CheckCircle2 className="w-5 h-5 text-[#6F2CEE] fill-purple-100 shrink-0" />
          </div>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5 font-medium">
            Explore, collect, trade and earn with HEXAWAY
          </p>
        </div>

        {/* Wallet Address & Referral Link Section */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {/* Wallet Address Pill */}
          <button
            onClick={handleCopyAddr}
            title="Click to copy wallet address"
            className="bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200 px-3.5 py-2 rounded-2xl flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-slate-800 shadow-2xs transition-all active:scale-95 cursor-pointer"
          >
            <span>{walletAddress}</span>
            {copiedAddr ? (
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-400" />
            )}
          </button>

          {/* Referral Link & Copy Button */}
          <div className="flex items-center bg-[#DBDBFD]/70 border border-purple-200 rounded-2xl p-1 shadow-2xs">
            <div className="px-3 py-1 text-xs font-mono font-semibold text-[#5139E6] max-w-35 sm:max-w-50 truncate">
              {referralLink}
            </div>
            <button
              onClick={handleCopyRef}
              className="bg-[#5139E6] hover:bg-[#3E29C2] text-white px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-all active:scale-95 cursor-pointer shrink-0"
            >
              {copiedRef ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Copy Ref</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4 BALANCES & STATS CARDS GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {balanceStats.map((item) => {
          if (item.type === "wallet") {
            return (
              <div
                key={item.id}
                className="bg-white p-5 rounded-3xl border border-slate-100 shadow-xs flex flex-col justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {item.title}
                    </span>
                    <h2 className="text-2xl font-black text-[#1C212E] mt-1 tracking-tight">
                      {item.value}
                    </h2>
                    <p className="text-xs text-slate-400 font-medium">
                      {item.subValue}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-2xl ${item.iconColor} shadow-2xs shrink-0`}
                  >
                    <Wallet className="w-5 h-5" />
                  </div>
                </div>

                {/* Deposit & Withdraw Action Buttons */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <button className="py-2.5 px-3 bg-[#5139E6] hover:bg-[#3E29C2] active:scale-95 text-white font-bold text-xs rounded-xl shadow-2xs transition-all cursor-pointer text-center flex items-center justify-center">
                    Deposit
                  </button>
                  <button className="py-2.5 px-3 bg-white hover:bg-slate-50 active:scale-95 text-slate-700 font-bold text-xs rounded-xl border border-slate-200 transition-all cursor-pointer text-center flex items-center justify-center">
                    Withdraw
                  </button>
                </div>
              </div>
            );
          }

          return (
            <div
              key={item.id}
              className="bg-white p-5 rounded-3xl border border-slate-100 shadow-xs flex flex-col justify-between gap-3 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {item.title}
                  </span>
                  <h2 className="text-2xl font-black text-[#1C212E] mt-1 tracking-tight">
                    {item.value}
                  </h2>
                  <p className="text-xs text-slate-400 font-medium">
                    {item.subValue}
                  </p>
                </div>

                <div
                  className={`p-3 rounded-2xl ${item.iconColor} shadow-2xs shrink-0`}
                >
                  {item.id === "earnings" && (
                    <TrendingUp className="w-5 h-5" />
                  )}
                  {item.id === "nfts" && <Box className="w-5 h-5" />}
                  {item.id === "referral" && <Users className="w-5 h-5" />}
                </div>
              </div>

              {/* Sub-stat / Badge */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                {item.badgeIncrease && (
                  <div className="flex items-center justify-between w-full">
                    <span className="text-slate-500 font-medium">
                      {item.badge}
                    </span>
                    <span className="font-bold text-emerald-600">
                      {item.badgeIncrease}
                    </span>
                  </div>
                )}
                {item.extraLabel && (
                  <div className="flex items-center justify-between w-full text-slate-500 font-medium">
                    <span>{item.extraLabel}</span>
                    <span className="font-bold text-slate-800">
                      {item.extraValue}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Upper;
