import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiUser } from 'react-icons/fi'

function WordForYouPage() {
  const [messages, setMessages] = useState([])
  const [selectedPerson, setSelectedPerson] = useState('')
  const [currentMessage, setCurrentMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching data from API
    setTimeout(() => {
      const messagesData = [
        {
          id: '1',
          person: 'principal',
          name: 'Mr Peter Shanahan',
          title: 'Principal',
          image: 'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=',
          message: `
            <p>Dear Students, Parents, and Community Members,</p>
            
            <p>It is with great pride and enthusiasm that I welcome you to our school's website. As Principal, I am honored to lead an institution that is committed to academic excellence, character development, and the holistic growth of every student.</p>
            
            <p>Our school's mission is to provide a nurturing and stimulating environment where students can discover their passions, develop their talents, and prepare for the challenges of the future. We believe that education extends beyond the classroom, and we strive to offer diverse opportunities for learning and personal development.</p>
            
            <p>Our dedicated faculty and staff work tirelessly to ensure that each student receives the support, guidance, and encouragement they need to succeed. We value the partnership between home and school, and we invite parents to actively participate in their children's educational journey.</p>
            
            <p>As we navigate the ever-changing landscape of education, we remain committed to our core values of respect, responsibility, integrity, and excellence. These values guide our decisions and actions as we prepare students to become thoughtful, engaged, and compassionate citizens of the world.</p>
            
            <p>I encourage you to explore our website to learn more about our programs, activities, and achievements. If you have any questions or would like to visit our campus, please do not hesitate to contact us.</p>
            
            <p>Thank you for your interest in our school. Together, we can make a positive difference in the lives of our students and our community.</p>
            
            <p>Warm regards,</p>
            <p>Mr Peter Shanahan<br>Principal</p>
          
          `
        },
        {
          id: '2',
          person: 'deputy-principal',
          name: 'Madam Anne Ogalo',
          title: 'Deputy Principal',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN84w-iRfDNfXbqf6xfHjQr6_PdkctRoJpQA&s',
          message: `
            <p>Dear School Community,</p>
            
            <p>As Deputy Principal, I am delighted to work alongside our exceptional team of educators and staff to create a vibrant and supportive learning environment for all students.</p>
            
            <p>My primary focus is on curriculum development, teacher support, and student welfare. I believe that a well-rounded education should challenge students academically while also nurturing their social and emotional growth. Our curriculum is designed to be engaging, relevant, and rigorous, preparing students for success in higher education and beyond.</p>
            
            <p>I am particularly passionate about fostering a positive school culture where every student feels valued, respected, and motivated to achieve their personal best. We celebrate diversity and encourage students to develop empathy, resilience, and a global perspective.</p>
            
            <p>Throughout the school year, I work closely with department heads, teachers, and support staff to ensure that our educational programs meet the highest standards and address the diverse needs of our student population. We regularly review and refine our teaching practices based on current research and feedback from our school community.</p>
            
            <p>I welcome your input and involvement in our school. Education is a collaborative effort, and your support and engagement are essential to our students' success.</p>
            
            <p>Please feel free to reach out if you have any questions or suggestions. I look forward to working together to provide the best possible educational experience for our students.</p>
            
            <p>Sincerely,</p>
            <p>Madam Ann Ogalo<br>Deputy Principal</p>
           
          `
        },
        {
          id: '3',
          person: 'academic-director',
          name: 'Mercilinus Osiemo',
          title: 'Academic Director',
          image: 'https://www.shutterstock.com/image-photo/successful-confident-black-business-man-260nw-563534320.jpg',
          message: `
            <p>Dear Students and Parents,</p>
            
            <p>As the Academic Director, I am committed to maintaining and enhancing the high standards of education that our school is known for. My role involves overseeing curriculum development, assessment practices, and academic support programs to ensure that every student has the opportunity to excel.</p>
            
            <p>We believe in a balanced approach to education that emphasizes both academic rigor and the development of critical thinking, creativity, and problem-solving skills. Our curriculum is regularly updated to incorporate the latest educational research and to prepare students for the rapidly changing demands of the 21st century.</p>
            
            <p>One of our key priorities is personalized learning. We recognize that each student has unique strengths, interests, and learning styles. Our teachers use a variety of instructional strategies and assessment methods to accommodate these differences and to help each student reach their full potential.</p>
            
            <p>We also place a strong emphasis on continuous improvement. We regularly analyze student performance data to identify areas of strength and opportunities for growth. This information guides our professional development programs for teachers and our academic support initiatives for students.</p>
            
            <p>I encourage students to take ownership of their learning journey and to set ambitious goals for themselves. Our faculty and staff are here to provide guidance, support, and encouragement along the way.</p>
            
            <p>If you have any questions about our academic programs or if you need assistance with any aspect of your educational experience, please do not hesitate to contact me or any member of our academic team.</p>
            
            <p>Best wishes for a successful and rewarding academic year.</p>
            
            <p>Sincerely,</p>
            <p>Dr. Maria Rodriguez<br>Academic Director</p>
          `
        },
        {
          id: '4',
          person: 'student-affairs',
          name: 'Madam Eva Njagi',
          title: 'Head  teacher Primary School',
          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          message: `
            <p>Dear Students and Families,</p>
            
            <p>As the Director of Student Affairs, my primary focus is on creating a positive, inclusive, and supportive environment where every student can thrive both academically and personally. I oversee various aspects of student life, including extracurricular activities, student leadership programs, counseling services, and community engagement initiatives.</p>
            
            <p>We believe that education extends far beyond the classroom. Through participation in clubs, sports, arts, and community service, students develop important life skills such as leadership, teamwork, time management, and resilience. These experiences also help students discover their passions and talents, build meaningful relationships, and create lasting memories of their school years.</p>
            
            <p>Our student support services are designed to address the diverse needs of our student population. Our team of counselors provides academic guidance, social-emotional support, and college/career planning assistance. We also offer various resources and programs to promote student well-being, including stress management workshops, peer mentoring, and health education.</p>
            
            <p>We value student voice and leadership. Through our Student Council and various leadership opportunities, students have the chance to contribute to school decision-making, organize events, and advocate for positive change. We encourage all students to take an active role in shaping their school experience and developing their leadership potential.</p>
            
            <p>My door is always open to students and parents who have questions, concerns, or ideas about how we can enhance student life at our school. I am committed to listening to your feedback and working collaboratively to create the best possible environment for learning and growth.</p>
            
            <p>I look forward to supporting you throughout your journey at our school.</p>
            
            <p>Warm regards,</p>
            <p>Ms. Olivia Thompson<br>Director of Student Affairs</p>
          `
        },
      ]

      setMessages(messagesData)
      setSelectedPerson(messagesData[0].person)
      setCurrentMessage(messagesData[0])
      setIsLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    if (selectedPerson && messages.length > 0) {
      const message = messages.find(m => m.person === selectedPerson)
      setCurrentMessage(message || null)
    }
  }, [selectedPerson, messages])

  const handlePersonChange = (person) => {
    setSelectedPerson(person)
  }

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-primary-600 dark:bg-primary-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Word For You</h1>
          <p className="text-white text-lg mb-0 max-w-2xl mx-auto">
            Messages from our school leadership to the community.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-6">Select a Person</h2>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <button
                        key={message.id}
                        onClick={() => handlePersonChange(message.person)}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                          selectedPerson === message.person
                            ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <div className="flex-shrink-0 mr-4">
                          <img 
                            src={message.image} 
                            alt={message.name} 
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <h3 className="font-medium">{message.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{message.title}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:w-2/3">
                {currentMessage ? (
                  <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                    key={currentMessage.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center mb-6">
                      <img 
                        src={currentMessage.image} 
                        alt={currentMessage.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h2 className="text-2xl font-bold">{currentMessage.name}</h2>
                        <p className="text-gray-600 dark:text-gray-300">{currentMessage.title}</p>
                      </div>
                    </div>
                    <div 
                      className="prose dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: currentMessage.message }}
                    ></div>
                  </motion.div>
                ) : (
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                    <FiUser className="mx-auto text-4xl mb-4 text-gray-400" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Please select a person to view their message.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default WordForYouPage