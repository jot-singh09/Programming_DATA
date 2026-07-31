import logo from '../../assets/logo.png';
import Twitter from '../../assets/Homepage/Twiter.jpg';
import Telegram from '../../assets/Homepage/Telegram.png';

const Down = () => {
  return (
    <footer className="bg-[#050712] border-t border-slate-800/80 text-slate-400 text-sm pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-slate-800/80">
          {/* Logo & Description Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} className="w-8 h-8 object-contain" alt="HEXAWAY Logo" />
              <span className="font-extrabold text-2xl text-white tracking-tight">HEXAWAY</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              The next generation NFT marketplace for creators, collectors and dreamers.
            </p>

            {/* Social Icons - Without Map */}
            <div className="flex items-center gap-3 pt-2">
              {/* Twitter */}
              <button
                className="w-9 h-9 rounded-xl bg-[#111736] border border-slate-800 hover:border-purple-500/50 hover:bg-purple-600/20 text-slate-300 hover:text-purple-300 flex items-center justify-center transition-all cursor-pointer overflow-hidden p-1"
                title="Twitter"
              >
                <img src={Twitter} alt="Twitter" className="w-full h-full object-contain" />
              </button>

              {/* Discord */}
              <button
                className="w-9 h-9 rounded-xl bg-[#111736] border border-slate-800 hover:border-purple-500/50 hover:bg-purple-600/20 text-slate-300 hover:text-purple-300 flex items-center justify-center transition-all cursor-pointer text-lg"
                title="Discord"
              >
                💬
              </button>

              {/* Telegram */}
              <button
                className="w-9 h-9 rounded-xl bg-[#111736] border border-slate-800 hover:border-purple-500/50 hover:bg-purple-600/20 text-slate-300 hover:text-purple-300 flex items-center justify-center transition-all cursor-pointer text-lg"
                title="Telegram"
              >
                
                <img src={Telegram} alt="Twitter" className="w-full h-full object-contain" />
              </button>

              {/* Instagram */}
              <button
                className="w-9 h-9 rounded-xl bg-[#111736] border border-slate-800 hover:border-purple-500/50 hover:bg-purple-600/20 text-slate-300 hover:text-purple-300 flex items-center justify-center transition-all cursor-pointer text-lg"
                title="Instagram"
              >
                
                <img src={Telegram} alt="Twitter" className="w-full h-full object-contain" />
              </button>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Marketplace</h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <li><button className="hover:text-white transition-colors text-left cursor-pointer">Explore</button></li>
              <li><button className="hover:text-white transition-colors text-left cursor-pointer">All NFTs</button></li>
              <li><button className="hover:text-white transition-colors text-left cursor-pointer">Collections</button></li>
              <li><button className="hover:text-white transition-colors text-left cursor-pointer">Top Sellers</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Resources</h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <li><button className="hover:text-white transition-colors text-left cursor-pointer">Help Center</button></li>
              <li><button className="hover:text-white transition-colors text-left cursor-pointer">Guides</button></li>
              <li><button className="hover:text-white transition-colors text-left cursor-pointer">Blog</button></li>
              <li><button className="hover:text-white transition-colors text-left cursor-pointer">Developers</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <li><button className="hover:text-white transition-colors text-left cursor-pointer">About Us</button></li>
              <li><button className="hover:text-white transition-colors text-left cursor-pointer">Careers</button></li>
              <li><button className="hover:text-white transition-colors text-left cursor-pointer">Roadmap</button></li>
              <li><button className="hover:text-white transition-colors text-left cursor-pointer">Contact Us</button></li>
            </ul>
          </div>

          {/* Stay Updated Newsletter Column */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white text-sm">Stay Updated</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-[#0D122B] border border-slate-800 rounded-xl p-1.5 focus-within:border-purple-500 transition-all">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white text-xs px-2 outline-none w-full placeholder-slate-500"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shrink-0 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2024 HEXAWAY. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</button>
            <button className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</button>
            <button className="hover:text-slate-300 transition-colors cursor-pointer">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Down;