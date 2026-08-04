import React from 'react';
import Upper from './Upper';
import Middle from './Middle';
import Down from './Down';
import Navbar from '../navbar/Navbar';

const TeamTreePage = () => {
  return (
    <div className="min-h-screen bg-[#EDF1FB]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24 sm:pt-28">
        
        {/* Page Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Team Tree</h1>
            <p className="text-gray-500 text-sm mt-1">View your team structure and levels</p>
          </div>
          
          {/* Quick Actions / Balances */}
          <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 px-3 py-1 border-r border-gray-100">
              <div className="p-1.5 bg-purple-50 rounded-lg text-purple-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none">Wallet Balance</p>
                <p className="text-sm font-black text-gray-900 leading-tight">2.75 ETH</p>
              </div>
            </div>
            <div className="px-2">
              <button className="relative p-2 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
            </div>
          </div>
        </div>

        <Upper />
        <Middle />
        <Down />
      </main>
    </div>
  );
};

export default TeamTreePage;
