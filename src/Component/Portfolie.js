import React from 'react';
import profile from "../images/Yogesh_Gurunath_Hitnalli-removebg-preview.png";
import Card from 'react-bootstrap/Card';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Portfolie = () => {
    const projects = [
        {
          title: "Decentralized Voting App",
          subtitle: "Blockchain | Solidity | React",
          description: "A secure and transparent voting system built on Ethereum blockchain with React frontend.",
          link: "https://github.com/codewithroger/React_Blockchain"
        },
        {
          title: "HearMate",
          subtitle: "Machine Learning | Flutter ",
          description: "HearMate is an innovative assistive solution designed specifically for the deaf and hard-of-hearing community.",
          link: "https://github.com/codewithroger/Sound-Recognition-"
        },
        {
          title: "Image Classification From Scratch",
          subtitle: "Machine Learning",
          description: "Developed and implemented an image classification model using machine learning algorithms.",
          link: "https://github.com/codewithroger/Image-Classification-From-Multi-Layer-Perception-MLP-"
        }
        ,
        {
          title: "ChefHub",
          subtitle: "Python | SqlLite3",
          description: "ChefHub is a full-featured restaurant management system. Designed to improve productivity and optimize workflow for restaurant owners and cooks.",
          link: "https://github.com/codewithroger/ChefHub"
        }
      ];
      
      const blogs = [
        {
          title: "Building Your First DApp",
          subtitle: "Solidity | Hardhat | React",
          description: "Step-by-step guide on how to build a decentralized app using the Ethereum blockchain.",
          link: "https://your-blog-link.com/first-dapp"
        },
        {
          title: "Getting Started with Web3.js",
          subtitle: "Web3 | JavaScript",
          description: "A beginner-friendly introduction to using Web3.js to interact with smart contracts.",
          link: "https://your-blog-link.com/web3-js"
        },
        {
          title: "How I Built My Portfolio",
          subtitle: "React | Tailwind | Design Tips",
          description: "Behind the scenes of building and designing my developer portfolio.",
          link: "https://your-blog-link.com/portfolio-journey"
        }
      ];
  return (
    <div>
      <div className="bg-gray-50 min-h-screen text-gray-800 font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="bg-white shadow-md w-full px-8 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-indigo-600">Yogesh Hitnalli</div>
          <ul className="flex gap-6 text-gray-600 font-medium">
            <li className="hover:text-indigo-600"><a href="#about">Profile</a></li>
            <li className="hover:text-indigo-600"><a href="#education">Education</a></li>
            <li className="hover:text-indigo-600"><a href="#certifications">Certifications</a></li>
            <li className="hover:text-indigo-600"><a href="#projects">Projects</a></li>
            {/* <li className="hover:text-indigo-600"><a href="#blog">Blog</a></li> */}
            <li className="hover:text-indigo-600"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

     {/* Hero Section */}
<section id="about" className="bg-gradient-to-r from-indigo-50 to-gray-100 py-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
    
    {/* Left side: Text and CV Button */}
    <div className="mb-10 md:mb-0">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Hi, I'm</h1>
      <h2 className="text-3xl md:text-4xl text-indigo-600 font-semibold mb-6">Yogesh Gurunath Hitnalli</h2>

      {/* Download CV Button */}
      <a
        href="/File/Yogesh_Resume.pdf"
        download="Yogesh_Resume.pdf"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-300"
      >
        Download CV
      </a>
    </div>

    {/* Right side: Image */}
    <img
      src={profile}
      alt="Yogesh Gurunath Hitnalli"
      className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
    />
  </div>
</section>


      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">🎓 Education</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h3 className="text-xl font-semibold text-gray-800">Bachelor of Computer Science</h3>
              <p className="text-gray-600">D. Y. Patil College Of Engineering & Technology 2021-2025</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h3 className="text-xl font-semibold text-gray-800">Secondary Higher Education</h3>
              <p className="text-gray-600">Chaitanya's International School  2019-2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications / Courses Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">🧾 Certifications / Courses</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            <li><strong>Clould Administrator </strong> –Pradhan Mantri Kaushal Vikas Yojana</li>
            <li><strong> AWS Cloud Virtual Internship</strong> – AICTE </li>
            <li><strong>Google AI-Ml Virtual Internship </strong> – AICTE</li>
          </ul>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">💬 About Me</h2>
          <p className="text-lg text-gray-700 mb-6">
          I have a strong foundation in programming, web development, and database management, with proficiency in C,
Java, JavaScript, React.js, and SQL. I am passionate about applying my skills in real-world settings and
contributing to innovative web development projects. As an active member of the Silicon Society, I participate in
various tech-related activities and event          </p>
  
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-indigo-600 font-medium mb-4">{project.subtitle}</p>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {/* <section id="blog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-10 text-gray-800 text-center">Blog</h1>
          <div className="flex flex-wrap justify-center gap-10">
          {blogs.map((blog, idx) => (
            <Card key={idx} className="w-96 shadow-md border border-gray-200 bg-white transition-transform hover:scale-105 duration-300">
                <Card.Body>
                  <Card.Title className="text-2xl font-semibold text-gray-800">{blog.title}</Card.Title>
                  <Card.Subtitle className="mb-3 text-sm text-indigo-500">{blog.subtitle}</Card.Subtitle>
                  <Card.Text className="text-gray-600 mb-4">{blog.description}</Card.Text>
                  <a href={blog.link} className="text-indigo-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                    Read More →
                  </a>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">📬 Contact Me</h2>
          <p className="text-lg text-gray-700 mb-4">Let's connect and create something amazing!</p>
          <div className="flex justify-center space-x-6 text-2xl">
            <a href="mailto:yogeshhitnalli96@gmail.com" className="text-gray-600 hover:text-indigo-600">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/codewithroger" className="text-gray-600 hover:text-indigo-600" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://in.linkedin.com/in/yogeshhitnalli" className="text-gray-600 hover:text-indigo-600" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>   
    </div>
  )
}

export default Portfolie