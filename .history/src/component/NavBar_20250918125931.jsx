import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';

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
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false)
        }
    }, [])

    const toggleTheme = () => {
        setIsTransitioning(true)
        
        document.body.classList.add('theme-transition')
        
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true)
        }

        setTimeout(() => {
            setIsTransitioning(false)
            document.body.classList.remove('theme-transition')
        }, 500)
    }

    return (
        <nav className={cn(
            'fixed w-full z-40 transition-all duration-500',
            isScrolled 
                ? 'py-2 backdrop-blur-xl border-b border-white/10 dark:border-white/5' 
                : 'py-4',
            // Cosmic background effects
            isScrolled
                ? isDarkMode 
                    ? 'bg-slate-900/80 shadow-2xl shadow-purple-500/10' 
                    : 'bg-white/70 shadow-2xl shadow-sky-400/10'
                : isDarkMode
                    ? 'bg-gradient-to-r from-slate-900/60 to-slate-800/60'
                    : 'bg-gradient-to-r from-white/60 to-sky-50/60'
        )}>
            
            {/* Cosmic background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            "absolute w-1 h-1 rounded-full animate-pulse-subtle opacity-40",
                            isDarkMode ? "bg-purple-300" : "bg-sky-400"
                        )}
                        style={{
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            animationDelay: i * 0.3 + 's',
                            animationDuration: 2 + Math.random() * 2 + 's'
                        }}
                    />
                ))}
            </div>

            <div className='container flex justify-between items-center relative z-10'>
                {/* Enhanced Logo */}
                <a href='#hero' className="text-xl font-bold text-primary flex items-center group">
                    <div className="relative">
                        {/* Glow effect behind logo */}
                        <div className={cn(
                            "absolute inset-0 rounded-full blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100",
                            isDarkMode ? "bg-purple-500/30" : "bg-sky-400/30"
                        )} />
                        
                        <span className='relative z-10 flex items-center'> 
                            <Sparkles className={cn(
                                "w-5 h-5 mr-2 transition-all duration-300",
                                isDarkMode 
                                    ? "text-purple-400 group-hover:text-purple-300" 
                                    : "text-sky-500 group-hover:text-sky-400"
                            )} />
                            <span className={cn(
                                "bg-gradient-to-r bg-clip-text text-transparent font-extrabold transition-all duration-300",
                                isDarkMode
                                    ? "from-purple-400 via-pink-400 to-purple-400 group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-purple-300"
                                    : "from-sky-500 via-blue-600 to-sky-500 group-hover:from-sky-400 group-hover:via-blue-500 group-hover:to-sky-400"
                            )}>
                                Ayush
                            </span>
                            <span className={cn(
                                "bg-gradient-to-r bg-clip-text text-transparent ml-1 font-extrabold transition-all duration-300",
                                isDarkMode
                                    ? "from-pink-400 via-purple-400 to-pink-400 group-hover:from-pink-300 group-hover:via-purple-300 group-hover:to-pink-300"
                                    : "from-blue-600 via-sky-500 to-blue-600 group-hover:from-blue-500 group-hover:via-sky-400 group-hover:to-blue-500"
                            )}>
                                Portfolio
                            </span>
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex space-x-6">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className={cn(
                                    "relative text-sm font-medium transition-all duration-300 group py-2 px-3 rounded-full",
                                    "hover:scale-105",
                                    isDarkMode
                                        ? "text-slate-300 hover:text-white hover:bg-slate-800/50"
                                        : "text-slate-700 hover:text-slate-900 hover:bg-white/50"
                                )}
                            >
                                {/* Hover glow effect */}
                                <div className={cn(
                                    "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm",
                                    isDarkMode ? "bg-purple-500/20" : "bg-sky-400/20"
                                )} />
                                
                                {/* Animated underline */}
                                <div className={cn(
                                    "absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0",
                                    isDarkMode ? "bg-purple-400" : "bg-sky-500"
                                )} />
                                
                                <span className="relative z-10">{item.name}</span>
                                
                                {/* Sparkle on hover */}
                                <div className={cn(
                                    "absolute -top-1 -right-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300",
                                    isDarkMode ? "bg-purple-400" : "bg-sky-400"
                                )} />
                            </a>
                        ))}
                    </div>

                    {/* Desktop Theme Toggle */}
                    <div className="relative">
                        <div className={cn(
                            "absolute inset-0 rounded-full blur-xl transition-all duration-500",
                            isDarkMode 
                                ? 'bg-purple-500/30 animate-pulse-subtle' 
                                : 'bg-sky-400/30 animate-pulse-subtle'
                        )} />
                        
                        <button 
                            onClick={toggleTheme} 
                            className={cn(
                                "relative rounded-full p-3 transition-all duration-300 backdrop-blur-md",
                                "border border-white/20 cursor-pointer hover:scale-110 focus:outline-none",
                                isDarkMode 
                                    ? 'bg-slate-800/60 hover:bg-slate-700/70 shadow-lg shadow-purple-500/20' 
                                    : 'bg-white/60 hover:bg-white/80 shadow-lg shadow-sky-400/20',
                                isTransitioning ? 'animate-bounce' : ''
                            )}
                            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            <div className="relative">
                                {isDarkMode ? (
                                    <Sun className={cn(
                                        "h-5 w-5 text-yellow-300 transition-all duration-300",
                                        isTransitioning ? 'rotate-180 scale-125' : 'hover:rotate-12'
                                    )} />
                                ) : (
                                    <Moon className={cn(
                                        "h-5 w-5 text-blue-700 transition-all duration-300",
                                        isTransitioning ? 'rotate-180 scale-125' : 'hover:-rotate-12'
                                    )} />
                                )}
                                
                                {isDarkMode && (
                                    <>
                                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-pulse opacity-60" />
                                        <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-40" />
                                    </>
                                )}
                            </div>
                            
                            {isTransitioning && (
                                <div className="absolute inset-0 rounded-full border-2 border-current opacity-20 animate-ping" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsMenuOpen(prev => !prev)} 
                    className={cn(
                        "md:hidden p-3 rounded-full z-50 transition-all duration-300 backdrop-blur-md group",
                        "border border-white/20 hover:scale-110",
                        isDarkMode
                            ? "bg-slate-800/60 hover:bg-slate-700/70 shadow-lg shadow-purple-500/20"
                            : "bg-white/60 hover:bg-white/80 shadow-lg shadow-sky-400/20"
                    )}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {/* Glow effect */}
                    <div className={cn(
                        "absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-300",
                        isDarkMode ? "bg-purple-500/30" : "bg-sky-400/30"
                    )} />
                    
                    <div className="relative">
                        {isMenuOpen ? 
                            <X size={20} className="transition-all duration-300 rotate-0 group-hover:rotate-90" /> : 
                            <Menu size={20} className="transition-all duration-300" />
                        }
                    </div>
                </button>

                {/* Enhanced Mobile Menu */}
                <div className={cn(
                    'fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden',
                    isDarkMode
                        ? 'bg-slate-900/95'
                        : 'bg-white/95',
                    'backdrop-blur-xl',
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    {/* Mobile menu background effects */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "absolute w-2 h-2 rounded-full animate-float opacity-30",
                                    isDarkMode ? "bg-purple-400" : "bg-sky-400"
                                )}
                                style={{
                                    left: Math.random() * 100 + '%',
                                    top: Math.random() * 100 + '%',
                                    animationDelay: i * 0.2 + 's',
                                    animationDuration: 3 + Math.random() * 2 + 's'
                                }}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col space-y-6 text-center relative z-10">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className={cn(
                                    "text-2xl font-medium transition-all duration-300 group relative py-3 px-6 rounded-full",
                                    "hover:scale-110 transform",
                                    isDarkMode
                                        ? "text-slate-300 hover:text-white hover:bg-slate-800/50"
                                        : "text-slate-700 hover:text-slate-900 hover:bg-white/50",
                                    // Staggered animation
                                    isMenuOpen ? "animate-fade-in" : ""
                                )}
                                style={{
                                    animationDelay: key * 0.1 + 's'
                                }}
                                onClick={() => {
                                    setIsMenuOpen(false)
                                }}
                            >
                                {/* Hover glow */}
                                <div className={cn(
                                    "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm",
                                    isDarkMode ? "bg-purple-500/20" : "bg-sky-400/20"
                                )} />
                                
                                <span className="relative z-10">{item.name}</span>
                                
                                {/* Mobile sparkle effect */}
                                <div className={cn(
                                    "absolute -top-1 -right-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300",
                                    isDarkMode ? "bg-purple-400" : "bg-sky-400"
                                )} />
                            </a>
                        ))}

                        {/* Mobile Theme Toggle */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <div className="relative inline-block">
                                <div className={cn(
                                    "absolute inset-0 rounded-full blur-xl transition-all duration-500",
                                    isDarkMode 
                                        ? 'bg-purple-500/40 animate-pulse-subtle' 
                                        : 'bg-sky-400/40 animate-pulse-subtle'
                                )} />
                                
                                <button 
                                    onClick={toggleTheme} 
                                    className={cn(
                                        "relative rounded-full p-4 transition-all duration-300 backdrop-blur-md",
                                        "border-2 border-white/20 cursor-pointer hover:scale-110 focus:outline-none",
                                        isDarkMode 
                                            ? 'bg-slate-800/60 hover:bg-slate-700/70 shadow-xl shadow-purple-500/30' 
                                            : 'bg-white/60 hover:bg-white/80 shadow-xl shadow-sky-400/30',
                                        isTransitioning ? 'animate-bounce' : ''
                                    )}
                                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                                >
                                    <div className="relative">
                                        {isDarkMode ? (
                                            <Sun className={cn(
                                                "h-6 w-6 text-yellow-300 transition-all duration-300",
                                                isTransitioning ? 'rotate-180 scale-125' : 'hover:rotate-12'
                                            )} />
                                        ) : (
                                            <Moon className={cn(
                                                "h-6 w-6 text-blue-700 transition-all duration-300",
                                                isTransitioning ? 'rotate-180 scale-125' : 'hover:-rotate-12'
                                            )} />
                                        )}
                                        
                                        {isDarkMode && (
                                            <>
                                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-pulse opacity-60" />
                                                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-40" />
                                            </>
                                        )}
                                    </div>
                                    
                                    {isTransitioning && (
                                        <div className="absolute inset-0 rounded-full border-2 border-current opacity-20 animate-ping" />
                                    )}
                                </button>
                                
                                {/* Mobile floating particles */}
                                <div className="absolute inset-0 pointer-events-none">
                                    {[...Array(4)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={cn(
                                                "absolute w-1 h-1 rounded-full transition-all duration-500 animate-float opacity-60",
                                                isDarkMode ? 'bg-purple-300' : 'bg-sky-300'
                                            )}
                                            style={{
                                                left: Math.random() * 80 + 'px',
                                                top: Math.random() * 80 + 'px',
                                                animationDelay: i * 0.5 + 's',
                                                animationDuration: 3 + i + 's'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                            
                            <p className={cn(
                                "text-sm mt-3 opacity-70",
                                isDarkMode ? "text-slate-400" : "text-slate-600"
                            )}>
                                {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar