import { motion, AnimatePresence } from 'framer-motion'

export default function Cart({ isOpen, onClose, items, onRemove, onUpdateQuantity, onOrder, darkMode }) {
  const totalOriginal = items.reduce((sum, i) => sum + 1999 * i.quantity, 0)
  const totalDiscounted = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const savings = totalOriginal - totalDiscounted

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-white dark:bg-[#152319] shadow-2xl flex flex-col justify-between text-zinc-800 dark:text-zinc-100"
            >
              {/* Header */}
              <div className="p-6 border-b border-zinc-200 dark:border-emerald-900/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <h2 className="text-xl font-bold font-['Playfair_Display']">Your Wellness Cart</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-emerald-900/40 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition"
                  aria-label="Close cart"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Your cart is empty</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Explore our 100% natural formula and start your journey towards natural wellness!
                    </p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-[#1a2e1f] border border-emerald-100 dark:border-emerald-900/40 items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl border border-emerald-200 dark:border-emerald-800"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base truncate">{item.name}</h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{item.subtitle}</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-emerald-700 dark:text-emerald-400 font-bold text-lg">₹{item.price}</span>
                          <span className="text-xs text-zinc-400 line-through">₹{item.originalPrice}</span>
                        </div>

                        {/* Quantity Controller */}
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center border border-zinc-300 dark:border-emerald-800 rounded-lg overflow-hidden bg-white dark:bg-[#0f1a12]">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="px-2.5 py-0.5 hover:bg-zinc-100 dark:hover:bg-emerald-950 font-bold text-sm"
                            >
                              -
                            </button>
                            <span className="px-2 font-medium text-sm">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="px-2.5 py-0.5 hover:bg-zinc-100 dark:hover:bg-emerald-950 font-bold text-sm"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="text-xs text-red-500 hover:text-red-600 transition"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Summary Footer */}
              {items.length > 0 && (
                <div className="p-6 bg-zinc-50 dark:bg-[#111e15] border-t border-zinc-200 dark:border-emerald-900/60 space-y-4">
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                      <span>Original Price:</span>
                      <span className="line-through">₹{totalOriginal}</span>
                    </div>
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                      <span>Discount Savings:</span>
                      <span>-₹{savings}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t border-zinc-200 dark:border-emerald-900/40 pt-2">
                      <span>Total Amount:</span>
                      <span className="text-emerald-700 dark:text-emerald-300">₹{totalDiscounted}</span>
                    </div>
                  </div>

                  {/* WhatsApp Order Button */}
                  <button
                    onClick={onOrder}
                    className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Order directly on WhatsApp (9855755630)</span>
                  </button>
                  <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
                    🔒 Cash on Delivery & Fast Delivery across Punjab and India
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
