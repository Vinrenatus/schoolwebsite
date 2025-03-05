import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Mock data for featured programs
const programs = [
  {
    id: 1,
    title: 'Science & Technology',
    description: 'Explore the wonders of science and cutting-edge technology through hands-on experiments and projects.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'STEM'
  },
  {
    id: 2,
    title: 'Arts & Humanities',
    description: 'Develop creative thinking and cultural awareness through our comprehensive arts and humanities program.',
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Arts'
  },
  {
    id: 3,
    title: 'Business Studies',
    description: 'Learn entrepreneurship, finance, and management skills to prepare for success in the business world.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Business'
  },
  {
    id: 4,
    title: 'Sports & Athletics',
    description: 'Develop physical fitness, teamwork, and leadership through our comprehensive sports programs.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Sports'
  }
]

const FeaturedPrograms = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const categories = ['All', 'STEM', 'Arts', 'Business', 'Sports']
  
  const filteredPrograms = activeCategory === 'All' 
    ? programs 
    : programs.filter(program => program.category === activeCategory)
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="section-title">Our Educational Programs</h2>
        <p className="section-subtitle">Discover the diverse range of programs we offer to nurture every student's potential</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPrograms.map(program => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="card"
            >
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full mb-2">
                  {program.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{program.description}</p>
                <Link 
                  to={`/programs/${program.id}`}
                  className="inline-block text-primary-600 dark:text-primary-400 font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/programs" className="btn btn-primary">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPrograms