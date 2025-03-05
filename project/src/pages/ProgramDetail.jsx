import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft, FiCalendar, FiClock, FiUsers } from 'react-icons/fi'

function ProgramDetail() {
  const { id } = useParams()
  const [program, setProgram] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching data from API
    setTimeout(() => {
      const programsData = {
        '1': {
          id: '1',
          title: 'Primary Education',
          description: 'Our primary education program focuses on building strong foundations in literacy, numeracy, and critical thinking. Students engage in a balanced curriculum that promotes holistic development.',
          fullDescription: `
            <p>Our primary education program is designed to provide a strong foundation for lifelong learning. We focus on developing essential skills in literacy, numeracy, and critical thinking while nurturing creativity, curiosity, and social development.</p>
            
            <p>The curriculum is carefully structured to ensure a balanced approach to education, incorporating core academic subjects with arts, physical education, and character development. Our experienced teachers use innovative teaching methods to engage students and cater to different learning styles.</p>
            
            <p>Key features of our primary education program include:</p>
            <ul>
              <li>Comprehensive literacy and numeracy development</li>
              <li>Inquiry-based learning approaches</li>
              <li>Integration of technology in the classroom</li>
              <li>Regular assessment and personalized feedback</li>
              <li>Strong parent-teacher collaboration</li>
              <li>Focus on character development and values</li>
            </ul>
            
            <p>We believe that a positive and supportive learning environment is essential for student success. Our classrooms are designed to be safe, inclusive spaces where every child feels valued and motivated to learn.</p>
          `,
          image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'primary',
          details: {
            duration: '6 years',
            ageRange: '6-12 years',
            classSize: '20-25 students',
            schedule: 'Monday to Friday, 8:00 AM - 3:00 PM'
          },
          curriculum: [
            'Language Arts and Literacy',
            'Mathematics',
            'Science',
            'Social Studies',
            'Physical Education',
            'Arts and Music',
            'Character Education'
          ]
        },
        '2': {
          id: '2',
          title: 'Secondary Education',
          description: 'The secondary education program prepares students for higher education through rigorous academic coursework, career guidance, and personal development opportunities.',
          fullDescription: `
            <p>Our secondary education program is designed to prepare students for success in higher education and beyond. We offer a rigorous academic curriculum that challenges students to think critically, solve complex problems, and develop a deep understanding of various subject areas.</p>
            
            <p>Beyond academics, we focus on developing well-rounded individuals through extracurricular activities, leadership opportunities, and community service. Our experienced faculty members serve as mentors and guides, helping students discover their passions and potential.</p>
            
            <p>Key components of our secondary education program include:</p>
            <ul>
              <li>Advanced coursework in core academic subjects</li>
              <li>Specialized electives based on student interests</li>
              <li>College and career counseling</li>
              <li>Leadership development opportunities</li>
              <li>Research and project-based learning</li>
              <li>Technology integration across the curriculum</li>
            </ul>
            
            <p>We believe in preparing students not just for college entrance exams, but for the challenges and opportunities they will face throughout their lives. Our approach emphasizes critical thinking, effective communication, collaboration, and ethical decision-making.</p>
          `,
          image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'secondary',
          details: {
            duration: '6 years',
            ageRange: '12-18 years',
            classSize: '25-30 students',
            schedule: 'Monday to Friday, 8:00 AM - 4:00 PM'
          },
          curriculum: [
            'Language and Literature',
            'Mathematics',
            'Sciences (Biology, Chemistry, Physics)',
            'Social Sciences (History, Geography, Economics)',
            'Foreign Languages',
            'Arts and Design',
            'Physical Education',
            'Technology and Computer Science'
          ]
        },
        '3': {
          id: '3',
          title: 'Music Program',
          description: 'Our comprehensive music program offers instruction in various instruments, vocal training, music theory, and performance opportunities to develop students\' musical talents.',
          fullDescription: `
            <p>Our music program is designed to nurture students' musical talents and foster a lifelong appreciation for music. We offer comprehensive instruction in various instruments, vocal training, music theory, and composition, providing students with the skills and knowledge they need to excel in music.</p>
            
            <p>Our experienced music teachers are accomplished musicians who are passionate about sharing their expertise with students. They create a supportive and inspiring environment where students can explore their musical interests and develop their abilities.</p>
            
            <p>Key features of our music program include:</p>
            <ul>
              <li>Individual and group instrumental lessons</li>
              <li>Vocal training and choir opportunities</li>
              <li>Music theory and composition classes</li>
              <li>Regular performance opportunities</li>
              <li>Participation in music competitions and festivals</li>
              <li>Collaboration with professional musicians and organizations</li>
            </ul>
            
            <p>We believe that music education contributes significantly to students' overall development, enhancing cognitive abilities, fostering creativity, building confidence, and teaching discipline and perseverance. Our program is designed to be inclusive, catering to students of all skill levels and musical interests.</p>
          `,
          image: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'extracurricular',
          details: {
            duration: 'Year-round',
            ageRange: 'All ages',
            classSize: 'Varies by activity',
            schedule: 'After school and weekends'
          },
          curriculum: [
            'Instrumental Instruction (Piano, Violin, Guitar, etc.)',
            'Vocal Training',
            'Music Theory',
            'Composition and Songwriting',
            'Ensemble Performance',
            'Music History and Appreciation',
            'Recording and Production Techniques'
          ]
        },
        '4': {
          id: '4',
          title: 'Sports Excellence',
          description: 'The sports excellence program develops athletic abilities, teamwork, and sportsmanship through competitive and recreational sports activities.',
          fullDescription: `
            <p>Our Sports Excellence program is designed to develop students' athletic abilities while instilling important values such as teamwork, discipline, perseverance, and sportsmanship. We offer a wide range of sports activities, from team sports to individual disciplines, catering to different interests and skill levels.</p>
            
            <p>Our experienced coaches are dedicated to helping students reach their full potential in their chosen sports. They provide expert instruction, personalized feedback, and motivation, creating a positive and supportive environment for athletic development.</p>
            
            <p>Key components of our Sports Excellence program include:</p>
            <ul>
              <li>Professional coaching in various sports</li>
              <li>Regular training sessions and practice opportunities</li>
              <li>Competitive teams and participation in tournaments</li>
              <li>Physical fitness and conditioning programs</li>
              <li>Sports nutrition and injury prevention education</li>
              <li>Leadership development through team captaincy and mentoring</li>
            </ul>
            
            <p>We believe that sports participation contributes significantly to students' physical health, mental well-being, and character development. Our program emphasizes not just athletic achievement, but also the development of life skills that will benefit students long after their school years.</p>
          `,
          image: 'https://images.unsplash.com/photo-1526232373132-0e4ee643fa17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'extracurricular',
          details: {
            duration: 'Year-round',
            ageRange: 'All ages',
            classSize: 'Varies by sport',
            schedule: 'After school and weekends'
          },
          curriculum: [
            'Team Sports (Soccer, Basketball, Volleyball, etc.)',
            'Individual Sports (Tennis, Swimming, Athletics, etc.)',
            'Physical Fitness and Conditioning',
            'Sports Psychology',
            'Nutrition and Health Education',
            'Leadership and Team Building',
            'Competition Preparation'
          ]
        },
        '5': {
          id: '5',
          title: 'Science and Technology',
          description: 'This specialized program focuses on advanced science and technology education, including laboratory work, research projects, and innovation challenges.',
          fullDescription: `
            <p>Our Science and Technology program is designed to inspire and prepare the next generation of scientists, engineers, and innovators. We offer advanced coursework in various scientific disciplines and technology fields, providing students with the knowledge, skills, and experiences they need to excel in STEM-related pursuits.</p>
            
            <p>Our state-of-the-art laboratories and technology resources enable hands-on learning and experimentation. Students engage in research projects, design challenges, and collaborative problem-solving activities that develop their critical thinking, creativity, and technical abilities.</p>
            
            <p>Key features of our Science and Technology program include:</p>
            <ul>
              <li>Advanced coursework in biology, chemistry, physics, and computer science</li>
              <li>Hands-on laboratory experiments and research projects</li>
              <li>Robotics, coding, and engineering design challenges</li>
              <li>Participation in science fairs and technology competitions</li>
              <li>Collaboration with industry professionals and research institutions</li>
              <li>Integration of emerging technologies and scientific developments</li>
            </ul>
            
            <p>We believe in fostering a spirit of inquiry, innovation, and ethical responsibility in our students. Our program emphasizes not just technical knowledge, but also the ability to apply scientific principles to address real-world challenges and contribute positively to society.</p>
          `,
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          category: 'special',
          details: {
            duration: 'Year-round',
            ageRange: '10-18 years',
            classSize: '15-20 students',
            schedule: 'Integrated into regular curriculum with additional sessions'
          },
          curriculum: [
            'Advanced Biology, Chemistry, and Physics',
            'Computer Science and Programming',
            'Robotics and Engineering',
            'Data Science and Analytics',
            'Environmental Science',
            'Research Methodology',
            'Technology Ethics and Responsible Innovation'
          ]
        }
      }

      setProgram(programsData[id] || null)
      setIsLoading(false)
    }, 1000)
  }, [id])

  if (isLoading) {
    return (
      <div className="pt-20 pb-16 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (!program) {
    return (
      <div className="pt-20 pb-16 container mx-auto px-4 text-center min-h-[60vh] flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">Program Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The program you are looking for does not exist or has been removed.
        </p>
        <Link 
          to="/programs"
          className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors inline-flex items-center mx-auto"
        >
          <FiArrowLeft className="mr-2" /> Back to Programs
        </Link>
      </div>
    )
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
      <section 
        className="relative h-[40vh] md:h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${program.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="mb-4">
            <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
              {categoryLabels[program.category] || program.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{program.title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
                <div 
                  className="prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: program.fullDescription }}
                ></div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
                <ul className="space-y-2">
                  {program.curriculum.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Program Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FiCalendar className="mt-1 mr-3 text-primary-600 dark:text-primary-400" />
                    <div>
                      <span className="block font-medium">Duration</span>
                      <span className="text-gray-600 dark:text-gray-300">{program.details.duration}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiUsers className="mt-1 mr-3 text-primary-600 dark:text-primary-400" />
                    <div>
                      <span className="block font-medium">Age Range</span>
                      <span className="text-gray-600 dark:text-gray-300">{program.details.ageRange}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiUsers className="mt-1 mr-3 text-primary-600 dark:text-primary-400" />
                    <div>
                      <span className="block font-medium">Class Size</span>
                      <span className="text-gray-600 dark:text-gray-300">{program.details.classSize}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiClock className="mt-1 mr-3 text-primary-600 dark:text-primary-400" />
                    <div>
                      <span className="block font-medium">Schedule</span>
                      <span className="text-gray-600 dark:text-gray-300">{program.details.schedule}</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href="#" 
                    className="block w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white text-center rounded-md transition-colors"
                  >
                    Apply for This Program
                  </a>
                  <a 
                    href="#" 
                    className="block w-full mt-3 px-6 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 text-center rounded-md transition-colors"
                  >
                    Request More Information
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link 
              to="/programs"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md transition-colors inline-flex items-center"
            >
              <FiArrowLeft className="mr-2" /> Back to All Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProgramDetail