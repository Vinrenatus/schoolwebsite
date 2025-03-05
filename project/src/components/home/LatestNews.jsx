import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Mock data for latest news
const newsItems = [
  {
    id: 1,
    title: 'Annual Science Fair Winners Announced',
    excerpt: 'Congratulations to all participants in this year\'s Science Fair. The creativity and innovation displayed were truly impressive.',
    date: '2025-03-15',
    image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'New Sports Facilities Opening Next Month',
    excerpt: 'We are excited to announce the completion of our state-of-the-art sports complex, featuring an Olympic-sized swimming pool and indoor courts.',
    date: '2025-03-10',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'International Exchange Program Applications Open',
    excerpt: 'Students interested in our exchange program with partner schools in Europe and Asia can now submit their applications for the upcoming academic year.',
    date: '2025-03-05',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
]

const LatestNews = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="section-title">Latest News & Updates</h2>
        <p className="section-subtitle">Stay informed about the latest happenings and announcements from our school</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.excerpt}</p>
                <Link 
                  to={`/news/${item.id}`}
                  className="inline-block text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/news" className="btn btn-primary">
            View All News
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestNews