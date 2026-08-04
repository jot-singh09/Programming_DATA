import React from 'react';
import { Users, UserCheck, BarChart3, UserPlus } from 'lucide-react';

const statCards = [
  {
    id: 1,
    title: "Total Team Members",
    value: "1256",
    subtitle: "All Levels",
    icon: <Users className="w-6 h-6 text-[#5139E6]" />,
    iconBg: "bg-[#EEEAFD]",
  },
  {
    id: 2,
    title: "Active Members",
    value: "842",
    subtitle: "This Month",
    icon: <UserCheck className="w-6 h-6 text-emerald-600" />,
    iconBg: "bg-emerald-100",
  },
  {
    id: 3,
    title: "Total Team Volume",
    value: "18.45 ETH",
    subtitle: "All Time",
    icon: <BarChart3 className="w-6 h-6 text-amber-600" />,
    iconBg: "bg-amber-100",
  },
  {
    id: 4,
    title: "Direct Members",
    value: "12",
    subtitle: "Level 1",
    icon: <UserPlus className="w-6 h-6 text-blue-600" />,
    iconBg: "bg-blue-100",
  }
];

const Upper = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-6">
      {statCards.map((stat) => (
        <div key={stat.id} className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-100 shadow-xs hover:shadow-md transition-all flex items-center gap-4">
          <div className={`p-4 rounded-2xl ${stat.iconBg}`}>
            {stat.icon}
          </div>
          <div>
            <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1">{stat.title}</p>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">{stat.value}</h3>
            <p className="text-gray-400 text-xs mt-1 font-medium">{stat.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upper;
