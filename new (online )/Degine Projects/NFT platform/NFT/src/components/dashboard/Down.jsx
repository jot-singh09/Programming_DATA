import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  UserPlus,
  TrendingUp,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  CheckCircle2,
  Clock,
} from "lucide-react";

// Recent Activities Full Data
const recentActivitiesList = [
  {
    id: "act-1",
    title: "NFT Sold",
    subtitle: "Cyber Punk #5472",
    txId: "0x8f3...a9b2",
    amount: "+0.85 ETH",
    time: "2m ago",
    type: "income",
    category: "sales",
    iconBg: "bg-purple-100 text-[#6F2CEE]",
    icon: ShoppingBag,
    status: "Completed",
  },
  {
    id: "act-2",
    title: "Referral Bonus",
    subtitle: "From user 0xB8A3...3F78",
    txId: "0x4e1...c8d9",
    amount: "+0.25 ETH",
    time: "1h ago",
    type: "income",
    category: "referral",
    iconBg: "bg-emerald-100 text-emerald-600",
    icon: UserPlus,
    status: "Completed",
  },
  {
    id: "act-3",
    title: "Level Income",
    subtitle: "Level 3 Bonus Received",
    txId: "0x2a9...e3f1",
    amount: "+0.35 ETH",
    time: "5h ago",
    type: "income",
    category: "bonus",
    iconBg: "bg-blue-100 text-blue-600",
    icon: TrendingUp,
    status: "Completed",
  },
  {
    id: "act-4",
    title: "NFT Purchased",
    subtitle: "Dream Oasis #1021",
    txId: "0x7d6...b5a4",
    amount: "-0.75 ETH",
    time: "1d ago",
    type: "expense",
    category: "purchase",
    iconBg: "bg-rose-100 text-rose-600",
    icon: ShoppingBag,
    status: "Completed",
  },
  {
    id: "act-5",
    title: "Staking Reward",
    subtitle: "Pool #2 Daily ROI",
    txId: "0x1c3...f9e2",
    amount: "+0.12 ETH",
    time: "2d ago",
    type: "income",
    category: "staking",
    iconBg: "bg-amber-100 text-amber-600",
    icon: Sparkles,
    status: "Completed",
  },
  {
    id: "act-6",
    title: "NFT Minted",
    subtitle: "Astro Cat #004",
    txId: "0x9b5...d2c7",
    amount: "-0.05 ETH",
    time: "3d ago",
    type: "expense",
    category: "mint",
    iconBg: "bg-indigo-100 text-indigo-600",
    icon: Plus,
    status: "Completed",
  },
];

const Down = () => {
  const [filter, setFilter] = useState("all");
  const [showAllActivities, setShowAllActivities] = useState(false);

  const filteredActivities = recentActivitiesList.filter((act) => {
    if (filter === "income") return act.type === "income";
    if (filter === "expense") return act.type === "expense";
    return true;
  });

  const displayedActivities = showAllActivities
    ? filteredActivities
    : filteredActivities.slice(0, 4);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* FULL-WIDTH RECENT ACTIVITIES SECTION ("all w") */}
      <section className="w-full bg-white p-6 rounded-3xl border border-slate-100 shadow-xs flex flex-col justify-between gap-5">
        {/* Header with Title, Category Filter Pills & View All Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-extrabold text-lg text-[#1C212E]">
              Recent Activities
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              Comprehensive log of all your trades, rewards, and transfers
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Filter Buttons */}
            <div className="flex items-center bg-slate-100 p-1 rounded-2xl gap-1 text-xs">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all active:scale-95 cursor-pointer ${
                  filter === "all"
                    ? "bg-white text-[#6F2CEE] shadow-2xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("income")}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all active:scale-95 cursor-pointer ${
                  filter === "income"
                    ? "bg-white text-emerald-600 shadow-2xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Income
              </button>
              <button
                onClick={() => setFilter("expense")}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all active:scale-95 cursor-pointer ${
                  filter === "expense"
                    ? "bg-white text-rose-600 shadow-2xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Expense
              </button>
            </div>

            {/* View All Button */}
            <button
              onClick={() => setShowAllActivities((prev) => !prev)}
              className="text-xs font-bold text-[#6F2CEE] hover:bg-purple-100 active:scale-95 cursor-pointer bg-purple-50 px-3.5 py-1.5 rounded-xl border border-purple-100 transition-all shrink-0"
            >
              {showAllActivities ? "Show Less" : "View All"}
            </button>
          </div>
        </div>

        {/* Activities Table/List Container (Full Width Grid & Responsive Layout) */}
        <div className="w-full space-y-3">
          {displayedActivities.map((act) => {
            const IconComponent = act.icon;
            const isIncome = act.type === "income";

            return (
              <div
                key={act.id}
                className="w-full p-4 rounded-2xl bg-slate-50/70 hover:bg-slate-100/70 border border-slate-100 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Left side: Icon, Title, Subtitle, TxId */}
                <div className="flex items-center gap-3.5">
                  <div
                    className={`p-3 rounded-2xl ${act.iconBg} shadow-2xs shrink-0`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#1C212E]">
                        {act.title}
                      </h4>
                      <span className="text-[10px] font-semibold text-slate-400 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                        {act.subtitle}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] font-mono text-slate-400">
                        TX: {act.txId}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {act.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side: Amount & Status Badge */}
                <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200/60">
                  <div className="flex items-center gap-1.5">
                    {isIncome ? (
                      <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-rose-500" />
                    )}
                    <span
                      className={`text-base font-extrabold ${
                        isIncome ? "text-emerald-600" : "text-rose-600"
                      }`}
                    >
                      {act.amount}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-xl flex items-center gap-1 border border-emerald-100">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {act.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CREATE, TRADE & EARN MORE BOTTOM BANNER */}
      <section className="w-full bg-linear-to-r from-[#6F2CEE] via-purple-700 to-indigo-800 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg shadow-purple-500/15">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight">
              Create, Trade & Earn More
            </h3>
            <p className="text-purple-100 text-xs sm:text-sm mt-1 leading-relaxed">
              Mint your own NFTs, list them on marketplace and start earning.
            </p>
          </div>

          <Link
            to="/create"
            className="bg-white hover:bg-slate-100 text-[#6F2CEE] font-extrabold text-sm px-6 py-3.5 rounded-2xl shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Create NFT</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Down;
