import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiShoppingCart, FiArrowLeft, FiMinus, FiPlus } from 'react-icons/fi'
import { useCart } from '../contexts/CartContext'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const { addToCart } = useCart()

  useEffect(() => {
    // Simulate fetching data from API
    setTimeout(() => {
      const productsData = {
        '1': {
          id: '1',
          name: 'School Uniform - Shirt',
          description: 'Official school shirt with embroidered logo. Available in various sizes.',
          fullDescription: `
            <p>Our official school shirt is designed for comfort, durability, and a professional appearance. Made from a high-quality poly-cotton blend (65% polyester, 35% cotton), this shirt is both comfortable for all-day wear and easy to maintain.</p>
            
            <p>Features include: <p>Features include:</p>
            <ul>
              <li>Embroidered school logo on the left chest</li>
              <li>Breathable fabric for comfort in all seasons</li>
              <li>Reinforced stitching for durability</li>
              <li>Easy-care fabric that resists wrinkles</li>
              <li>Available in short and long sleeve options</li>
            </ul>
            
            <p>The shirt is available in sizes ranging from Child XS to Adult XXL. Please refer to our size chart to ensure the best fit. All students are required to wear the official school shirt as part of the uniform policy.</p>
            
            <p>Care instructions: Machine wash cold with like colors. Tumble dry low. Iron on low heat if necessary.</p>
          `,
          price: 25.99,
          image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'uniform',
          sizes: ['Child XS', 'Child S', 'Child M', 'Child L', 'Adult S', 'Adult M', 'Adult L', 'Adult XL', 'Adult XXL'],
          inStock: true,
          relatedProducts: ['2', '5', '8']
        },
        '2': {
          id: '2',
          name: 'School Uniform - Trousers',
          description: 'Official school trousers. Available in various sizes.',
          fullDescription: `
            <p>Our official school trousers are designed for comfort, durability, and a smart appearance. Made from a high-quality poly-viscose blend, these trousers are both comfortable for all-day wear and maintain their shape throughout the school day.</p>
            
            <p>Features include:</p>
            <ul>
              <li>Adjustable waistband for a perfect fit</li>
              <li>Reinforced knees for durability</li>
              <li>Two side pockets and one back pocket</li>
              <li>Stain-resistant fabric</li>
              <li>Available in regular and slim fit options</li>
            </ul>
            
            <p>The trousers are available in sizes ranging from Child 4 to Adult 38. Please refer to our size chart to ensure the best fit. All students are required to wear the official school trousers as part of the uniform policy.</p>
            
            <p>Care instructions: Machine wash cold with like colors. Tumble dry low. Iron on low heat if necessary.</p>
          `,
          price: 29.99,
          image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'uniform',
          sizes: ['Child 4', 'Child 6', 'Child 8', 'Child 10', 'Child 12', 'Adult 28', 'Adult 30', 'Adult 32', 'Adult 34', 'Adult 36', 'Adult 38'],
          inStock: true,
          relatedProducts: ['1', '5', '8']
        },
        '3': {
          id: '3',
          name: 'School Backpack',
          description: 'Durable backpack with multiple compartments and school logo.',
          fullDescription: `
            <p>Our official school backpack is designed to meet the needs of students of all ages. Made from durable, water-resistant material, this backpack is built to last throughout the school year and beyond.</p>
            
            <p>Features include:</p>
            <ul>
              <li>Embroidered school logo on the front pocket</li>
              <li>Padded laptop compartment (fits up to 15" laptop)</li>
              <li>Multiple compartments for organized storage</li>
              <li>Side water bottle pockets</li>
              <li>Padded, adjustable shoulder straps for comfort</li>
              <li>Reinforced bottom for durability</li>
              <li>Reflective strips for visibility and safety</li>
            </ul>
            
            <p>The backpack is available in navy blue with the school logo. Its spacious design provides ample room for textbooks, notebooks, lunch boxes, and other school essentials.</p>
            
            <p>Dimensions: 18" height x 12" width x 8" depth</p>
            
            <p>Care instructions: Spot clean with mild soap and water. Air dry.</p>
          `,
          price: 45.99,
          image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'accessories',
          inStock: true,
          relatedProducts: ['4', '6', '7']
        }
      }

      // Get the current product
      const currentProduct = productsData[id]
      
      // Get related products
      const related = []
      if (currentProduct && currentProduct.relatedProducts) {
        for (const relId of currentProduct.relatedProducts) {
          if (productsData[relId]) {
            related.push(productsData[relId])
          }
        }
      }

      setProduct(currentProduct || null)
      setRelatedProducts(related)
      setIsLoading(false)
    }, 1000)
  }, [id])

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change))
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity)
    }
  }

  if (isLoading) {
    return (
      <div className="pt-20 pb-16 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="pt-20 pb-16 container mx-auto px-4 text-center min-h-[60vh] flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The product you are looking for does not exist or has been removed.
        </p>
        <Link 
          to="/store"
          className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors inline-flex items-center mx-auto"
        >
          <FiArrowLeft className="mr-2" /> Back to Store
        </Link>
      </div>
    )
  }

  const categoryLabels = {
    uniform: 'Uniform',
    accessories: 'Accessories',
    stationery: 'Stationery',
    clothing: 'Clothing'
  }

  return (
    <div className="pt-20 pb-16">
      {/* Breadcrumb */}
      <div className="bg-gray-100 dark:bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/store" className="hover:text-primary-600 dark:hover:text-primary-400">Store</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600 dark:text-gray-400">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Image */}
            <div className="lg:w-1/2">
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium rounded-full">
                    {categoryLabels[product.category] || product.category}
                  </span>
                </div>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-6">${product.price.toFixed(2)}</p>
                
                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                </div>

                {product.sizes && (
                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Available Sizes</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button 
                          key={size}
                          className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md hover:border-primary-500 dark:hover:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-bold mb-2">Quantity</h3>
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 border border-gray-300 dark:border-gray-600 rounded-l-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FiMinus />
                    </button>
                    <input 
                      type="number" 
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-t border-b border-gray-300 dark:border-gray-600 py-2 dark:bg-gray-700"
                    />
                    <button 
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 border border-gray-300 dark:border-gray-600 rounded-r-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <button 
                    onClick={handleAddToCart}
                    className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <FiShoppingCart />
                    <span>Add to Cart</span>
                  </button>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="font-bold mb-2">Product Details</h3>
                  <div 
                    className="prose dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: product.fullDescription }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relProduct) => (
                  <div 
                    key={relProduct.id}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
                  >
                    <Link to={`/store/${relProduct.id}`}>
                      <img 
                        src={relProduct.image} 
                        alt={relProduct.name} 
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{relProduct.name}</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-bold mb-4">${relProduct.price.toFixed(2)}</p>
                      <Link 
                        to={`/store/${relProduct.id}`}
                        className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ProductDetail