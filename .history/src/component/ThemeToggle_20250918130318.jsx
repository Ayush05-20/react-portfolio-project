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
                isDarkMode ? 'bg-purple-500 opacity-70' : 'bg-sky-500 opacity-70'
            }`} />
            <button
                onClick={toggleTheme}
                className={`relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isDarkMode ? 'bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md ring-purple-500' : 'bg-gradient-to-r from-sky-400 to-blue-600 shadow-md ring-sky-500'
                } hover:scale-105 active:scale-95`}
            >
                {isDarkMode ? (
                    <Moon size={24} className="text-white drop-shadow-lg transition-transform duration-500 transform-gpu rotate-0 scale-100" />
                ) : (
                    <Sun size={24} className="text-yellow-300 drop-shadow-lg transition-transform duration-500 transform-gpu rotate-180 scale-100" />
                )}
                
                {/* Star/Particle effects */}
                {isDarkMode && (
                    <>
                        <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-twinkle animation-delay-500 opacity-80" />
                        <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-gray-200 rounded-full animate-twinkle animation-delay-1500 opacity-70" />
                        <div className="absolute top-5 right-5 w-1 h-1 bg-gray-300 rounded-full animate-twinkle animation-delay-2000 opacity-60" />
                    </>
                )}
                
                {!isDarkMode && (
                    <>
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-twinkle opacity-60" />
                        <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-yellow-400 rounded-full animate-twinkle animation-delay-1000 opacity-40" />
                    </>
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