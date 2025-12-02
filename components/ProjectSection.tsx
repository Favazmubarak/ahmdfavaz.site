import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, Code, Zap, Cpu, Database, Layers } from 'lucide-react';

export default function MyWorksPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [floatingIcons, setFloatingIcons] = useState([]);

  const projects = [
    {
      id: 1,
      title: "Smart Task Manager",
      description: "A clean task system with reminders, smart filters, and fast UI built with React and Firebase.",
      tech: ["React", "Firebase", "Tailwind"],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=900&fit=crop',
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description: "Analytics, order control, user tracking and product management. Designed for performance and clarity.",
      tech: ["Next.js", "MongoDB", "Chart.js"],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=900&fit=crop',
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Builder",
      description: "A simple builder that lets users generate a personal website instantly using templates.",
      tech: ["Node.js", "Express", "Prisma"],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=900&fit=crop',
    },
    {
      id: 4,
      title: "Weather App",
      description: "Real-time weather tracking with forecasts and location-based alerts.",
      tech: ["React", "API", "Tailwind"],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=900&fit=crop',
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Centralized dashboard for managing multiple social media accounts.",
      tech: ["Vue.js", "Node.js", "MySQL"],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=900&fit=crop',
    }
  ];

  const iconComponents = [Sparkles, Code, Zap, Cpu, Database, Layers];

  useEffect(() => {
    // Generate random floating icons
    const icons = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      Icon: iconComponents[Math.floor(Math.random() * iconComponents.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 20 + Math.random() * 20
    }));
    setFloatingIcons(icons);

    // Auto-slide carousel
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (projects.length - 2));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (projects.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (projects.length - 2)) % (projects.length - 2));
  };

  const visibleProjects = [
    projects[currentIndex],
    projects[currentIndex + 1],
    projects[currentIndex + 2]
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black relative overflow-hidden">
      {/* Animated Background Elements with more transparency */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Glass overlay with more transparency */}
      <div className="absolute inset-0 bg-white/3 backdrop-blur-sm"></div>

      {/* Floating Icons */}
      {floatingIcons.map(({ id, Icon, left, top, delay, duration, size }) => (
        <div
          key={id}
          className="absolute pointer-events-none"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            animation: `float ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`
          }}
        >
          <Icon 
            className="text-blue-400/20" 
            style={{ width: size, height: size }}
          />
        </div>
      ))}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translate(30px, -30px) rotate(90deg);
            opacity: 0.6;
          }
          50% {
            transform: translate(-20px, -60px) rotate(180deg);
            opacity: 0.4;
          }
          75% {
            transform: translate(40px, -30px) rotate(270deg);
            opacity: 0.5;
          }
        }
      `}</style>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center relative mb-20">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 hover:scale-110 transition-all text-white shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
              My Works
            </span>
          </h2>
          <p className="text-blue-200/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore my latest projects showcasing modern web development,<br />
            innovative solutions, and clean design principles that bring<br />
            ideas to life with cutting-edge technologies.
          </p>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 hover:scale-110 transition-all text-white shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </section>

        {/* Projects Carousel */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {visibleProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-blue-500/30"
                style={{ 
                  height: index === 1 ? '650px' : '550px',
                  marginTop: index === 1 ? '-50px' : '0',
                  animation: `floatCard ${8 + index * 2}s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`
                }}
              >
                {/* Image with animation */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
                  {/* Extra transparent overlay */}
                  <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-sm"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 group-hover:translate-y-0">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-blue-300">{project.title}</h3>
                  <p className="text-sm md:text-base text-gray-200/90 mb-4 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600/30 border border-blue-400/40 backdrop-blur-xl rounded-md text-xs md:text-sm text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="w-10 h-10 bg-blue-500/30 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-blue-500 transition-all border border-blue-400/50 opacity-0 group-hover:opacity-100">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Featured Badge with transparency */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-4 py-2 bg-blue-500/80 backdrop-blur-xl rounded-full text-xs font-medium text-white border border-blue-300/50 shadow-lg">
                    Featured
                  </div>
                )}

                {/* Hover Border Glow with transparency */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/40 rounded-3xl transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </section>

        <style>{`
          @keyframes floatCard {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2">
          {[...Array(projects.length - 2)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 backdrop-blur-md ${
                index === currentIndex ? 'w-8 bg-blue-400/80 shadow-lg shadow-blue-400/50' : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}