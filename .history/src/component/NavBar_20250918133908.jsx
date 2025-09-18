import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react';

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            
            // Update active section based on scroll position
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
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <nav className={`fixed w-full z-40 transition-all duration-500 ${
            isScrolled 
                ? 'py-2 bg-background/90 backdrop-blur-xl border-b border-sky-400/20 shadow-lg shadow-sky-400/10' 
                : 'py-4 bg-transparent'
        }`}>
            
            <div className='container mx-auto px-6 flex justify-between items-center'>
                {/* Enhanced Logo */}
                <a href='#hero' className="relative group">
                    <div className="relative z-10 flex items-center space-x-1">
                        <div className="relative">
                            <span className='text-2xl font-bold bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 bg-clip-text text-transparent'>
                                Ayush
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 bg-clip-text text-transparent text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm">
                                Ayush
                            </div>
                        </div>
                        <div className="w-px h-6 bg-gradient-to-b from-transparent via-sky-400 to-transparent opacity-60"></div>
                        <span className="text-lg font-medium bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                            Portfolio
                        </span>
                    </div>
                    
                    {/* Animated underline */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 group-hover:w-full transition-all duration-500 ease-out"></div>
                </a>

                {/* Desktop Navigation with enhanced styling */}
                <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-md rounded-full border border-sky-400/20 px-2 py-2">
                    {navItems.map((item, key) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <a
                                key={key}
                                href={item.href}
                                className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                                    isActive 
                                        ? 'text-white bg-gradient-to-r from-sky-400 to-blue-600 shadow-lg shadow-sky-400/30' 
                                        : 'text-foreground/80 hover:text-sky-400 hover:bg-white/10'
                                }`}
                            >
                                <span className="relative z-10">{item.name}</span>
                                
                                {/* Hover effect background */}
                                {!isActive && (
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                )}
                                
                                {/* Active indicator dot */}
                                {isActive && (
                                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                                )}
                            </a>
                        );
                    })}
                </div>

                {/* Enhanced Mobile Menu Button */}
                <button 
                    onClick={() => setIsMenuOpen(prev => !prev)} 
                    className='md:hidden relative p-3 rounded-full bg-gradient-to-r from-sky-400/20 to-blue-600/20 backdrop-blur-md border border-sky-400/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-400/20 group'
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    <div className="relative z-10">
                        {isMenuOpen ? (
                            <X size={20} className="text-sky-400 transition-transform duration-300 rotate-90" />
                        ) : (
                            <Menu size={20} className="text-sky-400 transition-transform duration-300 group-hover:rotate-180" />
                        )}
                    </div>
                    
                    {/* Button glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
                </button>

                {/* Enhanced Mobile Menu */}
                <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}>
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-xl"></div>
                    
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-sky-400/10 to-blue-600/10 rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-600/10 to-sky-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    
                    {/* Menu content */}
                    <div className="relative flex flex-col items-center justify-center h-full space-y-8">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className={`relative group text-2xl font-medium transition-all duration-500 hover:scale-110 ${
                                    activeSection === item.href.substring(1)
                                        ? 'text-sky-400'
                                        : 'text-foreground hover:text-sky-400'
                                }`}
                                style={{
                                    animationDelay: `${key * 0.1}s`,
                                    animation: isMenuOpen ? 'fade-in 0.6s ease-out forwards' : 'none'
                                }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="relative z-10">{item.name}</span>
                                
                                {/* Animated underline */}
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 group-hover:w-full transition-all duration-500 ease-out"></div>
                                
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                            </a>
                        ))}
                        
                        {/* Mobile menu footer */}
                        <div className="absolute bottom-10 text-center">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent mb-4"></div>
                            <p className="text-sm text-foreground/60">Crafted with passion</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Progress indicator */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300" 
                 style={{width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`}}>
            </div>
        </nav>
    )
}

export default NavBar