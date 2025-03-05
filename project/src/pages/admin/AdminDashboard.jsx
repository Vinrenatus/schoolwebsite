import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiPackage, FiBook, FiFileText, FiImage, FiShoppingBag } from 'react-icons/fi'

function AdminDashboard() {
  const [stats, setStats] = useState({
    products: 0,
    programs: 0,
    news: 0,
    gallery: 0,
    orders: 0
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching dashboard stats
    setTimeout(() => {
      setStats({
        products: 24,
        programs: 8,
        news: 12,
        gallery: 36,
        orders: 15
      })
      setIsLoading(false)
    }, 1000)
  }, [])

  const dashboardItems = [
    {
      title: 'Products',
      count: stats.products,
      icon: FiPackage,
      link: '/admin/products',
      color: 'bg-blue-500'
    },
    {
      title: 'Programs',
      count: stats.programs,
      icon: FiBook,
      link: '/admin/programs',
      color: 'bg-green-500'
    },
    {
      title: 'News',
      count: stats.news,
      icon: FiFileText,
      link: '/admin/news',
      color: 'bg-yellow-500'
    },
    {
      title: 'Gallery',
      count: stats.gallery,
      icon: FiImage,
      link: '/admin/gallery',
      color: 'bg-purple-500'
    },
    {
      title: 'Orders',
      count: stats.orders,
      icon: FiShoppingBag,
      link: '/admin/orders',
      color: 'bg-red-500'
    }
  ]

  return (
    <div className="pt-20 pb-16">
      <div className="bg-primary-600 dark:bg-primary-700 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Admin Dashboard</h1>
          <p className="text-white text-lg">
            Manage your website content and monitor key metrics.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardItems.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center">
                  <div className={`p-4 rounded-lg ${item.color} text-white mr-4`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-3xl font-bold">{item.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard