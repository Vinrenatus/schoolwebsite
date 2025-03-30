import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FiShoppingCart, FiFilter, FiSearch, FiHeart, FiCheckCircle } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';

const StorePage = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortOption, setSortOption] = useState('default');
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Simulate API call with 12 products
    setTimeout(() => {
      const productsData = [
        {
          id: '1',
          name: 'School Uniform - Shirt',
          description: 'Official school shirt with embroidered logo. Available in various sizes.',
          price: 25.99,
          image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93',
          category: 'uniform',
          isNew: true,
        },
        {
          id: '2',
          name: 'School Uniform - Trousers',
          description: 'Official school trousers. Available in various sizes.',
          price: 29.99,
          image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a',
          category: 'uniform',
        },
        {
          id: '3',
          name: 'School Backpack',
          description: 'Durable backpack with multiple compartments and school logo.',
          price: 45.99,
          image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3',
          category: 'accessories',
        },
        {
          id: '4',
          name: 'Stationery Set',
          description: 'Complete stationery set including pens, pencils, ruler, and eraser.',
          price: 15.99,
          image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd',
          category: 'stationery',
          isNew: true,
        },
        {
          id: '5',
          name: 'School Hoodie',
          description: 'Warm and comfortable hoodie with school logo. Perfect for cooler days.',
          price: 35.99,
          image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
          category: 'clothing',
        },
        {
          id: '6',
          name: 'Water Bottle',
          description: 'Eco-friendly reusable water bottle with school logo.',
          price: 12.99,
          image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
          category: 'accessories',
        },
        {
          id: '7',
          name: 'School Notebook Set',
          description: 'Set of 5 notebooks with school logo, perfect for different subjects.',
          price: 18.99,
          image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57',
          category: 'stationery',
        },
        {
          id: '8',
          name: 'School Cap',
          description: 'Adjustable cap with embroidered school logo. One size fits all.',
          price: 14.99,
          image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b',
          category: 'clothing',
        },
        {
          id: '9',
          name: 'School Tie',
          description: 'Official school tie with patterned design. One size adjustable.',
          price: 19.99,
          image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b',
          category: 'uniform',
        },
        {
          id: '10',
          name: 'Laptop Sleeve',
          description: 'Protective sleeve for laptops up to 15 inches with school branding.',
          price: 24.99,
          image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93',
          category: 'accessories',
        },
        {
          id: '11',
          name: 'Locker Organizer',
          description: 'Magnetic organizer for lockers with school color accents.',
          price: 32.99,
          image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3',
          category: 'accessories',
        },
        {
          id: '12',
          name: 'Art Supplies Kit',
          description: 'Complete art set including paints, brushes, and sketchbook.',
          price: 45.99,
          image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd',
          category: 'stationery',
        },
      ];
      const uniqueCategories = [...new Set(productsData.map(p => p.category))];
      setProducts(productsData);
      setFilteredProducts(productsData);
      setCategories(uniqueCategories);
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    let filtered = products;
    
    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term)
      );
    }
    
    // Price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    // Sorting
    switch(sortOption) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, priceRange, sortOption, products]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleWishlist = (product) => {
    setWishlist(prev => 
      prev.some(p => p.id === product.id) 
        ? prev.filter(p => p.id !== product.id) 
        : [...prev, product]
    );
  };

  const categoryLabels = {
    uniform: 'Uniforms',
    accessories: 'Accessories',
    stationery: 'Stationery',
    clothing: 'Clothing'
  };

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-800 dark:to-secondary-700 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            School Store
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Shop for uniforms, supplies, and exclusive school merchandise
          </motion.p>
          <motion.div 
            className="flex justify-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/cart" className="px-6 py-3 bg-white text-primary-600 rounded-full font-medium hover:bg-gray-100 transition-colors">
              View Cart
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Filters & Products */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg mb-6"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FiFilter className="text-primary-500" />
            <span className="font-medium">{isFilterOpen ? 'Hide Filters' : 'Show Filters'}</span>
          </button>

          {/* Sidebar */}
          <div className={`${isFilterOpen ? 'block' : 'hidden lg:block'} w-full lg:w-1/4`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-8">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full px-4 py-3 rounded-lg transition-colors ${
                      selectedCategory === 'all' 
                        ? 'bg-primary-600 text-white' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-300'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === category 
                          ? 'bg-primary-600 text-white' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-300'
                      }`}
                    >
                      {categoryLabels[category] || category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Price Range</h3>
                <div className="flex justify-between mb-4 text-gray-600 dark:text-gray-400">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={priceRange}
                  onChange={(e) => setPriceRange([
                    parseFloat(e.target.value.split(',')[0]),
                    parseFloat(e.target.value.split(',')[1])
                  ])}
                  className="w-full accent-primary-500"
                />
              </div>

              {/* Sorting */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Sort By</h3>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(12)].map((_, i) => (
                  <Skeleton 
                    key={i} 
                    height={400} 
                    className="rounded-2xl"
                  />
                ))}
              </div>
            ) : (
              <>
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        whileHover={{ scale: 1.02 }}
                      >
                        <Link to={`/store/${product.id}`}>
                          <div className="relative">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-64 object-cover"
                            />
                            {product.isNew && (
                              <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs">
                                New
                              </span>
                            )}
                            <button 
                              className="absolute top-4 left-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full p-2 hover:bg-primary-500 hover:text-white transition-colors"
                              onClick={(e) => {
                                e.preventDefault();
                                handleWishlist(product);
                              }}
                            >
                              <FiHeart 
                                className={`${wishlist.some(p => p.id === product.id) ? 'text-red-500' : 'text-gray-500'} transition-colors`}
                              />
                            </button>
                          </div>
                        </Link>
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs ${
                              product.category === 'uniform' 
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' 
                                : product.category === 'accessories'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                : product.category === 'stationery'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                                : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                            }`}>
                              {categoryLabels[product.category] || product.category}
                            </span>
                            <FiCheckCircle 
                              className={`text-green-500 ${wishlist.some(p => p.id === product.id) ? 'opacity-100' : 'opacity-0'}`}
                            />
                          </div>
                          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{product.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-primary-600 dark:text-primary-400">${product.price.toFixed(2)}</span>
                            <button 
                              onClick={() => handleAddToCart(product)}
                              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md flex items-center gap-2 transition-colors"
                            >
                              <FiShoppingCart />
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center">
                    <p className="text-lg mb-4">No products found matching your criteria.</p>
                    <button
                      onClick={() => {
                        setSelectedCategory('all');
                        setSearchTerm('');
                        setPriceRange([0, 100]);
                      }}
                      className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <motion.div 
          className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
        >
          <FiCheckCircle className="text-xl" />
          <span>Item added to cart!</span>
        </motion.div>
      )}
    </div>
  );
};

export default StorePage;