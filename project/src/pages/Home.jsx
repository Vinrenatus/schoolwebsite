import HeroSlider from '../components/home/HeroSlider'
import FeaturedPrograms from '../components/home/FeaturedPrograms'
import LatestNews from '../components/home/LatestNews'
import CallToAction from '../components/home/CallToAction'

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <FeaturedPrograms />
      <LatestNews />
      <CallToAction />
    </div>
  )
}

export default Home