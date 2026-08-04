import React from 'react';
import avatar1 from '../../assets/Nft1.png';

const levelSummaries = [
  { level: 'Level 1', count: 2, percent: '16.00%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { level: 'Level 2', count: 4, percent: '32.00%', color: 'text-blue-600', bg: 'bg-blue-50' },
  { level: 'Level 3', count: 8, percent: '64.00%', color: 'text-purple-600', bg: 'bg-purple-50' },
  { level: 'Level 4', count: 16, percent: '128.00%', color: 'text-amber-600', bg: 'bg-amber-50' },
  { level: 'Level 5+', count: 1226, percent: '976.00%', color: 'text-rose-600', bg: 'bg-rose-50' },
];

const sponsors = [
  { id: 1, name: 'John Doe', team: 256, vol: '4.25 ETH', avatar: avatar1 },
  { id: 2, name: 'Alice Smith', team: 198, vol: '3.60 ETH', avatar: avatar1 },
  { id: 3, name: 'Mike Brown', team: 156, vol: '2.80 ETH', avatar: avatar1 },
];

const Down = () => {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Level Wise Summary */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-5">Level Wise Summary</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {levelSummaries.map((lvl, i) => (
            <div key={i} className={`${lvl.bg} rounded-2xl p-4 border border-white/50`}>
              <p className={`text-xs font-bold ${lvl.color} mb-3`}>{lvl.level}</p>
              <h4 className="text-2xl font-black text-gray-900">{lvl.count}</h4>
              <div className="flex justify-between items-end mt-1">
                <span className="text-[10px] text-gray-500 font-medium">Members</span>
                <span className="text-[11px] font-bold text-gray-900">{lvl.percent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Grid: Sponsors Only */}
      <div className="w-full">
        {/* Top Sponsors */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-6 max-w-xl mx-auto lg:mx-0">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Top Sponsors</h3>
            <button className="text-sm font-bold text-[#5139E6] hover:underline cursor-pointer">View All</button>
          </div>
          <div className="flex flex-col gap-5">
            {sponsors.map((s, i) => (
              <div key={s.id} className="flex items-center gap-3">
                <span className="text-sm font-black text-purple-400 w-4">{i + 1}</span>
                <img src={s.avatar} alt={s.name} className="w-10 h-10 rounded-full bg-gray-100" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900">{s.name}</p>
                  <p className="text-xs text-gray-500">Total Team <span className="font-bold text-gray-700">{s.team}</span></p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Volume</p>
                  <p className="text-xs font-bold text-gray-900">{s.vol}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Down;
