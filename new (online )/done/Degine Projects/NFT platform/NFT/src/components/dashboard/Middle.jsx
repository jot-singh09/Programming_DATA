import React, { useState } from "react";
import { Crown, CheckCircle2, Sparkles, X, ArrowRight, ShieldCheck } from "lucide-react";

// Packages List Data
const packagesList = [
  {
    id: "p1",
    name: "Welcome",
    price: 2,
    priceLabel: "$2",
    limitPrice: "2 USDT",
    dailyRoi: "1.5%",
    days: 30,
    duration: "30 Days",
    bgColor: "bg-[#F2F5FE]",
    borderColor: "border-blue-100/80",
    iconBg: "bg-[#3B82F6]",
    badge: null,
    buttonText: "Select Plan",
  },
  {
    id: "p2",
    name: "Starter",
    price: 15,
    priceLabel: "$15",
    limitPrice: "15 USDT",
    dailyRoi: "2.0%",
    days: 60,
    duration: "60 Days",
    bgColor: "bg-[#F0FBF5]",
    borderColor: "border-emerald-100/80",
    iconBg: "bg-[#10B981]",
    badge: null,
    buttonText: "Select Plan",
  },
  {
    id: "p3",
    name: "Premium",
    price: 50,
    priceLabel: "$50",
    limitPrice: "50 USDT",
    dailyRoi: "2.5%",
    days: 120,
    duration: "120 Days",
    bgColor: "bg-[#F5F2FE]",
    borderColor: "border-purple-200",
    iconBg: "bg-[#6F2CEE]",
    badge: "Popular",
    buttonText: "Select Plan",
  },
  {
    id: "p4",
    name: "Premium+",
    price: 165,
    priceLabel: "$165",
    limitPrice: "165 USDT",
    dailyRoi: "3.0%",
    days: 180,
    duration: "180 Days",
    bgColor: "bg-[#FEF7ED]",
    borderColor: "border-amber-100/80",
    iconBg: "bg-[#F97316]",
    badge: "Pro",
    buttonText: "Select Plan",
  },
];

const Middle = () => {
  // Current active package state (defaults to Premium $50)
  const [activePackage, setActivePackage] = useState({
    id: "p3",
    name: "$50 Package",
    badge: "Premium",
    price: "50 USDT",
    dailyRoi: "2.5%",
    duration: "120 Days",
    startDate: "15 May 2024",
    nextRoiTimer: { hrs: "08", min: "45", sec: "12" },
  });

  const [showAllMobile, setShowAllMobile] = useState(false);
  const [modalData, setModalData] = useState(null); // holds the newly changed plan for modal display
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to change plan
  const handleSelectPlan = (pkg) => {
    const updatedActive = {
      id: pkg.id,
      name: `${pkg.priceLabel} Package`,
      badge: pkg.name,
      price: pkg.limitPrice,
      dailyRoi: pkg.dailyRoi,
      duration: pkg.duration,
      startDate: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      nextRoiTimer: { hrs: "23", min: "59", sec: "59" },
    };

    setActivePackage(updatedActive);
    setModalData({
      planName: pkg.name,
      priceLabel: pkg.priceLabel,
      limitPrice: pkg.limitPrice,
      dailyRoi: pkg.dailyRoi,
      duration: pkg.duration,
      iconBg: pkg.iconBg,
    });
    setIsModalOpen(true);
  };

  // Upgrade to next package
  const handleUpgradeClick = () => {
    const currentIndex = packagesList.findIndex(
      (p) => p.id === activePackage.id
    );
    const nextPkg =
      currentIndex >= 0 && currentIndex < packagesList.length - 1
        ? packagesList[currentIndex + 1]
        : packagesList[packagesList.length - 1];

    handleSelectPlan(nextPkg);
  };

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Active Package Banner (Left Column - 4 cols on desktop) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-xs flex flex-col justify-between gap-5 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-[#1C212E]">
              Active Package
            </h3>
            <span className="bg-amber-500 text-white font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {activePackage.badge}
            </span>
          </div>

          {/* Package Graphic & Core Details */}
          <div className="flex flex-col items-center justify-center text-center my-1">
            <div className="w-20 h-20 rounded-3xl bg-linear-to-tr from-[#6F2CEE] via-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/25 mb-3 group hover:scale-105 transition-transform">
              <Crown className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-[#1C212E]">
              {activePackage.name}
            </h4>
          </div>

          {/* Detailed Package Stats Table */}
          <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div>
              <span className="text-slate-400 font-medium block">Price</span>
              <span className="font-bold text-slate-800 text-sm">
                {activePackage.price}
              </span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block">Daily ROI</span>
              <span className="font-bold text-emerald-600 text-sm">
                {activePackage.dailyRoi}
              </span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block">Duration</span>
              <span className="font-bold text-slate-800">
                {activePackage.duration}
              </span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block">Start Date</span>
              <span className="font-bold text-slate-800">
                {activePackage.startDate}
              </span>
            </div>
          </div>

          {/* Next ROI Countdown Timer */}
          <div className="bg-purple-50/70 p-3.5 rounded-2xl border border-purple-100 flex items-center justify-between">
            <span className="text-xs font-bold text-[#6F2CEE]">Next ROI</span>
            <div className="flex items-center gap-1 font-mono font-bold text-sm text-slate-800">
              <span className="bg-white px-2 py-1 rounded-md border border-purple-200">
                {activePackage.nextRoiTimer.hrs}
              </span>
              <span>:</span>
              <span className="bg-white px-2 py-1 rounded-md border border-purple-200">
                {activePackage.nextRoiTimer.min}
              </span>
              <span>:</span>
              <span className="bg-white px-2 py-1 rounded-md border border-purple-200">
                {activePackage.nextRoiTimer.sec}
              </span>
            </div>
          </div>

          <button
            onClick={handleUpgradeClick}
            className="w-full py-3 px-4 bg-[#6F2CEE] hover:bg-purple-700 active:scale-95 text-white font-bold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Upgrade Package</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Our Packages Grid (Right Column - 8 cols on desktop) */}
        <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-slate-100 shadow-xs flex flex-col justify-between gap-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-lg text-[#1C212E]">
                Our Packages
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                Choose a package that fits your investment goals
              </p>
            </div>
            <button
              onClick={() => setShowAllMobile((prev) => !prev)}
              className="text-xs font-bold text-[#6F2CEE] hover:bg-purple-100 active:scale-95 cursor-pointer flex items-center gap-1 bg-purple-50 px-3.5 py-1.5 rounded-xl border border-purple-100 transition-all shrink-0"
            >
              {showAllMobile ? "Show Less" : "View All"}
            </button>
          </div>

          {/* PACKAGES LIST CARDS (2 COLUMNS GRID ON MOBILE) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
            {packagesList.map((pkg, idx) => {
              const isCurrent = activePackage.id === pkg.id;
              const isHiddenOnMobile = idx >= 2 && !showAllMobile;

              return (
                <div
                  key={pkg.id}
                  className={`${
                    isHiddenOnMobile ? "hidden sm:flex" : "flex"
                  } p-3 sm:p-5 rounded-2xl sm:rounded-3xl border ${
                    isCurrent
                      ? "border-purple-500 ring-2 ring-purple-400/30"
                      : pkg.borderColor
                  } ${pkg.bgColor} flex-col justify-between gap-3 sm:gap-4 transition-all hover:scale-[1.02] relative`}
                >
                  {isCurrent ? (
                    <span className="absolute -top-2.5 right-2 sm:right-4 bg-emerald-600 text-white text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full shadow-2xs uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Active
                    </span>
                  ) : pkg.badge ? (
                    <span className="absolute -top-2.5 right-2 sm:right-4 bg-purple-600 text-white text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full shadow-2xs uppercase tracking-wider">
                      {pkg.badge}
                    </span>
                  ) : null}

                  {/* Title & Price */}
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-500 block uppercase tracking-wide">
                      {pkg.name}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-[#1C212E] mt-0.5">
                      {pkg.priceLabel}
                    </h4>
                  </div>

                  {/* Badge Icon */}
                  <div className="flex justify-center my-1">
                    <div
                      className={`w-12 h-12 rounded-2xl ${pkg.iconBg} flex items-center justify-center text-white shadow-md`}
                    >
                      <Crown className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Stats List */}
                  <div className="space-y-1.5 text-xs border-t border-slate-200/60 pt-3">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Daily ROI</span>
                      <span className="font-bold text-emerald-600">
                        {pkg.dailyRoi}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Duration</span>
                      <span className="font-bold text-slate-800">
                        {pkg.duration}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleSelectPlan(pkg)}
                    disabled={isCurrent}
                    className={`w-full py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-purple-100 text-[#6F2CEE] font-extrabold cursor-default border border-purple-200"
                        : "bg-[#6F2CEE] hover:bg-purple-700 text-white shadow-2xs"
                    }`}
                  >
                    {isCurrent ? "Current Plan" : "Select Plan"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLAN CHANGE SUCCESS POPUP MODAL */}
      {isModalOpen && modalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 relative animate-scaleUp">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success Graphic & Header */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-[#1C212E]">
                Plan Changed Successfully! 🎉
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Your investment plan has been updated to the{" "}
                <span className="font-bold text-[#6F2CEE]">
                  {modalData.planName} Plan ({modalData.priceLabel})
                </span>
                .
              </p>
            </div>

            {/* Plan Details Card inside Modal */}
            <div className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 my-5 space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 font-medium">Package</span>
                <span className="font-bold text-slate-800">
                  {modalData.planName} ({modalData.limitPrice})
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 font-medium">Daily ROI</span>
                <span className="font-bold text-emerald-600 text-sm">
                  {modalData.dailyRoi}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 font-medium">Duration</span>
                <span className="font-bold text-slate-800">
                  {modalData.duration}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs border-t border-purple-100 pt-2">
                <span className="text-slate-500 font-medium">Status</span>
                <span className="font-extrabold text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Active Now
                </span>
              </div>
            </div>

            {/* Confirmation Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-3 bg-[#6F2CEE] hover:bg-purple-700 text-white font-extrabold text-sm rounded-2xl shadow-md transition-all cursor-pointer text-center"
            >
              Great, got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Middle;
