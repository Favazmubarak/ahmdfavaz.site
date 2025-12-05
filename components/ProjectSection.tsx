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
    <div className="min-h-screen bg-gradient-to-b from-[#013242] via-[#001015] to-[#00080b] relative overflow-hidden">
     


     



      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center relative mb-20">

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
        </section>

        
        
      </div>
    </div>
  );
}