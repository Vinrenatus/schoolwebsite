import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiFilter, FiSearch } from 'react-icons/fi'
import { useCart } from '../contexts/CartContext'

function StorePage() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { addToCart } = useCart()

  useEffect(() => {
    // Simulate fetching data from API
    setTimeout(() => {
      const productsData = [
        {
          id: '1',
          name: 'School Uniform - Shirt',
          description: 'Official school shirt with embroidered logo. Available in various sizes.',
          price: 25.99,
          image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'uniform'
        },
        {
          id: '2',
          name: 'School Uniform - Trousers',
          description: 'Official school trousers. Available in various sizes.',
          price: 29.99,
          image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'uniform'
        },
        {
          id: '3',
          name: 'School Backpack',
          description: 'Durable backpack with multiple compartments and school logo.',
          price: 45.99,
          image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'accessories'
        },
        {
          id: '4',
          name: 'Stationery Set',
          description: 'Complete stationery set including pens, pencils, ruler, and eraser.',
          price: 15.99,
          image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'stationery'
        },
        {
          id: '5',
          name: 'School Hoodie',
          description: 'Warm and comfortable hoodie with school logo. Perfect for cooler days.',
          price: 35.99,
          image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'clothing'
        },
        {
          id: '6',
          name: 'Water Bottle',
          description: 'Eco-friendly reusable water bottle with school logo.',
          price: 12.99,
          image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'accessories'
        },
        {
          id: '7',
          name: 'School Notebook Set',
          description: 'Set of 5 notebooks with school logo, perfect for different subjects.',
          price: 18.99,
          image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'stationery'
        },
        {
          id: '8',
          name: 'School Cap',
          description: 'Adjustable cap with embroidered school logo. One size fits all.',
          price: 14.99,
          image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'clothing'
        },
      ]

      const uniqueCategories = [...new Set(productsData.map(product => product.category))]
      
      setProducts(productsData)
      setFilteredProducts(productsData)
      setCategories(uniqueCategories)
      setIsLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let result = products

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory)
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
  }, [selectedCategory, searchTerm, products])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  const categoryLabels = {
    uniform: 'Uniform',
    accessories: 'Accessories',
    stationery: 'Stationery',
    clothing: 'Clothing'
  }

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-primary-600 dark:bg-primary-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">School Store</h1>
          <p className="text-white text-lg mb-0 max-w-2xl mx-auto">
            Shop for school uniforms, supplies, and merchandise.
          </p>
        </div>
      </section>

      {/* Store Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile filter toggle */}
            <button
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <FiFilter />
              <span>{isFilterOpen ? 'Hide Filters' : 'Show Filters'}</span>
            </button>

            {/* Sidebar */}
            <div className={`w-full lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Categories</h2>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-primary-600 text-white'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary-600 text-white'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {categoryLabels[category] || category}
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
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {isLoading ? (
                <div className="flex justify-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
                </div>
              ) : (
                <>
                  {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProducts.map((product) => (
                        <motion.div 
                          key={product.id}
                          className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <Link to={`/store/${product.id}`}>
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-48 object-cover"
                            />
                          </Link>
                          <div className="p-6">
                            <div className="mb-3">
                              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium rounded-full">
                                {categoryLabels[product.category] || product.category}
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                              <button 
                                onClick={() => handleAddToCart(product)}
                                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors flex items-center gap-2"
                              >
                                <FiShoppingCart />
                                <span>Add to Cart</span>
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
                      <p className="text-lg mb-4">No products found matching your criteria.</p>
                      <button
                        onClick={() => {
                          setSelectedCategory('all')
                          setSearchTerm('')
                        }}
                        className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
                      >
                        Reset Filters
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StorePage