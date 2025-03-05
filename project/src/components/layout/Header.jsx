import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useAuth } from '../../contexts/AuthContext'
import { useCart } from '../../contexts/CartContext'
import { FiSun, FiMoon, FiShoppingCart, FiMenu, FiX, FiUser } from 'react-icons/fi'

function Header() {
  const { darkMode, toggleDarkMode } = useTheme()
  const { currentUser, logout, isAdmin } = useAuth()
  const { getCartItemsCount } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || darkMode ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400">Edmund Rice Catholic Education Centre</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</Link>
            <Link to="/programs" className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Programs</Link>
            <Link to="/news" className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">News</Link>
            <Link to="/gallery" className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Gallery</Link>
            <Link to="/word-for-you" className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Word For You</Link>
            <Link to="/store" className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Store</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon />}
            </button>

            <Link to="/cart" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative">
              <FiShoppingCart />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>

            {currentUser ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <FiUser />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {isAdmin && (
                    <Link to="/admin" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                      Admin Dashboard
                    </Link>
                  )}
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="hidden md:block px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors">
                Login
              </Link>
            )}

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <nav className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link to="/" className="py-2 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</Link>
            <Link to="/programs" className="py-2 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Programs</Link>
            <Link to="/news" className="py-2 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">News</Link>
            <Link to="/gallery" className="py-2 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Gallery</Link>
            <Link to="/word-for-you" className="py-2 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Word For You</Link>
            <Link to="/store" className="py-2 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Store</Link>
            
            {!currentUser && (
              <Link to="/login" className="py-2 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Login</Link>
            )}
            
            {currentUser && (
              <>
                {isAdmin && (
                  <Link to="/admin" className="py-2 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Admin Dashboard</Link>
                )}
                <button 
                  onClick={logout}
                  className="py-2 text-left font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header