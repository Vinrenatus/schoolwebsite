import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiTrash2, FiPlus, FiMinus, FiArrowLeft, FiShoppingBag } from 'react-icons/fi'

const Cart = () => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  
  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])
  
  // Calculate total whenever cart changes
  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    setTotal(newTotal)
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  
  // Update item quantity
  const updateQuantity = (id, change) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change)
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }
  
  // Remove item from cart
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }
  
  // Clear entire cart
  const clearCart = () => {
    setCart([])
    localStorage.removeItem('cart')
  }
  
  // Proceed to checkout
  const proceedToCheckout = () => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    
    if (isLoggedIn) {
      navigate('/checkout')
    } else {
      // Redirect to login with return URL
      navigate('/login?redirect=checkout')
    }
  }
  
  return (
    <div className="pt-20">
      <div className="bg-primary-700 text-white py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Your Shopping Cart</h1>
          <p className="text-lg">Review your items before checkout</p>
        </div>
      </div>
      
      <div className="container py-12">
        {cart.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FiShoppingBag className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/store" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between">
                  <h2 className="text-xl font-bold">Shopping Cart ({cart.length} items)</h2>
                  <button 
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-800 dark:hover:text-red-400 flex items-center gap-1"
                  >
                    <FiTrash2 />
                    <span>Clear Cart</span>
                  </button>
                </div>
                
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {cart.map(item => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">{item.category}</p>
                        <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-800 dark:hover:text-red-400"
                          aria-label="Remove item"
                        >
                          <FiTrash2 />
                        </button>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                            aria-label="Decrease quantity"
                          >
                            <FiMinus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                            aria-label="Increase quantity"
                          >
                            <FiPlus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Link to="/store" className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
                  <FiArrowLeft />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
            
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <button 
                  onClick={proceedToCheckout}
                  className="btn btn-primary w-full"
                >
                  Proceed to Checkout
                </button>
                
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <p>By proceeding to checkout, you agree to our terms and conditions.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart