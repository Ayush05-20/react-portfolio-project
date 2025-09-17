import React, { useEffect, useState } from 'react'

const StarBackG = () => {
    const [stars, setStars] = useState([])
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        generateStars();
        checkTheme();

        const handleResize = () => {
            generateStars();
        }

        const handleThemeChange = () => {
            checkTheme();
        }

        // Listen for theme changes
        const observer = new MutationObserver(handleThemeChange);
        observer.observe(document.documentElement, { 
            attributes: true, 
            attributeFilter: ['class'] 
        });

        window.addEventListener("resize", handleResize)
        
        return () => {
            window.removeEventListener("resize", handleResize)
            observer.disconnect();
        }
    }, [])

    const checkTheme = () => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 8000) // More stars for better effect
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            // Create different types of stars with varying properties
            const starType = Math.random();
            let starConfig;

            if (starType < 0.6) {
                // Regular small stars
                starConfig = {
                    id: i,
                    size: Math.random() * 2 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.4 + 0.6,
                    animationDuration: Math.random() * 3 + 2,
                    animationDelay: Math.random() * 5,
                    type: 'small'
                }
            } else if (starType < 0.85) {
                // Medium glowing stars
                starConfig = {
                    id: i,
                    size: Math.random() * 3 + 2,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.3 + 0.7,
                    animationDuration: Math.random() * 4 + 3,
                    animationDelay: Math.random() * 8,
                    type: 'medium'
                }
            } else {
                // Large bright stars
                starConfig = {
                    id: i,
                    size: Math.random() * 4 + 3,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.2 + 0.8,
                    animationDuration: Math.random() * 5 + 4,
                    animationDelay: Math.random() * 10,
                    type: 'large'
                }
            }

            newStars.push(starConfig);
        }
        setStars(newStars)
    }

    const getStarStyle = (star) => {
        const baseStyle = {
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + '%',
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            animationDelay: star.animationDelay + "s",
        };

        if (isDarkMode) {
            // Dark mode: white/blue stars
            return {
                ...baseStyle,
                background: star.type === 'large' ? 
                    'radial-gradient(circle, #ffffff, #bfdbfe)' : 
                    '#ffffff',
                boxShadow: `0 0 ${star.size * 3}px ${star.size}px rgba(255, 255, 255, ${star.opacity * 0.5})`
            };
        } else {
            // Light mode: golden/orange stars
            const colors = star.type === 'large' ? 
    'radial-gradient(circle, #60a5fa, #3b82f6, #2563eb)' :
    star.type === 'medium' ?
    'radial-gradient(circle, #60a5fa, #3b82f6)' :
    '#60a5fa';
                
            return {
                ...baseStyle,
                background: colors,
                boxShadow: `0 0 ${star.size * 4}px ${star.size * 2}px rgba(251, 191, 36, ${star.opacity * 0.6}),
                           0 0 ${star.size * 6}px ${star.size * 3}px rgba(249, 115, 22, ${star.opacity * 0.3})`
            };
        }
    };

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {stars.map((star) => (
                <div 
                    key={star.id} 
                    className={`star absolute rounded-full transition-all duration-500 ${
                        isDarkMode ? 'animate-blink' : 'animate-golden-blink'
                    }`}
                    style={getStarStyle(star)}
                />
            ))}
            
            {/* Add some floating cosmic particles for light mode */}
            {!isDarkMode && (
                <>
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={`particle-${i}`}
                            className="absolute rounded-full animate-float opacity-40"
                            style={{
                                width: '3px',
                                height: '3px',
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                                ackground: 'linear-gradient(45deg, #60a5fa, #3b82f6)',
                                animationDelay: i * 0.8 + 's',
                                animationDuration: 6 + i + 's',
                                boxShadow: '0 0 10px 2px rgba(236, 72, 153, 0.3)'
                            }}
                        />
                    ))}
                </>
            )}
        </div>
    )
}

export default StarBackG