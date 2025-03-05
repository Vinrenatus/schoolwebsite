import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Modal from 'react-modal'
import { FiX, FiChevronLeft, FiChevronRight, FiFilter } from 'react-icons/fi'

// Set the app element for accessibility
Modal.setAppElement('#root')

function GalleryPage() {
  const [photos, setPhotos] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredPhotos, setFilteredPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState(null)

  useEffect(() => {
    // Simulate fetching data from API
    setTimeout(() => {
      const photosData = [
        {
          id: '1',
          title: 'Science Fair Projects',
          description: 'Students showcasing their innovative science projects at the annual Science Fair.',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'academic'
        },
        {
          id: '2',
          title: 'Basketball Championship',
          description: 'Our basketball team celebrating their victory in the regional championship.',
          image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'sports'
        },
        {
          id: '3',
          title: 'Art Exhibition',
          description: 'Student artwork on display at the annual art exhibition.',
          image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'arts'
        },
        {
          id: '4',
          title: 'Graduation Ceremony',
          description: 'Proud graduates at the commencement ceremony.',
          image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'events'
        },
        {
          id: '5',
          title: 'Robotics Competition',
          description: 'Our robotics team demonstrating their creation at the national competition.',
          image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'academic'
        },
        {
          id: '6',
          title: 'Music Concert',
          description: 'Students performing at the spring music concert.',
          image: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'arts'
        },
        {
          id: '7',
          title: 'Field Trip to Museum',
          description: 'Students exploring exhibits at the Natural History Museum.',
          image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'field-trips'
        },
        {
          id: '8',
          title: 'Soccer Tournament',
          description: 'Action shot from the inter-school soccer tournament.',
          image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'sports'
        },
        {
          id: '9',
          title: 'Science Lab Experiments',
          description: 'Students conducting experiments in the new science laboratory.',
          image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'academic'
        },
        {
          id: '10',
          title: 'Drama Performance',
          description: 'Students performing in the annual drama production.',
          image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'arts'
        },
        {
          id: '11',
          title: 'School Carnival',
          description: 'Fun and games at the annual school carnival.',
          image: 'https://images.unsplash.com/photo-1563841930606-67e2bce48b78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'events'
        },
        {
          id: '12',
          title: 'Debate Competition',
          description: 'Our debate team in action at the regional competition.',
          image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'academic'
        },
      ]

      const uniqueCategories = [...new Set(photosData.map(photo => photo.category))]
      
      setPhotos(photosData)
      setFilteredPhotos(photosData)
      setCategories(uniqueCategories)
      setIsLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPhotos(photos)
    } else {
      setFilteredPhotos(photos.filter(photo => photo.category === selectedCategory))
    }
  }, [selectedCategory, photos])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const openModal = (photo) => {
    setCurrentPhoto(photo)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setCurrentPhoto(null)
  }

  const navigatePhoto = (direction) => {
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === currentPhoto.id)
    let newIndex

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredPhotos.length
    } else {
      newIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    }

    setCurrentPhoto(filteredPhotos[newIndex])
  }

  const categoryLabels = {
    academic: 'Academic',
    sports: 'Sports',
    arts: 'Arts & Culture',
    events: 'Events',
    'field-trips': 'Field Trips'
  }

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-primary-600 dark:bg-primary-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Photo Gallery</h1>
          <p className="text-white text-lg mb-0 max-w-2xl mx-auto">
            Explore moments and memories from our school activities and events.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="mb-10 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">All Photos</h2>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredPhotos.length > 0 ? (
                filteredPhotos.map((photo) => (
                  <motion.div 
                    key={photo.id}
                    className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    onClick={() => openModal(photo)}
                  >
                    <img 
                      src={photo.image} 
                      alt={photo.title} 
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-lg font-semibold">{photo.title}</h3>
                        <p className="text-sm">{categoryLabels[photo.category] || photo.category}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    No photos found in this category. Please try another filter.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Photo Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Photo Modal"
        className="max-w-4xl mx-auto mt-20 bg-white dark:bg-gray-800 rounded-lg shadow-xl outline-none overflow-hidden"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center z-50"
      >
        {currentPhoto && (
          <div>
            <div className="relative">
              <img 
                src={currentPhoto.image} 
                alt={currentPhoto.title} 
                className="w-full max-h-[70vh] object-contain"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
                aria-label="Close modal"
              >
                <FiX size={20} />
              </button>
              <button 
                onClick={() => navigatePhoto('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
                aria-label="Previous photo"
              >
                <FiChevronLeft size={24} />
              </button>
              <button 
                onClick={() => navigatePhoto('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
                aria-label="Next photo"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{currentPhoto.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{currentPhoto.description}</p>
              <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium rounded-full">
                {categoryLabels[currentPhoto.category] || currentPhoto.category}
              </span>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default GalleryPage