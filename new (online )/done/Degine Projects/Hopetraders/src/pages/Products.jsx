import { motion } from 'framer-motion'

export default function Products({ darkMode, addToCart }) {
  const product = {
    id: 'hope-wellness-40',
    name: 'HOPE Natural Wellness Formula',
    subtitle: '40 Capsules Dietary Supplement',
    price: 1799,
    originalPrice: 1999,
    image: '/product.jpg',
    description:
      'HOPE Natural Wellness Formula is a breakthrough organic wellness capsule crafted from wildcrafted botanicals. Formulated to detoxify the system, boost cellular immunity, and provide sustainable vitality throughout your day.',
    dosage: '1 to 2 capsules daily after meals with warm water or milk, or as directed by a healthcare professional.',
    capsulesCount: '40 Capsules',
    ingredients: [
      { name: 'Organic Turmeric & Curcumin Extract', role: 'Powerful anti-inflammatory and cellular rejuvenator' },
      { name: 'Pure Chamomile Flower Essence', role: 'Calms internal nervous stress and promotes deep restful sleep' },
      { name: 'Amla (Indian Gooseberry) Extract', role: 'Richest natural Vitamin C source for robust immune defense' },
      { name: 'Ashwagandha Extract', role: 'Ancient adaptogen that combats chronic fatigue and restores vitality' },
      { name: 'Ginger Root Bioactive Extract', role: 'Supports digestive metabolism and optimal nutrient assimilation' },
      { name: 'Natural Citrus Bioflavonoids', role: 'Antioxidant booster for vascular and metabolic balance' },
    ],
  }

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hello HOPE Traders! I would like to order:\n\n*${product.name}*\nQuantity: 1 bottle (40 Capsules)\nPrice: ₹${product.price} (Discounted from ₹${product.originalPrice})\n\nPlease provide payment and dispatch details for Punjab/India delivery.`
    )
    window.open(`https://wa.me/919855755630?text=${text}`, '_blank')
  }

  return (
    <div className="py-14 sm:py-20 bg-white dark:bg-[#0f1a12] text-zinc-800 dark:text-zinc-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Product Showcase Top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 sticky top-24"
          >
            <div className="rounded-3xl overflow-hidden border-2 border-emerald-100 dark:border-emerald-900/60 shadow-xl bg-zinc-50 dark:bg-[#152319] p-5 sm:p-7">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover rounded-2xl shadow-sm"
              />
              <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <span>📸 Authentic HOPE Product Shot</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">100% Genuine Formula</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Product Details & Purchase Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="mb-5">
              <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
                ⭐ Flagship Formulation
              </span>
              <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">{product.subtitle}</p>
            </div>

            {/* Price Box */}
            <div className="w-full p-6 rounded-2xl bg-emerald-50 dark:bg-[#17281c] border border-emerald-200 dark:border-emerald-800 mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl sm:text-4xl font-black text-emerald-700 dark:text-emerald-300">
                  ₹{product.price}
                </span>
                <span className="text-lg sm:text-xl text-zinc-400 line-through">₹{product.originalPrice}</span>
                <span className="px-2.5 py-1 bg-amber-400 text-zinc-950 text-xs font-extrabold rounded-md shadow-sm">
                  SAVE ₹200 (10% OFF)
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Inclusive of all taxes. Free express shipping across Punjab & India on pre-orders.
              </p>
            </div>

            {/* Product Key Points */}
            <div className="grid grid-cols-2 gap-3.5 text-xs sm:text-sm w-full mb-6">
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <span className="text-emerald-600 font-bold">✓</span> 100% Organic & Certified
              </div>
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <span className="text-emerald-600 font-bold">✓</span> Zero Side Effects
              </div>
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <span className="text-emerald-600 font-bold">✓</span> 40 Capsules (Full Course)
              </div>
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <span className="text-emerald-600 font-bold">✓</span> Supports Immune Vitality
              </div>
            </div>

            <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* CTAs */}
            <div className="space-y-3 w-full mb-5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => addToCart(product)}
                className="w-full py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base shadow-lg flex items-center justify-center gap-2.5 cursor-pointer transition"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Add To Cart — ₹1,799</span>
              </motion.button>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-md flex items-center justify-center gap-2.5 transition"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Order Direct via WhatsApp (9855755630)</span>
              </button>
            </div>

            {/* Delivery notice */}
            <div className="w-full text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-[#142318] p-3.5 rounded-xl border border-zinc-200 dark:border-emerald-900/50 flex items-center gap-2.5">
              <span className="shrink-0 text-base">🚚</span>
              <span>Direct delivery from HOPE Traders Headquarters, Malerkotla, Punjab.</span>
            </div>
          </motion.div>
        </div>

        {/* Detailed Ingredients Table */}
        <div className="pt-10 border-t border-zinc-200 dark:border-emerald-900/40">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
              Formula Composition
            </span>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
              Pure Natural Ingredients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.ingredients.map((ing, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#17281c] border border-emerald-100 dark:border-emerald-900/40 flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white text-base mb-1.5">{ing.name}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{ing.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Usage */}
        <div className="p-7 sm:p-9 rounded-3xl bg-emerald-50 dark:bg-[#17281c] border border-emerald-200 dark:border-emerald-800">
          <h2 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-emerald-950 dark:text-emerald-200 mb-3">
            Suggested Usage & Dosage
          </h2>
          <p className="text-sm text-emerald-900/80 dark:text-emerald-100/80 leading-relaxed mb-3">
            {product.dosage}
          </p>
          <p className="text-xs text-emerald-700 dark:text-emerald-300">
            *Store in a cool, dry place away from direct sunlight. Keep out of reach of small children.
          </p>
        </div>
      </div>
    </div>
  )
}
