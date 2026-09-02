import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hello HOPE Traders! My name is ${formData.name}.%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0A%0AQuery: ${formData.message}`
    window.open(`https://wa.me/919855755630?text=${message}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="py-14 sm:py-20 bg-white dark:bg-[#0f1a12] text-zinc-800 dark:text-zinc-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
            Get In Touch
          </span>
          <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white leading-tight mb-4">
            Contact HOPE Traders
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Have questions about HOPE Wellness capsules, bulk welfare distribution, or want to visit our Malerkotla office? We'd love to connect.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 rounded-2xl bg-zinc-50 dark:bg-[#17281c] border border-emerald-100 dark:border-emerald-900/40 text-center flex flex-col items-center justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center text-emerald-700 dark:text-emerald-300 mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-1">Call & WhatsApp</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">Direct order & customer support</p>
            </div>
            <div className="space-y-1">
              <a
                href="tel:+919855755630"
                className="block text-lg font-extrabold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                +91 9855755630
              </a>
              <a
                href="https://wa.me/919855755630"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-semibold hover:underline"
              >
                <span>Chat on WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Card 2: Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-7 rounded-2xl bg-zinc-50 dark:bg-[#17281c] border border-emerald-100 dark:border-emerald-900/40 text-center flex flex-col items-center justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center text-emerald-700 dark:text-emerald-300 mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-1">Email Address</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">For welfare partnerships & enquiries</p>
            </div>
            <a
              href="mailto:info@hopetraders.com"
              className="block text-base sm:text-lg font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              info@hopetraders.com
            </a>
          </motion.div>

          {/* Card 3: Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-7 rounded-2xl bg-zinc-50 dark:bg-[#17281c] border border-emerald-100 dark:border-emerald-900/40 text-center flex flex-col items-center justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center text-emerald-700 dark:text-emerald-300 mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-1">Our Address</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">Headquarters</p>
            </div>
            <p className="text-base font-bold text-emerald-700 dark:text-emerald-400">
              Malerkotla, Punjab, India
            </p>
          </motion.div>
        </div>

        {/* Map & Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 p-7 sm:p-9 rounded-3xl bg-zinc-50 dark:bg-[#17281c] border border-emerald-100 dark:border-emerald-900/50 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                Fill the form below and it will directly route to our WhatsApp team for quick resolution.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-zinc-700 dark:text-zinc-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0f1a12] border border-zinc-300 dark:border-emerald-900/80 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-zinc-700 dark:text-zinc-300">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9855755630"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0f1a12] border border-zinc-300 dark:border-emerald-900/80 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-zinc-700 dark:text-zinc-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0f1a12] border border-zinc-300 dark:border-emerald-900/80 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-zinc-700 dark:text-zinc-300">
                    Message / Question
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Inquire about dosage, order tracking or community welfare..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0f1a12] border border-zinc-300 dark:border-emerald-900/80 focus:outline-none focus:border-emerald-500 text-sm leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition cursor-pointer mt-2"
                >
                  Send Inquiry via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right: Embedded Interactive Map of Malerkotla, Punjab */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col space-y-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-0.5">
                  Location Map — Malerkotla, Punjab
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  HOPE Traders Headquarters & Distribution Center
                </p>
              </div>
              <span className="px-3.5 py-1.5 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold rounded-full">
                Punjab, India
              </span>
            </div>

            <div className="flex-1 min-h-[420px] rounded-3xl overflow-hidden border-2 border-emerald-100 dark:border-emerald-900/50 shadow-xl relative bg-zinc-100 dark:bg-zinc-800">
              <iframe
                title="HOPE Traders Malerkotla Punjab Location"
                src="https://maps.google.com/maps?q=Malerkotla%2C%20Punjab&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[420px] border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
