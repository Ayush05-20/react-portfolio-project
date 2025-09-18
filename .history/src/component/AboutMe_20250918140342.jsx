import { Brain, Code, User, Zap, Target, Lightbulb, Rocket, Heart } from "lucide-react"
import React, { useState, useEffect } from "react"

const AboutMe = () => {
  const [activeOrb, setActiveOrb] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const orbData = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building sleek, responsive, and dynamic websites with React, JavaScript, HTML, and CSS.",
      color: "from-sky-400 to-blue-500",
      position: { x: 20, y: 30 }
    },
    {
      icon: Brain,
      title: "AI & Machine Learning", 
      description: "Enthusiastic about AI and ML, with hands-on experience in Python and libraries like NumPy, Pandas, Matplotlib, PyTorch.",
      color: "from-blue-500 to-purple-600",
      position: { x: 75, y: 20 }
    },
    {
      icon: User,
      title: "Problem-Solving",
      description: "Applying creative strategies to tackle challenges and deliver user-centric solutions.",
      color: "from-purple-500 to-pink-500",
      position: { x: 85, y: 70 }
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly exploring cutting-edge technologies and pushing the boundaries of what's possible.",
      color: "from-yellow-400 to-orange-500",
      position: { x: 15, y: 80 }
    }
  ];

  const floatingElements = [
    { icon: Target, delay: 0, duration: 8 },
    { icon: Lightbulb, delay: 2, duration: 10 },
    { icon: Rocket, delay: 4, duration: 9 },
    { icon: Heart, delay: 1, duration: 11 }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Auto-rotate active orb
    const interval = setInterval(() => {
      setActiveOrb(prev => (prev + 1) % orbData.length);
    }, 4000);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="about" className="relative min-h-screen py-32 px-6 overflow-hidden">
      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0">
        {/* Morphing background blobs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-sky-400/20 to-blue-600/20 rounded-full blur-3xl opacity-60 transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 - scrollY * 0.1}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl opacity-50 transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015 - scrollY * 0.05}px)`,
            right: '15%',
            bottom: '25%'
          }}
        />

        {/* Floating geometric shapes */}
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <div
              key={index}
              className="absolute opacity-10"
              style={{
                left: `${20 + index * 20}%`,
                top: `${30 + index * 15}%`,
                animation: `float ${element.duration}s ease-in-out infinite`,
                animationDelay: `${element.delay}s`
              }}
            >
              <Icon size={40 + index * 10} className="text-sky-400" />
            </div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-sky-400 to--600 to bg-clip-text text-transparent">
              About
            </span>
            <span className="mx-4 text-foreground/20">•</span>
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Me
            </span>
            
            {/* Animated underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-sky-400 to-purple-600 rounded-full">
              <div className="w-full h-full bg-gradient-to-r from-purple-600 to-sky-400 rounded-full animate-ping opacity-50"></div>
            </div>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Learner • Developer • Problem Solver • Innovator
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Constellation */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Central Avatar/Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 p-1 group cursor-pointer">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                    A
                  </span>
                </div>
                
                {/* Pulsing rings */}
                <div className="absolute inset-0 rounded-full border-2 border-sky-400/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
            </div>

            {/* Skill Orbs */}
            {orbData.map((orb, index) => {
              const Icon = orb.icon;
              const isActive = activeOrb === index;
              
              return (
                <div
                  key={index}
                  className="absolute cursor-pointer transition-all duration-500 hover:scale-110"
                  style={{
                    left: `${orb.position.x}%`,
                    top: `${orb.position.y}%`,
                    transform: isActive ? 'scale(1.2)' : 'scale(1)'
                  }}
                  onClick={() => setActiveOrb(index)}
                >
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${orb.color} p-1 group`}>
                    <div className="w-full h-full rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon size={24} className="text-sky-400" />
                    </div>
                    
                    {isActive && (
                      <>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/20 to-blue-600/20 animate-ping"></div>
                        <div className="absolute -inset-2 rounded-full border-2 border-sky-400/50 animate-pulse"></div>
                      </>
                    )}
                  </div>
                  
                  {/* Connecting line to center */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{width: '400px', height: '300px', left: '-200px', top: '-150px'}}>
                    <line
                      x1="200"
                      y1="150"
                      x2={orb.position.x * 4}
                      y2={orb.position.y * 3}
                      stroke="url(#connectionGradient)"
                      strokeWidth={isActive ? "2" : "1"}
                      strokeDasharray="5,5"
                      opacity={isActive ? "0.8" : "0.3"}
                      className="transition-all duration-300"
                    />
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Content */}
          <div className="relative">
            {/* Floating skill card */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
              {/* Active skill content */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  {React.createElement(orbData[activeOrb].icon, { 
                    size: 32, 
                    className: "text-sky-400" 
                  })}
                  <h3 className="text-2xl font-bold text-foreground">
                    {orbData[activeOrb].title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {orbData[activeOrb].description}
                </p>
              </div>

              {/* Navigation dots */}
              <div className="flex space-x-2 mb-8">
                {orbData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveOrb(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeOrb === index 
                        ? 'bg-gradient-to-r from-sky-400 to-blue-600 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Personal story */}
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  I'm a dedicated and passionate student with deep curiosity for
                  <span className="text-sky-400 font-medium"> Web Development</span>,
                  <span className="text-blue-500 font-medium"> Artificial Intelligence</span>, and
                  <span className="text-purple-500 font-medium"> Machine Learning</span>.
                </p>
                
                <p className="leading-relaxed">
                  I thrive on exploring new technologies and transforming ideas into
                  impactful solutions that blend creativity with technical expertise.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-sky-400/25 hover:scale-105 group"
                >
                  <span>Let's Connect</span>
                  <Rocket size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-sky-400/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-20">
          <div className="flex items-center space-x-4 px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Exploring • Creating • Innovating</span>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* Mouse follower trail effect */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-sky-400/30 to-blue-600/30 rounded-full pointer-events-none z-0 transition-all duration-100 blur-sm"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />
    </section>
  )
}

export default AboutMe