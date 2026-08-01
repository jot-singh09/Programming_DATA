import React, { useState } from 'react';
import Navbar from "../components/navbar/Navbar";
import Down from "../components/Homepage/Down";
import { Users, Copy, CheckCircle2, Share2, Award, ChevronDown, ChevronRight, Zap, TrendingUp, Layers } from 'lucide-react';

const Teamtree = () => {
  const [copied, setCopied] = useState(false);
  const [referralCode, setReferralCode] = useState('0x71C94F8A2B01');
  const referralLink = `https://hexaway.io/auth?ref=${referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const treeNodes = [
    {
      id: 'main',
      name: 'You (Account Leader)',
      address: '0x71C...4f9A',
      level: 'Tier 1 Leader',
      commission: '12.4 ETH ($42,800)',
      downlineCount: 14,
      children: [
        {
          id: 'child-1',
          name: 'Alex Rivera',
          address: '0x39A...881F',
          level: 'Level 1 Direct',
          commission: '4.2 ETH',
          downlines: 5
        },
        {
          id: 'child-2',
          name: 'Sarah Connor',
          address: '0x88F...102D',
          level: 'Level 1 Direct',
          commission: '3.8 ETH',
          downlines: 6
        },
        {
          id: 'child-3',
          name: 'David Zhang',
          address: '0x12C...994E',
          level: 'Level 1 Direct',
          commission: '2.1 ETH',
          downlines: 3
        }
      ]
    }
  ];

  const recentRewards = [
    { id: 1, user: 'Alex Rivera', level: 'Level 1', reward: '+0.15 ETH', date: '2 hours ago', type: 'Direct Sale' },
    { id: 2, user: 'Sarah Connor', level: 'Level 1', reward: '+0.25 ETH', date: '5 hours ago', type: 'Royalty Bonus' },
    { id: 3, user: 'Elena Rostova', level: 'Level 2', reward: '+0.08 ETH', date: '1 day ago', type: 'Team Volume' },
    { id: 4, user: 'David Zhang', level: 'Level 1', reward: '+0.12 ETH', date: '2 days ago', type: 'Direct Sale' },
  ];

  return (
    <div className="bg-[#070A18] min-h-screen text-white font-sans flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Page Header */}
        <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-2">
                <Users className="w-3.5 h-3.5" /> Affiliate & Team Network
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">Referral Tree & Earnings</h1>
              <p className="text-slate-400 text-sm mt-1">
                Track your multi-level referral network, commissions earned, and downline performance.
              </p>
            </div>

            {/* Level Tier Badge */}
            <div className="bg-slate-900 border border-purple-500/30 p-4 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center border border-purple-500/40">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium">Network Status</span>
                <p className="text-base font-bold text-white">Diamond Tier 3</p>
                <span className="text-[11px] text-emerald-400 font-semibold">+15% Bonus Pool</span>
              </div>
            </div>
          </div>
        </section>

        {/* Referral Link & Quick Metrics */}
        <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
          {/* Link Box */}
          <div className="bg-slate-900/90 border border-purple-500/30 p-6 rounded-3xl backdrop-blur-md mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Share2 className="w-4 h-4 text-purple-400" /> Your Unique Referral Link
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">Share this link with creators to earn up to 10% on their trading volume.</p>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto bg-slate-950 p-2 rounded-2xl border border-slate-800">
              <input
                type="text"
                readOnly
                value={referralLink}
                className="bg-transparent px-3 py-1.5 text-xs text-purple-300 font-mono w-full md:w-72 outline-none"
              />
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy Link
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
              <span className="text-xs text-slate-400 font-medium">Total Network Members</span>
              <p className="text-2xl font-bold text-white mt-1">42 Users</p>
              <span className="text-[11px] text-emerald-400 font-semibold">+8 this week</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
              <span className="text-xs text-slate-400 font-medium">Direct Referrals (Level 1)</span>
              <p className="text-2xl font-bold text-purple-400 mt-1">14 Direct</p>
              <span className="text-[11px] text-slate-400">Active Tier 1 Leaders</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
              <span className="text-xs text-slate-400 font-medium">Total Rewards Earned</span>
              <p className="text-2xl font-bold text-emerald-400 mt-1">10.15 ETH</p>
              <span className="text-[11px] text-slate-400">~$34,800 USD</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
              <span className="text-xs text-slate-400 font-medium">Team Volume (24h)</span>
              <p className="text-2xl font-bold text-cyan-400 mt-1">84.5 ETH</p>
              <span className="text-[11px] text-emerald-400 font-semibold">+18.2% vs yesterday</span>
            </div>
          </div>
        </section>

        {/* Visual Referral Tree Section */}
        <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto mb-12">
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-400" /> Interactive Referral Tree Hierarchy
            </h3>
            <p className="text-xs text-slate-400 mb-6">Visual breakdown of your account leadership and direct downline branches.</p>

            {/* Tree Node Structure */}
            <div className="flex flex-col items-center gap-6 py-4">
              {/* Leader Node (Root) */}
              <div className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 border-2 border-purple-500 rounded-2xl p-4 shadow-xl text-center max-w-xs w-full">
                <span className="text-[10px] uppercase font-bold text-purple-300 bg-purple-950 px-2.5 py-0.5 rounded-full border border-purple-700">
                  {treeNodes[0].level}
                </span>
                <h4 className="text-base font-bold text-white mt-1.5">{treeNodes[0].name}</h4>
                <p className="text-xs text-slate-400 font-mono">{treeNodes[0].address}</p>
                <div className="mt-2 pt-2 border-t border-purple-800/50 flex justify-between text-xs font-semibold">
                  <span className="text-purple-300">Reward: {treeNodes[0].commission}</span>
                  <span className="text-emerald-400">{treeNodes[0].downlineCount} Downlines</span>
                </div>
              </div>

              {/* Connecting Vertical Line */}
              <div className="w-0.5 h-8 bg-purple-500/50"></div>

              {/* Children Nodes Grid (Level 1) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
                {treeNodes[0].children.map((child) => (
                  <div
                    key={child.id}
                    className="bg-slate-950/90 border border-slate-800 hover:border-purple-500/60 rounded-2xl p-4 text-center transition-all hover:-translate-y-1"
                  >
                    <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded-full border border-cyan-800/50">
                      {child.level}
                    </span>
                    <h5 className="text-sm font-bold text-white mt-1">{child.name}</h5>
                    <p className="text-[11px] text-slate-400 font-mono">{child.address}</p>
                    <div className="mt-2 pt-2 border-t border-slate-800/80 flex justify-between text-[11px]">
                      <span className="text-slate-400">Earned: <b className="text-white">{child.commission}</b></span>
                      <span className="text-purple-400 font-semibold">{child.downlines} Sub-members</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Reward Activity Table */}
        <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto mb-16">
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" /> Recent Referral Commissions
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="pb-3 font-semibold">User</th>
                    <th className="pb-3 font-semibold">Network Level</th>
                    <th className="pb-3 font-semibold">Commission Type</th>
                    <th className="pb-3 font-semibold">Reward Amount</th>
                    <th className="pb-3 font-semibold text-right">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {recentRewards.map((reward) => (
                    <tr key={reward.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3.5 font-bold text-white">{reward.user}</td>
                      <td className="py-3.5 text-purple-300 font-medium">{reward.level}</td>
                      <td className="py-3.5 text-slate-300">{reward.type}</td>
                      <td className="py-3.5 font-bold text-emerald-400">{reward.reward}</td>
                      <td className="py-3.5 text-right text-slate-500">{reward.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <Down />
    </div>
  );
};

export default Teamtree;