import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home({ darkMode, addToCart }) {
  const productData = {
    id: 'hope-wellness-40',
    name: 'HOPE Natural Wellness Formula',
    subtitle: '40 Capsules • 100% Organic Dietary Supplement',
    price: 1799,
    originalPrice: 1999,
    image: '/product.jpg',
  }

  const features = [
    {
      icon: '🌿',
      title: '100% Organic',
      desc: 'Formulated with hand-selected, ethically harvested medicinal botanicals with zero additives.',
    },
    {
      icon: '🛡️',
      title: 'Zero Side Effects',
      desc: 'Gentle, bio-compatible wellness capsules proven to harmonize with your body naturally.',
    },
    {
      icon: '⚡',
      title: 'Boosts Vitality',
      desc: 'Restores stamina, mental clarity, and metabolic vitality for active, wholesome living.',
    },
    {
      icon: '🌱',
      title: 'All Natural Ingredients',
      desc: 'Pure extracts of ancient healing herbs, turmeric, chamomile, and therapeutic citrus essence.',
    },
    {
      icon: '✚',
      title: 'Supports Immunity',
      desc: 'Rich in protective antioxidants that fortify cellular defense mechanisms.',
    },
    {
      icon: '🤝',
      title: 'Welfare Driven',
      desc: 'HOPE Traders is dedicated to affordable healthcare and welfare access for all families.',
    },
  ]

  const testimonials = [
    {
      name: 'Gurpreet Singh',
      city: 'Ludhiana, Punjab',
      comment: 'HOPE capsules gave me back my energy within two weeks. Being 100% organic with zero side effects makes all the difference!',
      rating: 5,
    },
    {
      name: 'Harpreet Kaur',
      city: 'Malerkotla, Punjab',
      comment: 'Authentic medicine by HOPE Traders. Quick delivery, genuine quality, and direct WhatsApp support was so helpful.',
      rating: 5,
    },
    {
      name: 'Dr. Ramesh Sharma',
      city: 'Chandigarh',
      comment: 'An exceptional herbal formulation. The synergy of traditional botanicals provides authentic wellness support.',
      rating: 5,
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-emerald-50/80 via-emerald-100/30 to-white dark:from-[#0d1c12] dark:via-[#13291b] dark:to-[#0f1a12] py-14 sm:py-18 lg:py-24 transition-colors">
        {/* Decorative Ambient Blobs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-400/20 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300/20 dark:bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide uppercase border border-emerald-300 dark:border-emerald-700 mb-5">
                <span>🌿 Welfare & Herbal Wellness</span>
              </div>

              <h1 className="font-['Playfair_Display'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white leading-[1.2] sm:leading-[1.18] tracking-tight mb-5">
                Break Free, <br />
                <span className="text-emerald-700 dark:text-emerald-400 italic">Live Clean</span> with HOPE
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl leading-relaxed mb-6">
                Experience the pure healing power of nature. <strong className="text-zinc-800 dark:text-zinc-100 font-semibold">HOPE Natural Wellness Formula</strong> is an organic dietary supplement engineered to boost immunity, restore natural vitality, and promote long-term well-being with zero side effects.
              </p>

              {/* Price Banner */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-7">
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-800 dark:text-emerald-300">₹1,799</span>
                <span className="text-base sm:text-lg text-zinc-400 line-through">₹1,999</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-bold rounded-md border border-amber-400">
                  SAVE ₹200 (10% OFF)
                </span>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto mb-8">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => addToCart(productData)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-2 cursor-pointer transition"
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>Add to Cart • ₹1,799</span>
                </motion.button>

                <a
                  href={`https://wa.me/919855755630?text=${encodeURIComponent("Hello HOPE Traders! I want to order HOPE Natural Wellness Formula (₹1,799). Please confirm details.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-md flex items-center justify-center gap-2 transition"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Quick WhatsApp Order</span>
                </a>
              </div>

              {/* Quick Trust badges */}
              <div className="pt-6 border-t border-emerald-200/60 dark:border-emerald-900/60 grid grid-cols-3 gap-3 w-full text-center sm:text-left">
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  <span className="block font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-0.5">40 Capsules</span>
                  Full Month Course
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  <span className="block font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-0.5">Fast Dispatch</span>
                  Malerkotla, Punjab
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  <span className="block font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-0.5">100% Herbal</span>
                  Lab Certified Formula
                </div>
              </div>
            </motion.div>

            {/* Right Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center relative"
            >
              <div className="relative group max-w-sm sm:max-w-md w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-amber-500/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="relative rounded-3xl overflow-hidden border-2 border-emerald-200 dark:border-emerald-800 shadow-2xl bg-white dark:bg-[#152319]"
                >
                  <img
                    src="/product.jpg"
                    alt="HOPE Natural Wellness Formula Bottle"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-700 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow">
                    40 Capsules
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#0f1a12] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 flex flex-col items-center"
          >
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
              Why Choose HOPE Formula
            </span>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mb-3">
              Rooted in Nature, Backed by Science
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              Carefully designed with balanced herbal components to rejuvenate body and soul without any chemicals or artificial stimulants.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((f, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-7 rounded-2xl bg-zinc-50 dark:bg-[#17281c] border border-emerald-100 dark:border-emerald-900/50 hover:border-emerald-400 dark:hover:border-emerald-700 transition shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl sm:text-3xl mb-4 p-3 w-13 h-13 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2">{f.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Welfare & Mission Showcase Section */}
      <section className="py-16 sm:py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-700/40 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-4">
                Community Health & Welfare
              </div>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-4xl font-extrabold leading-tight mb-4">
                Our Commitment to Pure Wellness & Accessible Healthcare
              </h2>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-6">
                Operating out of Malerkotla, Punjab, <strong className="text-white font-semibold">HOPE Traders</strong> was founded on a simple yet profound premise: good health and vitality should be accessible to everyone. We channel a portion of every purchase into community welfare drives and health awareness campaigns.
              </p>
              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-sm shadow-md transition"
                >
                  <span>Learn More About Our Welfare</span>
                  <span>→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 bg-emerald-800/80 p-7 sm:p-9 rounded-3xl border border-emerald-700 backdrop-blur text-center flex flex-col items-center"
            >
              <div className="text-amber-400 text-3xl mb-3 tracking-widest">★ ★ ★ ★ ★</div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Playfair_Display'] mb-3">Direct WhatsApp Helpline</h3>
              <p className="text-emerald-200 text-xs sm:text-sm leading-relaxed mb-5">
                Have questions about usage, dosage, or order tracking? Reach out directly on our personal line:
              </p>
              <a
                href="https://wa.me/919855755630"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base sm:text-lg shadow-lg transition mb-3"
              >
                +91 9855755630
              </a>
              <p className="text-xs text-emerald-300">Fast replies • Monday to Sunday • 9am - 9pm</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-zinc-50 dark:bg-[#0c160f] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col items-center">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
              Customer Experiences
            </span>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
              Loved Across Punjab & Beyond
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="p-7 rounded-2xl bg-white dark:bg-[#17281c] border border-emerald-100 dark:border-emerald-900/40 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-amber-400 text-base mb-3 tracking-wider">{'★'.repeat(t.rating)}</div>
                  <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm italic leading-relaxed mb-4">
                    "{t.comment}"
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 dark:border-emerald-900/30">
                  <p className="font-bold text-zinc-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">{t.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Order CTA */}
      <section className="py-14 sm:py-18 bg-gradient-to-r from-emerald-800 to-emerald-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h2 className="font-['Playfair_Display'] text-2xl sm:text-4xl font-extrabold mb-3">
            Ready to reclaim your energy and vitality?
          </h2>
          <p className="text-emerald-200 text-sm sm:text-base max-w-2xl leading-relaxed mb-6">
            Order your bottle of HOPE Natural Wellness Formula today for only <strong className="text-white font-bold">₹1,799</strong> (original ₹1,999). Fast delivery to your doorstep.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => addToCart(productData)}
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-zinc-950 font-extrabold text-sm sm:text-base shadow-xl transition cursor-pointer"
            >
              Add To Cart • ₹1,799
            </button>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-emerald-700/60 hover:bg-emerald-700 border border-emerald-500 text-white font-bold text-sm sm:text-base transition"
            >
              Visit Our Office in Malerkotla
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
