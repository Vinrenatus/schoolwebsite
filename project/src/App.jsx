import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ProgramsPage from './pages/ProgramsPage'
import ProgramDetail from './pages/ProgramDetail'
import NewsPage from './pages/NewsPage'
import NewsDetail from './pages/NewsDetail'
import GalleryPage from './pages/GalleryPage'
import WordForYouPage from './pages/WordForYouPage'
import StorePage from './pages/StorePage'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminProducts from './pages/admin/AdminProducts'
import AdminPrograms from './pages/admin/AdminPrograms'
import AdminNews from './pages/admin/AdminNews'
import AdminGallery from './pages/admin/AdminGallery'
import AdminOrders from './pages/admin/AdminOrders'
import ProtectedRoute from './components/auth/ProtectedRoute'
import { useTheme } from './contexts/ThemeContext'
import ScrollToTop from './components/utils/ScrollToTop'

function App() {
  const { darkMode } = useTheme()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial data loading
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:id" element={<ProgramDetail />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/word-for-you" element={<WordForYouPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/store/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/products" element={<ProtectedRoute role="admin"><AdminProducts /></ProtectedRoute>} />
            <Route path="/admin/programs" element={<ProtectedRoute role="admin"><AdminPrograms /></ProtectedRoute>} />
            <Route path="/admin/news" element={<ProtectedRoute role="admin"><AdminNews /></ProtectedRoute>} />
            <Route path="/admin/gallery" element={<ProtectedRoute role="admin"><AdminGallery /></ProtectedRoute>} />
            <Route path="/admin/orders" element={<ProtectedRoute role="admin"><AdminOrders /></ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App