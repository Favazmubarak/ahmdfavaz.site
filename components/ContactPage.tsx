import { useState } from 'react';
import { Menu, Send, Facebook, Instagram, Music } from 'lucide-react';

export default function ContactPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

      {/* Header */}
      <div className="absolute top-8 left-8 z-20">
        <h2 className="text-2xl font-serif italic text-white">AHAMMED<br/>FAVAZ K M</h2>
      </div>

      {/* Menu Button */}
      <div className="absolute top-8 right-8 z-20">
        <button className="w-14 h-14 rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 hover:scale-110 transition-all duration-300 text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-8 relative z-10">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left Side - Typography */}
          <div className="flex flex-col justify-center">
            <h1 className="text-7xl lg:text-8xl xl:text-9xl font-serif leading-none mb-8">
              <span className="block text-white">Want to</span>
              <span className="block italic bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">start</span>
              <span className="block italic bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">a new</span>
              <span className="block text-white">project?</span>
            </h1>
            <p className="text-xl font-serif italic mt-4 text-blue-200">Or just say hello.</p>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col justify-center space-y-10">
            {/* Email */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300">
              <a 
                href="mailto:favazmubarak.devxtra@gmail.com" 
                className="text-xl lg:text-xl font-light text-white hover:text-blue-300 transition-all inline-block"
              >
              favazmubarak.devxtra.com
              </a>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="#" 
                className="flex items-center space-x-3 text-lg text-white hover:text-blue-300 transition-all group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-blue-400/50 hover:scale-105"
              >
                <Music className="w-5 h-5" />
                <span>Vimeo</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-3 text-lg text-white hover:text-blue-300 transition-all bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-blue-400/50 hover:scale-105"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-3 text-lg text-white hover:text-blue-300 transition-all bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-blue-400/50 hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-3 text-lg text-white hover:text-blue-300 transition-all bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-blue-400/50 hover:scale-105"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
                <span>Spotify</span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-2xl font-serif mb-6 text-white">Newsletter</h3>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl py-4 px-6 pr-14 text-lg text-white focus:outline-none placeholder-blue-200/50 transition-all focus:border-blue-400 focus:bg-white/15"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                />
                <button
                  onClick={handleSubmit}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500 hover:bg-blue-400 rounded-lg flex items-center justify-center hover:scale-110 transition-all shadow-lg hover:shadow-blue-500/50"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-8 right-8 opacity-20">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-300">
          <path d="M0 30 Q 30 0, 60 30 T 120 30" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    </div>
  );
}