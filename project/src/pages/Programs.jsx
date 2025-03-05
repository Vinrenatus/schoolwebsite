import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Mock data for programs
const allPrograms = [
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
  },
  {
    id: 5,
    title: 'Mathematics',
    description: 'Build strong analytical and problem-solving skills through our advanced mathematics curriculum.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'STEM'
  },
  {
    id: 6,
    title: 'Language & Literature',
    description: 'Develop strong communication skills and cultural understanding through our language programs.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Arts'
  },
  {
    id: 7,
    title: 'Computer Science',
    description: 'Learn programming, algorithms, and computational thinking to prepare for the digital future.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'STEM'
  },
  {
    id: 8,
    title: 'Music & Performing Arts',
    description: 'Develop artistic talents and performance skills through our comprehensive music and drama programs.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Arts'
  }
]

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredPrograms, setFilteredPrograms] = useState(allPrograms)
  const [searchTerm, setSearchTerm] = useState('')
  
  const categories = ['All', 'STEM', 'Arts', 'Business', 'Sports']
  
  useEffect(() => {
    let result = allPrograms
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(program => program.category === activeCategory)
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(program => 
        program.title.toLowerCase().includes(term) || 
        program.description.toLowerCase().includes(term)
      )
    }
    
    setFilteredPrograms(result)
  }, [activeCategory, searchTerm])
  
  return (
    <div className="pt-20">
      <div className="bg-primary-700 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Educational Programs</h1>
          <p className="text-xl max-w-3xl">
            Discover the diverse range of programs we offer to nurture every student's potential and prepare them for future success.
          </p>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
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
          
          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Search programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-700"
            />
          </div>
        </div>
        
        {filteredPrograms.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No programs found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
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
        )}
      </div>
    </div>
  )
}

export default Programs