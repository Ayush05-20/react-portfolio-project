import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react';

const navItems = [
    {name: "Home", href: "#hero", icon: "🏠"},
    {name: "About", href: "#about", icon: "👨‍💻"},
    {name: "Skills", href: "#skills", icon: "⚡"},
    {name: "Projects", href: "#projects", icon: "🚀"},
    {name: "Contact", href: "#contact", icon: "💫"},
]

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        }

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }
        
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [])

    return (
        <>
            {/* Floating Orb Navigation */}
            <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
                <div className="relative">
                    {/* Central Hub */}
                    <div className={`relative w-16 h-16 rounded-full transition-all duration-700 ${
                        isScrolled 
                            ? 'bg-gradient-to-br from-sky-400/30 to-blue-600/30 backdrop-blur-xl border border-sky-400/40' 
                            : 'bg-gradient-to-br from-sky-400/20 to-blue-600/20 backdrop-blur-md border border-sky-400/20'
                    }`}>
                        <a href="#hero" className="absolute inset-0 flex items-center justify-center group">
                            <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                A
                            </div>
                        </a>
                        
                        {/* Rotating Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-sky-400 to-blue-600 animate-spin-slow opacity-30" 
                             style={{animationDuration: '20s'}}></div>
                    </div>

                    {/* Orbiting Navigation Items */}
                    {navItems.map((item, index) => {
                        const angle = (index * 72) - 90; // 360/5 = 72 degrees between items
                        const radius = 80;
                        const x = Math.cos(angle * Math.PI / 180) * radius;
                        const y = Math.sin(angle * Math.PI / 180) * radius;
                        const isActive = activeSection === item.href.substring(1);

                        return (
                            <div
                                key={index}
                                className="absolute top-8 left-8 transition-all duration-500 hover:scale-125"
                                style={{
                                    transform: `translate(${x}px, ${y}px)`,
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                <a
                                    href={item.href}
                                    className={`relative flex items-center justify-center w-12 h-12 rounded-full group transition-all duration-300 ${
                                        isActive 
                                            ? 'bg-gradient-to-r from-sky-400 to-blue-600 shadow-xl shadow-sky-400/40 scale-110' 
                                            : 'bg-white/10 backdrop-blur-md border border-sky-400/30 hover:bg-gradient-to-r hover:from-sky-400/50 hover:to-blue-600/50'
                                    }`}
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    
                                    {/* Tooltip */}
                                    <div className="absolute top-full mt-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                        {item.name}
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-black/80"></div>
                                    </div>
                                    
                                    {/* Active pulse */}
                                    {isActive && (
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 animate-ping opacity-20"></div>
                                    )}
                                </a>
                            </div>
                        );
                    })}

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{width: '200px', height: '200px', left: '-92px', top: '-92px'}}>
                        {navItems.map((_, index) => {
                            const angle = (index * 72) - 90;
                            const radius = 80;
                            const x1 = 100; // center
                            const y1 = 100; // center
                            const x2 = x1 + Math.cos(angle * Math.PI / 180) * radius;
                            const y2 = y1 + Math.sin(angle * Math.PI / 180) * radius;
                            
                            return (
                                <line
                                    key={index}
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke="url(#gradient)"
                                    strokeWidth="1"
                                    opacity="0.3"
                                    className="transition-opacity duration-300 hover:opacity-60"
                                />
                            );
                        })}
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#38bdf8" />
                                <stop offset="100%" stopColor="#2563eb" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* Vertical Side Navigation for medium screens */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex lg:hidden flex-col space-y-4">
                {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                        <a
                            key={index}
                            href={item.href}
                            className={`relative group flex items-center transition-all duration-300 ${
                                isActive ? 'translate-x-2' : 'hover:translate-x-1'
                            }`}
                        >
                            <div className={`w-12 h-12 rounded-l-full flex items-center justify-center transition-all duration-300 ${
                                isActive 
                                    ? 'bg-gradient-to-r from-sky-400 to-blue-600 shadow-xl shadow-sky-400/40' 
                                    : 'bg-white/10 backdrop-blur-md border-l border-t border-b border-sky-400/30 group-hover:bg-gradient-to-r group-hover:from-sky-400/50 group-hover:to-blue-600/50'
                            }`}>
                                <span className="text-lg">{item.icon}</span>
                            </div>
                            
                            {/* Expanding label */}
                            <div className={`overflow-hidden transition-all duration-300 bg-gradient-to-r from-sky-400 to-blue-600 rounded-r-full ${
                                isActive || 'group-hover:'
                            } ${isActive ? 'w-24 opacity-100' : 'w-0 opacity-0 group-hover:w-20 group-hover:opacity-100'}`}>
                                <div className="px-4 py-3 text-white text-sm font-medium whitespace-nowrap">
                                    {item.name}
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden fixed top-4 left-4 right-4 z-50">
                <div className={`flex justify-between items-center p-4 rounded-2xl transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-background/90 backdrop-blur-xl border border-sky-400/20' 
                        : 'bg-white/5 backdrop-blur-md'
                }`}>
                    {/* Mobile Logo */}
                    <a href="#hero" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                            Portfolio
                        </span>
                    </a>

                    {/* Morphing Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(prev => !prev)} 
                        className="relative w-12 h-12 rounded-full bg-gradient-to-r from-sky-400/20 to-blue-600/20 backdrop-blur-md border border-sky-400/30 flex items-center justify-center group overflow-hidden"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        <div className="relative z-10 transition-all duration-500">
                            {isMenuOpen ? (
                                <X size={20} className="text-sky-400 rotate-180" />
                            ) : (
                                <div className="space-y-1">
                                    <div className="w-4 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-5"></div>
                                    <div className="w-3 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-5"></div>
                                    <div className="w-5 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-5"></div>
                                </div>
                            )}
                        </div>
                        
                        {/* Morphing background */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-500 ${
                            isMenuOpen ? 'scale-100 opacity-20' : 'scale-0 opacity-0'
                        }`}></div>
                    </button>
                </div>
            </div>

            {/* Revolutionary Mobile Menu */}
            <div className={`md:hidden fixed inset-0 z-40 transition-all duration-700 ${
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background backdrop-blur-2xl">
                    {/* Floating orbs */}
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-gradient-to-r from-sky-400/10 to-blue-600/10 animate-float"
                            style={{
                                width: `${Math.random() * 100 + 50}px`,
                                height: `${Math.random() * 100 + 50}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}
                        />
                    ))}
                </div>
                
                {/* Hexagonal menu */}
                <div className="relative flex items-center justify-center h-full">
                    <div className="relative w-80 h-80">
                        {/* Center hub */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 flex items-center justify-center shadow-2xl shadow-sky-400/30">
                            <span className="text-2xl font-bold text-white">A</span>
                        </div>
                        
                        {/* Menu items in hexagonal pattern */}
                        {navItems.map((item, index) => {
                            const angle = (index * 72) - 90;
                            const radius = 120;
                            const x = Math.cos(angle * Math.PI / 180) * radius;
                            const y = Math.sin(angle * Math.PI / 180) * radius;

                            return (
                                <div
                                    key={index}
                                    className="absolute top-1/2 left-1/2 transition-all duration-700 hover:scale-110"
                                    style={{
                                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                        transitionDelay: `${index * 0.1}s`
                                    }}
                                >
                                    <a
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex flex-col items-center space-y-2 group"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-sky-400/30 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-sky-400/30 group-hover:to-blue-600/30 group-hover:border-sky-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-sky-400/20">
                                            <span className="text-2xl">{item.icon}</span>
                                        </div>
                                        <span className="text-sm font-medium text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {item.name}
                                        </span>
                                    </a>
                                </div>
                            );
                        })}
                        
                        {/* Connecting lines */}
                        <svg className="absolute inset-0 w-full h-full opacity-20">
                            {navItems.map((_, index) => {
                                const angle = (index * 72) - 90;
                                const radius = 120;
                                const x1 = 160; // center
                                const y1 = 160; // center
                                const x2 = x1 + Math.cos(angle * Math.PI / 180) * radius;
                                const y2 = y1 + Math.sin(angle * Math.PI / 180) * radius;
                                
                                return (
                                    <line
                                        key={index}
                                        x1={x1}
                                        y1={y1}
                                        x2={x2}
                                        y2={y2}
                                        stroke="url(#mobileGradient)"
                                        strokeWidth="1"
                                        strokeDasharray="5,5"
                                        className="animate-pulse"
                                    />
                                );
                            })}
                            <defs>
                                <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#38bdf8" />
                                    <stop offset="100%" stopColor="#2563eb" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Mouse follower effect (desktop only) */}
            <div 
                className="fixed w-4 h-4 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full pointer-events-none z-30 opacity-20 transition-opacity duration-300 hidden lg:block"
                style={{
                    left: mousePosition.x - 8,
                    top: mousePosition.y - 8,
                    transition: 'left 0.1s ease-out, top 0.1s ease-out'
                }}
            />
        </>
    )
}

export default NavBar