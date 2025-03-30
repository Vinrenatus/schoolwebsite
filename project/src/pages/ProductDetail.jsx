import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FiShoppingCart, FiArrowLeft, FiMinus, FiPlus, FiHeart } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate API call with 12 products
    setTimeout(() => {
      const productsData = {
        '1': {
          id: '1',
          name: 'School Uniform - Shirt',
          description: 'Official school shirt with embroidered logo. Available in various sizes.',
          fullDescription: `
            <p>Our official school shirt is designed for comfort and durability. Made from 65% polyester and 35% cotton blend.</p>
            <ul>
              <li>Embroidered school logo on left chest</li>
              <li>Available in short and long sleeves</li>
              <li>Easy-care fabric</li>
              <li>Reinforced stitching</li>
            </ul>
          `,
          price: 25.99,
          image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93',
          category: 'uniform',
          sizes: ['Child XS', 'Child S', 'Child M', 'Child L', 'Adult S', 'Adult M', 'Adult L', 'Adult XL', 'Adult XXL'],
          inStock: true,
          relatedProducts: ['2', '5', '8'],
        },
        '2': {
          id: '2',
          name: 'School Uniform - Trousers',
          description: 'Official school trousers. Available in various sizes.',
          fullDescription: `
            <p>Official school trousers made from durable poly-viscose blend.</p>
            <ul>
              <li>Adjustable waistband</li>
              <li>Stain-resistant fabric</li>
              <li>Available in regular and slim fit</li>
            </ul>
          `,
          price: 29.99,
          image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a',
          category: 'uniform',
          sizes: ['Child 4', 'Child 6', 'Child 8', 'Child 10', 'Child 12', 'Adult 28', 'Adult 30', 'Adult 32', 'Adult 34', 'Adult 36', 'Adult 38'],
          inStock: true,
          relatedProducts: ['1', '9', '5'],
        },
        '3': {
          id: '3',
          name: 'School Backpack',
          description: 'Durable backpack with multiple compartments and school logo.',
          fullDescription: `
            <p>Spacious backpack with padded laptop compartment (up to 15").</p>
            <ul>
              <li>Water-resistant material</li>
              <li>Reflective safety strips</li>
              <li>Multiple organizational pockets</li>
            </ul>
          `,
          price: 45.99,
          image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3',
          category: 'accessories',
          sizes: ['One Size'],
          inStock: true,
          relatedProducts: ['4', '6', '10'],
        },
        '4': {
          id: '4',
          name: 'Stationery Set',
          description: 'Complete stationery set including pens, pencils, ruler, and eraser.',
          fullDescription: `
            <p>Essential school supplies in one package.</p>
            <ul>
              <li>5 pens (blue, black, red)</li>
              <li>6 pencils</li>
              <li>15cm ruler</li>
              <li>Eraser and sharpener</li>
            </ul>
          `,
          price: 15.99,
          image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd',
          category: 'stationery',
          sizes: ['Standard'],
          inStock: true,
          relatedProducts: ['7', '11', '3'],
        },
        '5': {
          id: '5',
          name: 'School Hoodie',
          description: 'Warm and comfortable hoodie with school logo. Perfect for cooler days.',
          fullDescription: `
            <p>Lightweight hoodie with kangaroo pocket and drawstring hood.</p>
            <ul>
              <li>80% cotton, 20% polyester</li>
              <li>Embroidered logo on chest</li>
              <li>Available in navy and gray</li>
            </ul>
          `,
          price: 35.99,
          image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
          category: 'clothing',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          inStock: true,
          relatedProducts: ['8', '2', '12'],
        },
        '6': {
          id: '6',
          name: 'Water Bottle',
          description: 'Eco-friendly reusable water bottle with school logo.',
          fullDescription: `
            <p>32oz stainless steel bottle with leak-proof lid.</p>
            <ul>
              <li>Double-wall insulation</li>
              <li>Carabiner clip attachment</li>
              <li>Dishwasher safe</li>
            </ul>
          `,
          price: 12.99,
          image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
          category: 'accessories',
          sizes: ['500ml', '750ml'],
          inStock: true,
          relatedProducts: ['3', '10', '11'],
        },
        '7': {
          id: '7',
          name: 'School Notebook Set',
          description: 'Set of 5 notebooks with school logo, perfect for different subjects.',
          fullDescription: `
            <p>5-subject notebook set with color-coded covers.</p>
            <ul>
              <li>80 pages per notebook</li>
              <li>Sturdy spiral binding</li>
              <li>Includes ruler bookmark</li>
            </ul>
          `,
          price: 18.99,
          image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57',
          category: 'stationery',
          sizes: ['A5'],
          inStock: true,
          relatedProducts: ['4', '12', '6'],
        },
        '8': {
          id: '8',
          name: 'School Cap',
          description: 'Adjustable cap with embroidered school logo. One size fits all.',
          fullDescription: `
            <p>Classic baseball cap with adjustable strap.</p>
            <ul>
              <li>Breathable fabric</li>
              <li>UV protection</li>
              <li>Embroidered logo on front</li>
            </ul>
          `,
          price: 14.99,
          image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b',
          category: 'clothing',
          sizes: ['One Size'],
          inStock: true,
          relatedProducts: ['5', '12', '2'],
        },
        '9': {
          id: '9',
          name: 'School Tie',
          description: 'Official school tie with patterned design.',
          fullDescription: `
            <p>100% silk tie with school colors and crest pattern.</p>
            <ul>
              <li>Adjustable length</li>
              <li>Easy-care fabric</li>
              <li>Matching pocket square available</li>
            </ul>
          `,
          price: 19.99,
          image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b',
          category: 'uniform',
          sizes: ['One Size'],
          inStock: true,
          relatedProducts: ['1', '2', '5'],
        },
        '10': {
          id: '10',
          name: 'Laptop Sleeve',
          description: 'Protective sleeve for laptops up to 15 inches.',
          fullDescription: `
            <p>Padded sleeve with microfiber interior lining.</p>
            <ul>
              <li>Zippered closure</li>
              <li>External document pocket</li>
              <li>Water-resistant exterior</li>
            </ul>
          `,
          price: 24.99,
          image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3',
          category: 'accessories',
          sizes: ['13"', '15"'],
          inStock: true,
          relatedProducts: ['3', '6', '11'],
        },
        '11': {
          id: '11',
          name: 'Locker Organizer',
          description: 'Magnetic organizer for lockers with school color accents.',
          fullDescription: `
            <p>Three-tier magnetic organizer with dry-erase surface.</p>
            <ul>
              <li>Includes 3 storage bins</li>
              <li>Removable magnetic hooks</li>
              <li>Customizable color accents</li>
            </ul>
          `,
          price: 32.99,
          image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3',
          category: 'accessories',
          sizes: ['Standard'],
          inStock: true,
          relatedProducts: ['3', '10', '7'],
        },
        '12': {
          id: '12',
          name: 'Art Supplies Kit',
          description: 'Complete art set including paints, brushes, and sketchbook.',
          fullDescription: `
            <p>Comprehensive art kit for creative students.</p>
            <ul>
              <li>12 acrylic paints</li>
              <li>5 professional brushes</li>
              <li>40-page sketchbook</li>
              <li>Palette and cleaning cloth</li>
            </ul>
          `,
          price: 45.99,
          image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd',
          category: 'stationery',
          sizes: ['Standard'],
          inStock: true,
          relatedProducts: ['4', '7', '11'],
        },
      };

      const currentProduct = productsData[id];
      const related = currentProduct?.relatedProducts?.map(relId => productsData[relId]) || [];
      
      setProduct(currentProduct || null);
      setRelatedProducts(related);
      setIsLoading(false);
    }, 1000);
  }, [id]);

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity, selectedSize });
    }
  };

  const categoryLabels = {
    uniform: 'Uniforms',
    accessories: 'Accessories',
    stationery: 'Stationery',
    clothing: 'Clothing'
  };

  return (
    <div className="pt-20 pb-16">
      {/* Breadcrumb */}
      <div className="bg-gray-100 dark:bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm">
            <Link to="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/store" className="text-primary-600 dark:text-primary-400 hover:underline">Store</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600 dark:text-gray-300">{product?.name || 'Loading...'}</span>
          </nav>
        </div>
      </div>

      {isLoading ? (
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Skeleton height={500} className="rounded-2xl" />
            <div className="space-y-4">
              <Skeleton height={40} count={3} className="rounded-lg" />
              <Skeleton height={60} className="rounded-lg" />
            </div>
          </div>
        </div>
      ) : product ? (
        <motion.section 
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Gallery */}
            <div className="lg:w-full">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-2xl shadow-md"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Product Details */}
            <div className="lg:w-full space-y-6">
              <motion.h1 
                className="text-3xl font-bold text-gray-900 dark:text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {product.name}
              </motion.h1>

              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
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
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">${product.price.toFixed(2)}</span>
              </motion.div>

              <motion.div 
                className="prose dark:prose-invert max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                dangerouslySetInnerHTML={{ __html: product.fullDescription }}
              />

              {product.sizes && (
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <h3 className="text-lg font-semibold">Available Sizes</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-md border transition-colors ${
                          selectedSize === size 
                            ? 'border-primary-500 bg-primary-100 dark:bg-primary-900'
                            : 'border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div 
                className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FiMinus className="text-primary-600 dark:text-primary-400" />
                  </button>
                  <input 
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border border-gray-300 dark:border-gray-600 rounded-lg py-2 dark:bg-gray-700"
                  />
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FiPlus className="text-primary-600 dark:text-primary-400" />
                  </button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <FiShoppingCart className="text-xl" />
                  <span>Add to Cart</span>
                </button>
              </motion.div>

              <motion.div 
                className="border-t border-gray-200 dark:border-gray-700 pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <h3 className="text-lg font-semibold mb-4">Product Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-400">Category</p>
                    <p className="font-medium">{categoryLabels[product.category]}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-400">Availability</p>
                    <p className={`font-medium ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                  </div>
                  {product.sizes && (
                    <div className="space-y-2 col-span-2">
                      <p className="text-gray-600 dark:text-gray-400">Sizes Available</p>
                      <p className="font-medium">{product.sizes.join(', ')}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <h2 className="text-2xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relProduct) => (
                  <motion.div
                    key={relProduct.id}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Link to={`/store/${relProduct.id}`}>
                      <img 
                        src={relProduct.image} 
                        alt={relProduct.name} 
                        className="w-full h-64 object-cover"
                      />
                    </Link>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{relProduct.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{relProduct.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary-600 dark:text-primary-400">${relProduct.price.toFixed(2)}</span>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(relProduct);
                          }}
                          className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                        >
                          <FiHeart className="text-xl" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.section>
      ) : (
        <div className="container mx-auto px-4 py-12 text-center min-h-[60vh] flex flex-col justify-center">
          <motion.h2 
            className="text-2xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Product Not Found
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The product you're looking for doesn't exist or has been removed.
          </motion.p>
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/store"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center gap-2"
            >
              <FiArrowLeft />
              Back to Store
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;