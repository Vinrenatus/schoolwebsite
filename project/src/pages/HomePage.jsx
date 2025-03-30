import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import { FiArrowRight, FiBook, FiCalendar, FiUsers, FiAward } from 'react-icons/fi'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Updated programs data with all required programs
const programsData = [
  {
    id: '1',
    title: 'CBC Primary Education',
    description: 'Comprehensive primary education program following the Kenyan Competency-Based Curriculum framework, preparing students for future academic success.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'primary'
  },
  {
    id: '2',
    title: 'CBC Junior Secondary Education',
    description: 'Rigorous junior secondary program aligned with Kenya\'s CBC structure, building foundational skills for senior secondary education.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'junior-secondary'
  },
  {
    id: '3',
    title: '8-4-4 Secondary School',
    description: 'Traditional 8-4-4 system preparation for national examinations, combining academic excellence with character development.',
    image: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'secondary'
  },
  {
    id: '4',
    title: 'Computer College Packages and Design',
    description: 'ICT training programs focusing on software packages, graphic design, and computer applications relevant to Kenya\'s job market.',
    image: 'https://images.unsplash.com/photo-1526232373132-0e4ee643fa17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'vocational'
  },
  {
    id: '5',
    title: 'Woodwork and Carpentry',
    description: 'Practical skills development in woodworking, carpentry, and furniture making following Kenyan technical education standards.',
    image: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'vocational'
  },
  {
    id: '6',
    title: 'Dairy Farming',
    description: 'Agricultural training program focusing on dairy cattle management, milk production, and sustainable farming practices relevant to Kenyan agriculture.',
    image: 'https://images.unsplash.com/photo-1526232373132-0e4ee643fa17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'agriculture'
  },
  {
    id: '7',
    title: 'Beauty and Cosmetics',
    description: 'Professional training in beauty therapy, hair styling, makeup artistry, and salon management following Kenya\'s vocational education standards.',
    image: 'https://images.unsplash.com/photo-1526232373132-0e4ee643fa17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'vocational'
  },
  {
    id: '8',
    title: 'Tailoring',
    description: 'Skill development in garment construction, fabric technology, and fashion design preparing students for Kenya\'s textile industry.',
    image: 'https://images.unsplash.com/photo-1526232373132-0e4ee643fa17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'vocational'
  },
  {
    id: '9',
    title: 'Extracurricular Activities',
    description: 'Comprehensive co-curricular programs including sports, music, drama, and clubs that complement academic learning and personal development.',
    image: 'https://images.unsplash.com/photo-1526232373132-0e4ee643fa17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'extracurricular'
  }
]

// News data
const newsData = [
  {
    id: '1',
    title: 'School Wins National Academic Competition',
    excerpt: 'Our students brought home the gold in the national academic challenge.',
    date: '2025-03-15',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '2',
    title: 'New Science Lab Opening Next Month',
    excerpt: 'State-of-the-art science facilities will be available to students starting next month.',
    date: '2025-03-10',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '3',
    title: 'Annual Sports Day Scheduled for April',
    excerpt: 'Mark your calendars for our biggest sporting event of the year.',
    date: '2025-03-05',
    image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
]

// Hero slider settings
const heroSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true
}

// Hero slides data
const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Welcome to Our School',
    subtitle: 'Nurturing Minds, Building Futures'
  },
  {
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Excellence in Education',
    subtitle: 'Providing Quality Education Since 1990'
  },
  {
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    title: 'Discover Your Potential',
    subtitle: 'Comprehensive Programs for All Students'
  }
]

function HomePage() {
  const [programs, setPrograms] = useState([])
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch with timeout
    setTimeout(() => {
      setPrograms(programsData)
      setNews(newsData)
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative">
        <Slider {...heroSliderSettings}>
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative h-screen">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
              <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl text-white mb-8">{slide.subtitle}</p>
                <Link 
                  to="/programs" 
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors flex items-center"
                >
                  Explore Our Programs <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our School</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide a nurturing environment where students can excel academically, socially, and personally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
                <FiBook />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our curriculum is designed to provide comprehensive education that prepares students for future success.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
                <FiUsers />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Faculty</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our teachers are highly qualified professionals dedicated to nurturing each student's potential.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
                <FiCalendar />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our campus features state-of-the-art facilities that enhance the learning experience.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">
                <FiAward />
              </div>
              <h3 className="text-xl font-semibold mb-2">Holistic Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We focus on developing well-rounded individuals through academics, sports, arts, and character building.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Educational Programs</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our diverse range of programs designed to meet the needs of every student.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <motion.div 
                  key={program.id}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                    <Link 
                      to={`/programs/${program.id}`}
                      className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center"
                    >
                      Learn More <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link 
              to="/programs"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors inline-flex items-center"
            >
              View All Programs <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Updates</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay informed about the latest happenings and events at our school.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((item) => (
                <motion.div 
                  key={item.id}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.excerpt}</p>
                    <Link 
                      to={`/news/${item.id}`}
                      className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center"
                    >
                      Read More <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link 
              to="/news"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors inline-flex items-center"
            >
              View All News <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 dark:bg-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Our School?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards providing your child with a quality education that will prepare them for a successful future.
          </p>
          <a 
            href="#" 
            className="px-6 py-3 bg-white text-primary-600 hover:bg-gray-100 rounded-md transition-colors inline-flex items-center font-medium"
          >
            Apply Now <FiArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default HomePage