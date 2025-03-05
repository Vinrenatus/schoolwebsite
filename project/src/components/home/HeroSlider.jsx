import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    title: 'Welcome to SchoolName',
    subtitle: 'Shaping the future through quality education',
    buttonText: 'Explore Programs',
    buttonLink: '/programs'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    title: 'Excellence in Education',
    subtitle: 'Providing a nurturing environment for academic growth',
    buttonText: 'Learn More',
    buttonLink: '/about'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    title: 'Discover Our Facilities',
    subtitle: 'State-of-the-art resources for optimal learning',
    buttonText: 'View Gallery',
    buttonLink: '/gallery'
  }
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next)
  }
  
  return (
    <div className="relative h-screen">
      <Slider {...settings} className="h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-screen">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl animate-fadeIn animation-delay-200">{slide.subtitle}</p>
              <Link to={slide.buttonLink} className="btn btn-primary text-lg animate-fadeIn animation-delay-400">
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider