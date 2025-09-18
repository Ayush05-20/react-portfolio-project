import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

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
        
        // Add smooth transition class to body
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

        // Remove transition class after animation
        setTimeout(() => {
            setIsTransitioning(false)
            document.body.classList.remove('theme-transition')
        }, 500)
    }

    return (
        <div className="fixed top-5 right-5 z-50">
            {/* Cosmic glow effect */}
            <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
                isDarkMode 
                    ? 'bg-purple-500/30 animate-pulse-subtle' 
                    : 'bg-sky-400/30 animate-pulse-subtle'
            }`} />
            
            <button 
                onClick={toggleTheme} 
                className={`relative max-sm:hidden rounded-full p-3 transition-all duration-300 backdrop-blur-md
                    border border-white/20 cursor-pointer hover:scale-110 focus:outline-none
                    ${isDarkMode 
                        ? 'bg-slate-800/60 hover:bg-slate-700/70 shadow-lg shadow-purple-500/20' 
                        : 'bg-white/60 hover:bg-white/80 shadow-lg shadow-sky-400/20'
                    }
                    ${isTransitioning ? 'animate-bounce' : ''}
                `}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
                <div className="relative">
                    {isDarkMode ? (
                        <Sun className={`h-6 w-6 text-yellow-300 transition-all duration-300 ${
                            isTransitioning ? 'rotate-180 scale-125' : 'hover:rotate-12'
                        }`} />
                    ) : (
                        <Moon className={`h-6 w-6 text-blue-700 transition-all duration-300 ${
                            isTransitioning ? 'rotate-180 scale-125' : 'hover:-rotate-12'
                        }`} />
                    )}
                    
                    {/* Sparkle effects */}
                    {isDarkMode && (
                        <>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-twinkle opacity-60" />
                            <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-yellow-400 rounded-full animate-twinkle animation-delay-1000 opacity-40" />
                        </>
                    )}
                </div>
                
                {/* Ripple effect on click */}
                {isTransitioning && (
                    <div className="absolute inset-0 rounded-full border-2 border-current opacity-20 animate-ping" />
                )}
            </button>
            
            {/* Floating particles around the button */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full transition-all duration-500 ${
                            isDarkMode ? 'bg-purple-300' : 'bg-sky-300'
                        } animate-float opacity-60`}
                        style={{
                            left: Math.random() * 60 + 'px',
                            top: Math.random() * 60 + 'px',
                            animationDelay: i * 0.5 + 's',
                            animationDuration: 3 + i + 's'
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default ThemeToggle