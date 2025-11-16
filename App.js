import React, { useState, useEffect } from 'react';
import { Github, Mail, ExternalLink, Menu, X, Brain, Code, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Fresh or Stale Detector",
      description: "Custom-trained YOLOv8 model that detects and classifies fruits and vegetables as fresh or stale.",
      tech: ["YOLOv8", "Python", "Google Colab", "Computer Vision"],
      github: "https://github.com/Soumyajit2819/Fresh-or-Stale-Detector",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-emerald-400 to-teal-500",
      details: ["Model: best.pt", "Detection scripts", "Sample output images"]
    },
    {
      title: "Sentiment Analysis",
      description: "Sentiment Analysis using LSTM and Word2Vec on product reviews.",
      tech: ["LSTM", "Word2Vec", "Python", "NLP"],
      github: "https://github.com/Soumyajit2819/sentiment_analysis",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-blue-400 to-indigo-500",
      details: ["Pretrained LSTM", "Review prediction", "CSV outputs"]
    },
    {
      title: "Vingo - Group Project",
      description: "Food discovery platform with maps, OTP auth, and AI suggestions.",
      tech: ["React", "Full-Stack", "Resend API", "Maps API"],
      live: "https://eight-vingo-2.onrender.com",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-violet-400 to-purple-500",
      details: ["Live map", "OTP login", "AI food suggestions"]
    }
  ];

  const skills = {
    "Machine Learning": ["TensorFlow", "Keras", "LSTM", "YOLOv8"],
    "Programming": ["Python", "JavaScript", "DSA"],
    "Data Science": ["Pandas", "NumPy", "Matplotlib"],
    "Tools & Tech": ["Git", "GitHub", "Colab", "Jupyter"]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="text-2xl font-bold text-emerald-400">SG</div>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? 'text-emerald-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button className="md:hidden text-emerald-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'skills', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-gray-700 rounded-md text-gray-300 hover:text-emerald-400"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-block p-4 bg-emerald-500/20 rounded-full mb-6 border-2 border-emerald-500">
            <Brain className="w-12 h-12 text-emerald-400" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Soumyajit Guha</h1>
          <p className="text-xl md:text-2xl text-emerald-400 mb-4 font-semibold">Machine Learning Enthusiast</p>
          <p className="text-lg text-gray-400 mb-8">BTech 3rd Year | Information Technology</p>

          <div className="flex justify-center gap-4 mb-8">

            <a
              href="https://github.com/Soumyajit2819"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-emerald-500/20 border border-gray-700 hover:border-emerald-500 rounded-lg transition-all hover:scale-110"
            >
              <Github className="w-6 h-6 text-emerald-400" />
            </a>

            <a
              href="mailto:Soumyajitg28@gmail.com"
              className="p-3 bg-gray-800 hover:bg-emerald-500/20 border border-gray-700 hover:border-emerald-500 rounded-lg transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6 text-emerald-400" />
            </a>

          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-emerald-500/30"
          >
            View My Work
          </button>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-emerald-400">About Me</h2>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-lg text-gray-300 leading-relaxed">
            I am a BTech student specializing in Information Technology with a passion for Machine Learning and Deep Learning. I focus on computer vision and NLP systems, exploring modern tools to build impactful solutions.
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-emerald-400">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-500/20 group"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} mb-4`}>
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <ul className="mb-4 space-y-1">
                  {project.details.map((d, i) => (
                    <li key={i} className="text-sm text-gray-500">
                      <span className="text-emerald-400 mr-2">•</span>{d}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-emerald-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-emerald-400"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-emerald-400"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live</span>
                    </a>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-emerald-400">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">{category}</h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-emerald-400">Get In Touch</h2>

          <p className="text-xl text-gray-300 mb-8">
            Feel free to reach out for collaborations, opportunities, or discussions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="mailto:Soumyajitg28@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>

            <a
              href="https://github.com/Soumyajit2819"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-emerald-500 rounded-lg font-semibold hover:scale-105"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 text-center text-gray-400">
        © 2024 Soumyajit Guha. Built with React & Tailwind CSS.
      </footer>

    </div>
  );
}
