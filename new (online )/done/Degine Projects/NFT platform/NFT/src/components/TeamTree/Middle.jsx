import React, { useState, useEffect } from 'react';
import { Expand, Shrink, Minus, Plus } from 'lucide-react';
import avatar1 from '../../assets/Trade/cyber_punk.jpg'; 

// ── Tree Data ──
const treeData = {
  name: 'HexaUser (You)',
  address: '0xA1B2...c34D',
  level: 0,
  avatar: avatar1,
  children: [
    {
      name: 'John Doe',
      address: '0xB3C4...d56E',
      level: 1,
      avatar: avatar1,
      children: [
        {
          name: 'Mike Brown',
          address: '0xE5F6...g78H',
          level: 2,
          avatar: avatar1,
          children: [
             { name: 'Alex Ray', address: '0xI9J0...k12L', level: 3, avatar: avatar1 },
             { name: 'Lisa Martin', address: '0xJ0K1...l23M', level: 3, avatar: avatar1 },
          ]
        },
        {
          name: 'Sarah Wilson',
          address: '0xF6G7...h89I',
          level: 2,
          avatar: avatar1,
          children: [
             { name: 'Tom Harris', address: '0xK1L2...m34N', level: 3, avatar: avatar1 },
             { name: 'Nina Patel', address: '0xL2M3...n45O', level: 3, avatar: avatar1 },
          ]
        }
      ]
    },
    {
      name: 'Alice Smith',
      address: '0xD4E5...f67G',
      level: 1,
      avatar: avatar1,
      children: [
        {
          name: 'David Lee',
          address: '0xG7H8...i90J',
          level: 2,
          avatar: avatar1,
          children: [
             { name: 'Chris Evans', address: '0xM3N4...o56P', level: 3, avatar: avatar1 },
             { name: 'Olivia Scott', address: '0xN4O5...p67Q', level: 3, avatar: avatar1 },
          ]
        },
        {
          name: 'Emma Clark',
          address: '0xH8I9...j01K',
          level: 2,
          avatar: avatar1,
          children: [
             { name: 'James King', address: '0xO5P6...p78R', level: 3, avatar: avatar1 },
             { name: 'Sophia White', address: '0xP6Q7...r89S', level: 3, avatar: avatar1 },
          ]
        }
      ]
    }
  ]
};


// ── Node Component ──
const TreeNode = ({ name, address, level, avatar, children, forceExpand }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  // Respond to the "Expand/Collapse All" button
  useEffect(() => {
    setIsExpanded(forceExpand);
  }, [forceExpand]);

  const hasChildren = children && children.length > 0;

  return (
    <div className="flex flex-col items-center mx-2">
      {/* Node Card */}
      <div className={`relative bg-white border ${level === 0 ? 'border-purple-500 shadow-purple-500/20 shadow-md' : 'border-gray-200'} rounded-2xl p-2 sm:p-3 w-40 sm:w-48 shadow-sm flex items-center gap-3 z-10 hover:shadow-md transition-all`}>
        <img src={avatar} alt={name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover bg-gray-100 shrink-0" />
        <div className="text-left overflow-hidden flex-1">
          <p className="text-xs sm:text-sm font-bold text-gray-900 truncate">{address}</p>
          {/* <p className="text-[10px] text-gray-500 truncate">{address}</p> */}
          <span className={`inline-block mt-1 text-[9px] font-bold px-2 py-0.5 rounded-md ${level === 0 ? 'bg-purple-100 text-purple-700' : 'bg-emerald-50 text-emerald-600'}`}>
            Level {level}
          </span>
        </div>
        
        {/* Expand/Collapse Toggle Button (only if has children) */}
        {hasChildren && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-full p-1 shadow-sm hover:bg-gray-50 transition-colors z-20 cursor-pointer"
          >
            {isExpanded ? <Minus className="w-3 h-3 text-gray-500" /> : <Plus className="w-3 h-3 text-purple-600 font-bold" />}
          </button>
        )}
      </div>

      {/* Children connector (only visible if expanded) */}
      {hasChildren && (
        <div className={`transition-all duration-300 ease-in-out origin-top flex flex-col items-center w-full mt-0 ${isExpanded ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'}`}>
          {/* Vertical line down from parent */}
          <div className="w-[2px] h-8 bg-gray-300"></div>
          
          {/* Horizontal line connecting children */}
          <div className="relative flex justify-center w-full">
            {/* The actual horizontal line drawn behind the vertical drops */}
            <div className="absolute top-0 h-[2px] bg-gray-300" style={{ left: '25%', right: '25%' }}></div>
            
            {/* Map through children recursively */}
            <div className="flex justify-between gap-2 sm:gap-4 w-full">
              {children.map((child, idx) => (
                <div key={idx} className="relative flex flex-col items-center flex-1">
                  {/* Vertical line down to child */}
                  <div className="w-[2px] h-6 bg-gray-300"></div>
                  <div className="w-full flex justify-center">
                    <TreeNode {...child} forceExpand={forceExpand} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


// ── Middle Section ──
const Middle = () => {
  const [expandAll, setExpandAll] = useState(true);

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-6 flex flex-col h-[700px]">
      
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 p-4 sm:p-6 gap-4 shrink-0">
        
        {/* Tabs - Only Binary Tree remaining */}
        <div className="flex items-center gap-6 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
          <button className="whitespace-nowrap text-sm font-bold pb-2 border-b-2 transition-colors border-[#5139E6] text-[#5139E6]">
            Binary Tree
          </button>
        </div>
        
        {/* Actions - Expand All button */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setExpandAll(!expandAll)}
            className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer shadow-sm active:scale-95"
          >
            {expandAll ? (
              <>
                <Shrink className="w-4 h-4 text-gray-500" /> Collapse All
              </>
            ) : (
              <>
                <Expand className="w-4 h-4 text-[#5139E6]" /> Expand All
              </>
            )}
          </button>
        </div>
      </div>

      {/* Tree Canvas - Scrollable in all directions */}
      <div className="flex-1 overflow-auto bg-[#F9FAFB]/60 relative custom-scrollbar flex">
        {/* Using m-auto ensures proper scrolling on mobile without cutting off the left side */}
        <div className="min-w-max p-10 pt-14 pb-20 m-auto">
          <TreeNode {...treeData} forceExpand={expandAll} />
        </div>
      </div>
      
    </div>
  );
};

export default Middle;
