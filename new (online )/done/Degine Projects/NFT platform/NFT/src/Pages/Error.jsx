import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Down from '../components/Homepage/Down';
import { Compass, Home as HomeIcon } from 'lucide-react';

const Error = () => {
  return (
    <div className="bg-[#070A18] min-h-screen text-white font-sans flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="grid min-h-[70vh] place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-3xl bg-purple-900/30 text-purple-400 flex items-center justify-center border border-purple-500/30 mb-6">
              <Compass className="w-10 h-10 animate-spin-slow" />
            </div>
            <p className="text-sm font-extrabold tracking-widest text-purple-400 uppercase">404 Error</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">Page Not Found</h1>
            <p className="mt-4 text-base font-medium text-slate-400 max-w-md">
              Sorry, we couldn’t find the NFT item or page you’re looking for. It might have been moved or unlisted.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                to="/"
                className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-purple-600/30 hover:bg-purple-500 transition-colors flex items-center gap-2"
              >
                <HomeIcon className="w-4 h-4" /> Go back home
              </Link>
              <Link
                to="/trade"
                className="rounded-xl bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-700 transition-colors"
              >
                Explore Marketplace &rarr;
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Down />
    </div>
  );
};

export default Error;