import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary-700 text-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our School Community?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Discover the difference a quality education can make in your child's future. 
          Apply now for the upcoming academic year.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/programs" className="btn bg-white text-primary-700 hover:bg-gray-100">
            Explore Programs
          </Link>
          <a href="#" className="btn bg-primary-600 hover:bg-primary-800 border border-white">
            Apply Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction