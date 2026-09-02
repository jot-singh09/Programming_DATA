import { Link } from 'react-router-dom'

export default function Footer({ darkMode }) {
  return (
    <footer className="bg-emerald-950 text-emerald-100 border-t border-emerald-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                H
              </div>
              <span className="font-['Playfair_Display'] text-2xl font-bold tracking-tight text-white">
                HOPE<span className="text-amber-400 font-sans text-xl font-semibold ml-1">Traders</span>
              </span>
            </div>
            <p className="text-sm text-emerald-300/80 leading-relaxed">
              Dedicated to welfare & natural holistic health. Providing pure organic wellness formulas to help you live clean and boost everyday vitality.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wider uppercase text-xs">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-emerald-300/80 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-emerald-300/80 hover:text-white transition">About Welfare & Mission</Link>
              </li>
              <li>
                <Link to="/products" className="text-emerald-300/80 hover:text-white transition">HOPE Supplement</Link>
              </li>
              <li>
                <Link to="/contact" className="text-emerald-300/80 hover:text-white transition">Contact & Location</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Highlights */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wider uppercase text-xs">Product Highlights</h4>
            <ul className="space-y-2.5 text-sm text-emerald-300/80">
              <li className="flex items-center gap-2">
                <span className="text-amber-400">✓</span> 100% Organic & Herbal
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">✓</span> Zero Side Effects
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">✓</span> Boosts Natural Vitality
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">✓</span> 40 Herbal Capsules (₹1,799)
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Welfare Info */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-base mb-4 tracking-wider uppercase text-xs">Reach Our Office</h4>
            <div className="text-sm text-emerald-300/80 space-y-2">
              <p className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Malerkotla, Punjab, India</span>
              </p>
              <p className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919855755630" className="hover:text-white transition">+91 9855755630</a>
              </p>
              <p className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@hopetraders.com" className="hover:text-white transition">info@hopetraders.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/70">
          <p>© {new Date().getFullYear()} HOPE Traders. All rights reserved.</p>
          <p>Committed to Community Health & Welfare • Malerkotla, Punjab</p>
        </div>
      </div>
    </footer>
  )
}
