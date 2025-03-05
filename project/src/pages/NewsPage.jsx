import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'

function NewsPage() {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching data from API
    setTimeout(() => {
      const newsData = [
        {
          id: '1',
          title: 'School Wins National Academic Competition',
          excerpt: 'Our students brought home the gold in the national academic challenge, showcasing their exceptional knowledge and teamwork.',
          content: `
            <p>We are proud to announce that our school has won the National Academic Competition, bringing home the gold trophy and numerous individual awards. This prestigious competition, which featured over 200 schools from across the country, tested students' knowledge in various subjects including mathematics, science, literature, and history.</p>
            
            <p>Our team of 10 students demonstrated exceptional knowledge, critical thinking, and teamwork throughout the three-day competition. They particularly excelled in the science and mathematics rounds, where they achieved perfect scores in several challenges.</p>
            
            <p>"This victory is a testament to our students' dedication and hard work," said Principal Johnson. "They spent months preparing for this competition, often staying after school and studying during weekends. Their commitment to excellence has truly paid off."</p>
            
            <p>The team was coached by Ms. Williams and Mr. Rodriguez, who expressed immense pride in their students' achievements. "Working with these brilliant young minds has been an incredible experience," said Ms. Williams. "They pushed each other to excel and supported one another through every challenge."</p>
            
            <p>The school will be hosting a special assembly next week to celebrate this remarkable achievement and recognize the team members for their outstanding performance.</p>
          `,
          date: '2025-03-15',
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          author: 'Admin'
        },
        {
          id: '2',
          title: 'New Science Lab Opening Next Month',
          excerpt: 'State-of-the-art science facilities will be available to students starting next month, enhancing our STEM education offerings.',
          content: `
            <p>We are excited to announce the opening of our new state-of-the-art science laboratory next month. This facility represents a significant investment in our school's STEM education program and will provide students with enhanced opportunities for hands-on learning and scientific exploration.</p>
            
            <p>The new laboratory features modern equipment including digital microscopes, advanced chemistry apparatus, physics demonstration tools, and environmental monitoring systems. The space has been designed to facilitate both individual experimentation and collaborative research projects.</p>
            
            <p>"This new facility will transform how we teach science," said Dr. Martinez, Head of the Science Department. "Students will be able to conduct sophisticated experiments and engage in research that was previously not possible with our existing resources."</p>
            
            <p>The laboratory will support various science courses including biology, chemistry, physics, and environmental science. It will also enable the introduction of new elective courses such as biotechnology and forensic science in the coming academic year.</p>
            
            <p>The project was funded through a combination of school budget allocations, a generous donation from the Alumni Association, and a grant from the National Science Education Foundation. A formal opening ceremony is scheduled for April 15, with demonstrations and activities planned to showcase the laboratory's capabilities.</p>
          `,
          date: '2025-03-10',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          author: 'Admin'
        },
        {
          id: '3',
          title: 'Annual Sports Day Scheduled for April',
          excerpt: 'Mark your calendars for our biggest sporting event of the year, featuring competitions across multiple disciplines.',
          content: `
            <p>We are pleased to announce that our Annual Sports Day has been scheduled for April 20-22. This three-day event will feature competitions across multiple sporting disciplines, showcasing the athletic talents of our students and promoting the values of sportsmanship, teamwork, and healthy competition.</p>
            
            <p>The event will include track and field events, team sports tournaments (soccer, basketball, volleyball), swimming competitions, and various recreational activities. Students from all grade levels will have opportunities to participate, with events categorized by age groups to ensure fair competition.</p>
            
            <p>"Sports Day is always a highlight of our school calendar," said Mr. Thompson, Head of Physical Education. "It's not just about winning medals; it's about challenging oneself, supporting teammates, and enjoying the spirit of friendly competition."</p>
            
            <p>This year's Sports Day will also feature special demonstrations by professional athletes and interactive sessions on sports nutrition and injury prevention. Parents and family members are encouraged to attend and cheer for the participants.</p>
            
            <p>Registration for various events will begin next week. Students can sign up through their physical education teachers or the online portal. A detailed schedule of events will be published on the school website by the end of this month.</p>
          `,
          date: '2025-03-05',
          image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          author: 'Admin'
        },
        {
          id: '4',
          title: 'School Choir Invited to International Festival',
          excerpt: 'Our award-winning choir has received a prestigious invitation to perform at the International Youth Music Festival.',
          content: `
            <p>We are proud to announce that our school choir has been invited to perform at the International Youth Music Festival in Vienna, Austria. This prestigious invitation recognizes the exceptional talent and dedication of our choir members and their director, Ms. Eleanor Richards.</p>
            
            <p>The International Youth Music Festival brings together young musicians from around the world for a week of performances, workshops, and cultural exchange. Our choir is one of only five school choirs from the United States selected to participate in this year's festival.</p>
            
            <p>"This is an incredible honor and opportunity for our students," said Ms. Richards. "They have worked tirelessly to develop their vocal skills and musical understanding. This invitation validates their efforts and will provide them with an unforgettable international performance experience."</p>
            
            <p>The choir will perform a diverse repertoire including classical pieces, folk songs from various cultures, and contemporary compositions. They will also participate in collaborative performances with choirs from other countries and attend masterclasses led by renowned vocal instructors.</p>
            
            <p>The school is organizing fundraising events to help cover travel expenses for the 30-member choir. Details about these events will be announced soon, and we encourage the school community to support this wonderful opportunity for our talented young musicians.</p>
          `,
          date: '2025-03-01',
          image: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          author: 'Admin'
        },
        {
          id: '5',
          title: 'Parent-Teacher Conference Dates Announced',
          excerpt: 'Schedule your meetings with teachers to discuss your child\'s academic progress and development.',
          content: `
            <p>We are pleased to announce the dates for our upcoming Parent-Teacher Conferences, which will be held on April 5-6. These conferences provide an important opportunity for parents and teachers to discuss students' academic progress, social development, and any concerns or questions.</p>
            
            <p>Conferences will be scheduled in 15-minute intervals from 1:00 PM to 7:00 PM on both days. This extended timeframe is designed to accommodate parents' work schedules and ensure that everyone has an opportunity to participate.</p>
            
            <p>"Regular communication between parents and teachers is essential for student success," said Vice Principal Garcia. "These conferences allow for focused, one-on-one discussions about each student's unique strengths, challenges, and goals."</p>
            
            <p>Parents can schedule their conference appointments through our online booking system, which will be available starting March 20. For those who prefer not to use the online system, appointments can also be made by calling the school office.</p>
            
            <p>To make the most of your conference time, we recommend preparing specific questions in advance and being ready to share insights about your child's learning habits, interests, and challenges at home. Teachers will provide updates on academic performance, behavior, and social interactions, as well as suggestions for supporting learning outside of school.</p>
          `,
          date: '2025-02-25',
          image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          author: 'Admin'
        },
        {
          id: '6',
          title: 'School Library Receives Major Book Donation',
          excerpt: 'Local bookstore donates over 500 books to enhance our library collection and promote reading.',
          content: `
            <p>Our school library has received a generous donation of over 500 books from Riverside Bookstore, a local independent bookseller. This significant contribution will enhance our library's collection and support our ongoing efforts to promote reading and literacy among students.</p>
            
            <p>The donated books span various genres and reading levels, including fiction, non-fiction, reference materials, and graphic novels. Many of the titles are recent publications that address contemporary issues and interests, making them particularly relevant and engaging for our students.</p>
            
            <p>"We're incredibly grateful for this donation," said Ms. Patel, our school librarian. "Having access to a diverse range of high-quality books is essential for developing strong reading habits and a love of literature. These new additions will certainly generate excitement among our students."</p>
            
            <p>Riverside Bookstore has been a longtime supporter of educational initiatives in our community. The owner, Mr. James Chen, expressed his commitment to fostering literacy and critical thinking skills among young people.</p>
            
            <p>"Books open doors to new worlds and ideas," said Mr. Chen. "We're happy to contribute to the educational journey of students at this school and hope these books will inspire curiosity, imagination, and a lifelong love of reading."</p>
            
            <p>The new books will be processed and added to the library catalog over the next few weeks, with a special display planned to showcase the new additions once they're available for borrowing.</p>
          `,
          date: '2025-02-20',
          image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          author: 'Admin'
        },
      ]

      setNews(newsData)
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-primary-600 dark:bg-primary-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">News & Updates</h1>
          <p className="text-white text-lg mb-0 max-w-2xl mx-auto">
            Stay informed about the latest happenings and events at our school.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <motion.article 
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/news/${item.id}`}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <FiCalendar className="mr-2" />
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">
                      <Link to={`/news/${item.id}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                        {item.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{item.excerpt}</p>
                    <Link 
                      to={`/news/${item.id}`}
                      className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center"
                    >
                      Read More <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default NewsPage