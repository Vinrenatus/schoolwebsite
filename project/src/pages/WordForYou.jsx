import { useState } from 'react'

// Mock data for messages from administrative figures
const messages = [
  {
    id: 1,
    author: 'Principal',
    name: 'Mr Peter Shanahan',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    message: `
      <p>Dear Students, Parents, and Staff,</p>
      
      <p>As we embark on another academic year, I am filled with optimism and excitement for the journey ahead. Our school continues to be a beacon of educational excellence, and this is only possible because of the dedication of our teachers, the support of our parents, and the enthusiasm of our students.</p>
      
      <p>This year, we are introducing several new initiatives aimed at enhancing the learning experience and fostering a more inclusive environment. Our focus remains on providing a well-rounded education that prepares students not just academically, but also equips them with the life skills necessary to navigate an increasingly complex world.</p>
      
      <p>I encourage each student to embrace challenges, pursue their passions, and strive for excellence in all endeavors. Remember that education is not merely about acquiring knowledge, but about developing critical thinking, creativity, and character.</p>
      
      <p>To our parents, thank you for entrusting us with your children's education. Your partnership is invaluable, and I look forward to working together to support our students' growth and development.</p>
      
      <p>To our dedicated staff, your commitment to our students' success is the foundation of our school's achievements. Your hard work does not go unnoticed, and I am grateful for your continued dedication.</p>
      
      <p>Let us make this year one of growth, discovery, and achievement.</p>
      
      <p>Warm regards,<br>Dr. James Wilson<br>Principal</p>
    `
  },
  {
    id: 2,
    author: 'Deputy Principal',
    name: 'Madam Anne Ogalo',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    message: `
      <p>Dear School Community,</p>
      
      <p>As we navigate through this academic year, I want to take a moment to reflect on the importance of resilience and adaptability in education. These qualities have never been more crucial than they are today.</p>
      
      <p>Our students face a rapidly changing world, and our role as educators is to prepare them not just with knowledge, but with the ability to adapt, innovate, and persevere through challenges. This is why we have been focusing on integrating problem-solving and critical thinking across all subjects and grade levels.</p>
      
      <p>I am particularly proud of the collaborative projects that have emerged this year, where students from different grades have worked together to address real-world problems. These experiences teach valuable lessons about teamwork, communication, and the impact they can have on their community.</p>
      
      <p>To our students: embrace every opportunity to learn, both inside and outside the classroom. Your education is not confined to textbooks and exams; it is found in every interaction, every challenge, and every moment of curiosity.</p>
      
      <p>To our parents and guardians: thank you for your continued support and partnership. Your involvement in your child's education makes a significant difference in their success.</p>
      
      <p>Together, we are building a community of lifelong learners who are prepared to thrive in an ever-changing world.</p>
      
      <p>Best regards,<br>Mrs. Sarah Johnson<br>Deputy Principal</p>
    `
  },
  {
    id: 3,
    author: 'Head of Academics',
    name: 'Prof. Michael Chen',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    message: `
      <p>Dear Students and Parents,</p>
      
      <p>As Head of Academics, I am delighted to share some insights into our educational approach and the academic initiatives we are implementing this year.</p>
      
      <p>Our curriculum is designed to be both rigorous and relevant, challenging students to reach their full potential while connecting their learning to real-world applications. We believe that education should inspire curiosity and foster a love for learning that extends beyond the classroom.</p>
      
      <p>This year, we have enhanced our STEM programs to include more hands-on projects and collaborative research opportunities. We have also expanded our humanities offerings to deepen students' understanding of history, literature, and global perspectives.</p>
      
      <p>Our assessment practices continue to evolve, with a greater emphasis on formative assessment and meaningful feedback. We recognize that grades are just one measure of learning, and we are committed to helping students develop a growth mindset that values progress and perseverance.</p>
      
      <p>To support student success, we have increased our academic support services, including tutoring, study skills workshops, and personalized learning plans. We encourage all students to take advantage of these resources.</p>
      
      <p>Parents, your role in your child's education is invaluable. Regular conversations about learning, encouragement of reading at home, and partnership with teachers create a strong foundation for academic success.</p>
      
      <p>I look forward to a year of intellectual growth, academic achievement, and the joy of discovery.</p>
      
      <p>Sincerely,<br>Prof. Michael Chen<br>Head of Academics</p>
    `
  },
  {
    id: 4,
    author: 'Student Council President',
    name: 'Emma Rodriguez',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    message: `
      <p>Hello Fellow Students,</p>
      
      <p>As your Student Council President, I am honored to represent your voices and work alongside you to make this school year memorable and impactful.</p>
      
      <p>Our school is more than just a place of learning; it's a community where we grow together, support each other, and create lasting memories. The Student Council is committed to fostering this sense of community through various events, initiatives, and open communication.</p>
      
      <p>This year, we are focusing on three main areas: student well-being, school spirit, and community service. We have planned monthly wellness activities, spirit weeks, and service projects that will allow us to make a positive difference both within our school and in the broader community.</p>
      
      <p>I encourage each of you to get involved, share your ideas, and take ownership of your school experience. Join a club, participate in events, volunteer for service projects, or simply reach out to someone new. Every small action contributes to the vibrant tapestry of our school community.</p>
      
      <p>Remember that the Student Council is here to represent you. We welcome your suggestions, concerns, and feedback. Together, we can make this year extraordinary.</p>
      
      <p>Let's embrace the opportunities ahead with enthusiasm, kindness, and school pride!</p>
      
      <p>Your fellow student,<br>Emma Rodriguez<br>Student Council President</p>
    `
  }
]

const WordForYou = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(messages[0].author)
  
  // Find the selected message
  const selectedMessage = messages.find(msg => msg.author === selectedAuthor)
  
  return (
    <div className="pt-20">
      <div className="bg-primary-700 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">A Word For You</h1>
          <p className="text-xl max-w-3xl">
            Messages from our school leadership to inspire and guide our community.
          </p>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <label htmlFor="author-select" className="block text-lg font-medium mb-2">
              Select a message from:
            </label>
            <select
              id="author-select"
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
              className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-700"
            >
              {messages.map(msg => (
                <option key={msg.id} value={msg.author}>
                  {msg.author} - {msg.name}
                </option>
              ))}
            </select>
          </div>
          
          {selectedMessage && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <img 
                    src={selectedMessage.image} 
                    alt={selectedMessage.name} 
                    className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">{selectedMessage.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{selectedMessage.author}</p>
                  </div>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: selectedMessage.message }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WordForYou