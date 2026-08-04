import logo     from '../../assets/logo.png';
import Twitter  from '../../assets/Homepage/Twiter.jpg';
import Telegram from '../../assets/Homepage/Telegram.png';
import insta    from '../../assets/Homepage/insta.png';


// ── Feature Card ──
const FeatureCard = ({ icon, color, title, desc }) => (
  <div className="flex items-start gap-4 bg-white/90 p-5 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
    <div className={`p-3 rounded-xl ${color} shrink-0`}>
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-900 text-sm mb-1">{title}</h4>
      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
    </div>
  </div>
);


// ── Features Data ──
const features = [
  {
    title: 'Secure & Safe',
    desc: 'Your assets are secured with top-tier security.',
    color: 'bg-[#EEEAFD] text-[#5139E6]',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: 'Low Fees',
    desc: 'Enjoy low platform fees on every transaction.',
    color: 'bg-[#E1F5E7] text-emerald-600',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: 'Creator Royalty',
    desc: 'Support creators with royalty on every sale.',
    color: 'bg-[#FEF4DF] text-amber-600',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  },
  {
    title: 'Instant Trading',
    desc: 'Buy and sell NFTs instantly and easily.',
    color: 'bg-[#E0E7FD] text-indigo-600',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
];


// ── Footer Link Column ──
const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="font-bold text-white text-sm mb-4">{title}</h4>
    <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
      {links.map((link) => (
        <li key={link}>
          <button className="hover:text-white transition-colors text-left cursor-pointer">{link}</button>
        </li>
      ))}
    </ul>
  </div>
);


const Down = () => {
  return (
    <div>

      {/* ───── Features Section ───── */}
      <section className="bg-[#EDF1FB] py-10 sm:py-14 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>


      {/* ───── Footer ───── */}
      <footer className="bg-[#050712] border-t border-slate-800/80 text-slate-400 text-sm pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-slate-800/80">

            {/* Brand */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src={logo} className="w-8 h-8 object-contain" alt="HEXAWAY" />
                <span className="font-extrabold text-2xl text-white tracking-tight">HEXAWAY</span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
                The next generation NFT marketplace where creativity meets ownership.
              </p>

              {/* Socials */}
              <div className="flex items-center gap-3 pt-2">
                <button className="w-9 h-9 rounded-xl bg-[#111736] border border-slate-800 hover:border-purple-500/50 hover:bg-purple-600/20 flex items-center justify-center transition-all cursor-pointer overflow-hidden p-1" title="Twitter">
                  <img src={Twitter} alt="Twitter" className="w-full h-full object-contain" />
                </button>
                <button className="w-9 h-9 rounded-xl bg-[#111736] border border-slate-800 hover:border-purple-500/50 hover:bg-purple-600/20 flex items-center justify-center transition-all cursor-pointer overflow-hidden p-1" title="Telegram">
                  <img src={Telegram} alt="Telegram" className="w-full h-full object-contain" />
                </button>
                <button className="w-9 h-9 rounded-xl bg-[#111736] border border-slate-800 hover:border-purple-500/50 hover:bg-purple-600/20 flex items-center justify-center transition-all cursor-pointer overflow-hidden p-1" title="Instagram">
                  <img src={insta} alt="Instagram" className="size-20 object-contain" />
                </button>
              </div>
            </div>

            {/* Link Columns */}
            <FooterColumn title="Marketplace" links={['All NFTs', 'Top Sellers', 'Top Collections', 'New Listings']} />
            <FooterColumn title="My Account"  links={['My Profile', 'My NFTs', 'My Orders', 'Watchlist']} />
            <FooterColumn title="Resources"   links={['Help Center', 'How It Works', 'Fees', 'Blog']} />

            {/* Company + Contact */}
            <div className="flex flex-col gap-6">
              <FooterColumn title="Company" links={['About Us', 'Careers', 'Terms of Service', 'Privacy Policy']} />

              <div>
                <h4 className="font-bold text-white text-sm mb-3">Contact Us</h4>
                <ul className="flex flex-col gap-2 text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    support@hexaway.com
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    +1 (123) 456-7890
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>123 Web3 Street,<br />Blockcity, BC 10001</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>© 2024 Hexaway. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</button>
              <button className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</button>
              <button className="hover:text-slate-300 transition-colors cursor-pointer">Cookie Policy</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Down;
