import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiFilter, FiSearch } from 'react-icons/fi'

// Mock data for store products
const products = [
  {
    id: 1,
    name: 'School Uniform - Shirt',
    description: 'Official school shirt with embroidered logo. Available in various sizes.',
    price: 25.99,
    image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Uniform'
  },
  {
    id: 2,
    name: 'School Uniform - Trousers',
    description: 'Official school trousers. Available in various sizes.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Uniform'
  },
  {
    id: 3,
    name: 'School Backpack',
    description: 'Durable backpack with multiple compartments and school logo.',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories'
  },
  {
    id: 4,
    name: 'Stationery Set',
    description: 'Complete stationery set including pens, pencils, ruler, and eraser.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Stationery'
  },
  {
    id: 5,
    name: 'School Hoodie',
    description: 'Warm and comfortable hoodie with school logo. Perfect for cooler days.',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Clothing'
  },
  {
    id: 6,
    name: 'Water Bottle',
    description: 'Eco-friendly reusable water bottle with school logo.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories'
  },
  {
    id: 7,
    name: 'School Notebook Set',
    description: 'Set of 5 notebooks with school logo, perfect for different subjects.',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Stationery'
  },
  {
    id: 8,
    name: 'School Cap',
    description: 'Adjustable cap with embroidered school logo. One size fits all.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Clothing'
  }
]

const Store = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [cart, setCart] = useState([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  
  // Extract unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))]
  
  // Filter products based on category and search term
  useEffect(() => {
    let result = products
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(product => product.category === activeCategory)
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      )
    }
    
    setFilteredProducts(result)
  }, [activeCategory, searchTerm])
  
  // Add to cart function
  const addToCart = (product) => {
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === product.id)
    
    if (existingItem) {
      // Increase quantity if already in cart
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ))
    } else {
      // Add new item to cart
      setCart([...cart, { ...product, quantity: 1 }])
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]))
  }
  
  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])
  
  return (
    <div className="pt-20">
      <div className="bg-primary-700 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">School Store</h1>
          <p className="text-xl max-w-3xl">
            Shop for school uniforms, supplies, and merchandise to show your school spirit.
          </p>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Mobile filter toggle */}
          <button
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FiFilter />
            <span>{isFilterOpen ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
          
          {/* Sidebar filters - desktop always visible, mobile toggleable */}
          <div className={`w-full md:w-64 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Search</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/cart" className="btn btn-primary w-full flex items-center justify-center gap-2">
                  <FiShoppingCart />
                  <span>View Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="card"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full mb-2">
                        {product.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                        <button 
                          onClick={() => addToCart(product)}
                          className="btn btn-primary flex items-center gap-2"
                        >
                          <FiShoppingCart />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store