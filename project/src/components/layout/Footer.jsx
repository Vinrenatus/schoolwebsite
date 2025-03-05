import { Link } from 'react-router-dom'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-600 dark:text-primary-400">School Name</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Providing quality education and nurturing future leaders since 1990.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FiFacebook />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FiTwitter />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FiInstagram />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FiYoutube />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-600 dark:text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">News & Updates</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/store" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">School Store</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-600 dark:text-primary-400">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs?category=primary" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Primary Education</Link>
              </li>
              <li>
                <Link to="/programs?category=secondary" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Secondary Education</Link>
              </li>
              <li>
                <Link to="/programs?category=extracurricular" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Extracurricular Activities</Link>
              </li>
              <li>
                <Link to="/programs?category=special" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Special Programs</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-600 dark:text-primary-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-2 text-primary-600 dark:text-primary-400" />
                <span className="text-gray-600 dark:text-gray-300">123 Education Street, School District, City, Country</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 text-primary-600 dark:text-primary-400" />
                <span className="text-gray-600 dark:text-gray-300">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2 text-primary-600 dark:text-primary-400" />
                <span className="text-gray-600 dark:text-gray-300">info@schoolname.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {currentYear} School Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer