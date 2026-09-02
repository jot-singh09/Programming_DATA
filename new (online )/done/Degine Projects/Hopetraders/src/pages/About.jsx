import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function About({ darkMode }) {
  const values = [
    {
      title: 'Ethical Herbal Sourcing',
      desc: 'We procure 100% natural, unadulterated botanicals directly from trusted growers committed to organic practices.',
      icon: '🌿',
    },
    {
      title: 'Community Healthcare Welfare',
      desc: 'HOPE Traders runs wellness awareness camps and subsidizes herbal remedies for underprivileged families across Punjab.',
      icon: '🤝',
    },
    {
      title: 'Absolute Transparency',
      desc: 'Zero hidden additives, zero unlisted chemicals, and zero exaggerated claims. What is on the label is in the bottle.',
      icon: '🔍',
    },
    {
      title: 'Rooted in Malerkotla',
      desc: 'Proudly headquartered in Malerkotla, Punjab, embodying the cultural spirit of harmony, hospitality, and selfless service.',
      icon: '📍',
    },
  ]

  return (
    <div className="py-14 sm:py-20 bg-white dark:bg-[#0f1a12] text-zinc-800 dark:text-zinc-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Header Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
            About HOPE Traders
          </span>
          <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white leading-[1.25] mb-4">
            Pioneering Natural Healthcare & Community Welfare
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            At HOPE Traders, we believe that radiant health begins with nature. Our flagship formula <strong className="text-zinc-800 dark:text-zinc-100 font-semibold">HOPE</strong> embodies our mission to deliver safe, effective, and 100% organic medicine to every household.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Our Vision & Welfare Philosophy
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
              Founded in the historic city of Malerkotla, Punjab, <strong className="text-zinc-800 dark:text-zinc-100 font-semibold">HOPE Traders</strong> emerged from a desire to bridge the gap between ancient Ayurvedic wisdom and modern lifestyle wellness.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
              We realized that millions suffer from chronic fatigue, weakened immunity, and stress, often relying on synthetic pills with adverse side effects. Our objective is to offer a clean, restorative botanical alternative that works harmoniously with human physiology.
            </p>
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-[#1a2e1f] border-l-4 border-emerald-600">
              <h3 className="font-bold text-emerald-900 dark:text-emerald-300 text-base mb-1.5">Welfare First Initiative</h3>
              <p className="text-xs sm:text-sm text-emerald-800/90 dark:text-emerald-200/90 leading-relaxed">
                A percentage of proceeds from every bottle of HOPE formula sold is directly contributed to local healthcare clinics and senior welfare support programs in Malerkotla and rural Punjab.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl overflow-hidden border border-emerald-200 dark:border-emerald-800 shadow-xl bg-gradient-to-br from-emerald-100 to-white dark:from-[#17281c] dark:to-[#101b13] p-7 sm:p-9 text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-emerald-700 text-white font-bold text-3xl flex items-center justify-center shadow-lg mb-4">
                H
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                HOPE Traders
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-6">
                Malerkotla, Punjab • Dedicated to Purity & Human Vitality
              </p>
              <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-emerald-200 dark:border-emerald-900/60 text-left">
                <div>
                  <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 block mb-0.5">100%</span>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Organic & Chemical Free</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 block mb-0.5">0%</span>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Side Effects or Fillers</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 block mb-0.5">40</span>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Potent Herbal Capsules</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 block mb-0.5">₹1,799</span>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Special Subsidized Price</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Pillars */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
              Guiding Principles
            </span>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#17281c] border border-emerald-100 dark:border-emerald-900/40 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Link Banner */}
        <div className="p-7 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-800 to-emerald-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h2 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold mb-1.5">
              Want to partner with our welfare mission?
            </h2>
            <p className="text-emerald-200 text-xs sm:text-sm leading-relaxed">
              We welcome healthcare practitioners, distributors, and volunteers to collaborate with HOPE Traders.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-zinc-900 font-bold text-xs sm:text-sm shadow-md transition"
          >
            Contact Our Malerkotla Office
          </Link>
        </div>
      </div>
    </div>
  )
}
