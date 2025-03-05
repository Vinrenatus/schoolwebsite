import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiFilter } from 'react-icons/fi'

function ProgramsPage() {
  const [programs, setPrograms] = useState([])
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching data from API
    setTimeout(() => {
      const programsData = [
        {
          id: '1',
          title: 'Primary Education',
          description: 'Our primary education program focuses on building strong foundations in literacy, numeracy, and critical thinking. Students engage in a balanced curriculum that promotes holistic development.',
          image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'primary'
        },
        {
          id: '2',
          title: 'Secondary Education',
          description: 'The secondary education program prepares students for higher education through rigorous academic coursework, career guidance, and personal development opportunities.',
          image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'secondary'
        },
        {
          id: '3',
          title: 'Music Program',
          description: 'Our comprehensive music program offers instruction in various instruments, vocal training, music theory, and performance opportunities to develop students\' musical talents.',
          image: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'extracurricular'
        },
        {
          id: '4',
          title: 'Sports Excellence',
          description: 'The sports excellence program develops athletic abilities, teamwork, and sportsmanship through competitive and recreational sports activities.',
          image: 'https://images.unsplash.com/photo-1526232373132-0e4ee643fa17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'extracurricular'
        },
        {
          id: '5',
          title: 'Science and Technology',
          description: 'This specialized program focuses on advanced science and technology education, including laboratory work, research projects, and innovation challenges.',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'special'
        },
        {
          id: '6',
          title: 'Arts and Creativity',
          description: 'Our arts program nurtures creativity through visual arts, drama, dance, and creative writing, providing students with diverse opportunities for artistic expression.',
          image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'special'
        },
        {
          id: '7',
          title: 'Language Immersion',
          description: 'The language immersion program offers intensive language learning experiences in multiple languages, preparing students for global citizenship.',
          image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'special'
        },
        {
          id: '8',
          title: 'Leadership Development',
          description: 'This program focuses on developing leadership skills, ethical decision-making, and community service to prepare students for future leadership roles.',
          image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'extracurricular'
        },
      ]

      const uniqueCategories = [...new Set(programsData.map(program => program.category))]
      
      setPrograms(programsData)
      setFilteredPrograms(programsData)
      setCategories(uniqueCategories)
      setIsLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPrograms(programs)
    } else {
      setFilteredPrograms(programs.filter(program => program.category === selectedCategory))
    }
  }, [selectedCategory, programs])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const categoryLabels = {
    primary: 'Primary Education',
    secondary: 'Secondary Education',
    extracurricular: 'Extracurricular',
    special: 'Special Programs'
  }

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-primary-600 dark:bg-primary-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Educational Programs</h1>
          <p className="text-white text-lg mb-0 max-w-2xl mx-auto">
            Discover our diverse range of programs designed to meet the needs of every student.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="mb-10 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">All Programs</h2>
            <div className="flex items-center">
              <FiFilter className="mr-2" />
              <span className="mr-3">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {categoryLabels[category] || category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.length > 0 ? (
                filteredPrograms.map((program) => (
                  <motion.div 
                    key={program.id}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium rounded-full">
                          {categoryLabels[program.category] || program.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{program.description}</p>
                      <Link 
                        to={`/programs/${program.id}`}
                        className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center"
                      >
                        Learn More <FiArrowRight className="ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    No programs found in this category. Please try another filter.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ProgramsPage