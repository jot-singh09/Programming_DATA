import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Cart from './components/Cart'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('hopetraders-theme')
    return saved === 'dark'
  })
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
      localStorage.setItem('hopetraders-theme', 'dark')
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem('hopetraders-theme', 'light')
    }
  }, [darkMode])

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id, delta) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const orderOnWhatsApp = () => {
    const items = cart
      .map(item => `${item.name} x${item.quantity} — ₹${item.price * item.quantity}`)
      .join('\n')
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const message = `Hello HOPE Traders! I'd like to order:\n\n${items}\n\nTotal: ₹${total}\n\nPlease confirm my order. Thank you!`
    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/919855755630?text=${encoded}`, '_blank')
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        onCartClick={() => setCartOpen(true)}
      />
      <ScrollToTop />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home darkMode={darkMode} addToCart={addToCart} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/products" element={<Products darkMode={darkMode} addToCart={addToCart} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer darkMode={darkMode} />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onOrder={orderOnWhatsApp}
        darkMode={darkMode}
      />
      <WhatsAppButton />
    </div>
  )
}

export default App
