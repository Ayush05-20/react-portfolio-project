import React, { useEffect, useState } from 'react'

const StarBackG = () => {
    const [stars, setStars] = useState([])
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [effectiveStarCount, setEffectiveStarCount] = useState(0);

    const generateStars = (starCount) => {
        const newStars = [];

        for (let i = 0; i < starCount; i++) {
            const starType = Math.random();
            let starConfig;

            if (starType < 0.6) {
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

    const calculateStarCount = (isDark) => {
        let numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 8000);
        if (!isDark) {
            numberOfStars = Math.floor(numberOfStars / 3);
        }
        return numberOfStars;
    };

    const checkTheme = () => {
        const newIsDarkMode = document.documentElement.classList.contains('dark');
        setIsDarkMode(newIsDarkMode);
        setEffectiveStarCount(calculateStarCount(newIsDarkMode));
    };

    useEffect(() => {
        // Initial setup
        checkTheme();

        const handleResize = () => {
            setEffectiveStarCount(calculateStarCount(isDarkMode));
        };

        const handleThemeChange = () => {
            checkTheme();
        };

        // Listen for theme changes and window resize
        const observer = new MutationObserver(handleThemeChange);
        observer.observe(document.documentElement, { 
            attributes: true, 
            attributeFilter: ['class'] 
        });

        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
            observer.disconnect();
        };
    }, [isDarkMode]);

    useEffect(() => {
        const currentStarCount = stars.length;
        const targetStarCount = effectiveStarCount;

        // Animate star count change
        const interval = setInterval(() => {
            if (currentStarCount < targetStarCount) {
                // Add stars one by one
                const newStarCount = Math.min(currentStarCount + 1, targetStarCount);
                generateStars(newStarCount);
            } else if (currentStarCount > targetStarCount) {
                // Remove stars one by one
                const newStarCount = Math.max(currentStarCount - 1, targetStarCount);
                generateStars(newStarCount);
            } else {
                clearInterval(interval);
            }
        }, 50); // Adjust interval for speed of transition

        return () => clearInterval(interval);
    }, [effectiveStarCount]);

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
            // Light mode: light blue stars
            const colors = star.type === 'large' ? 
                'radial-gradient(circle, #60a5fa, #3b82f6, #2563eb)' :
                star.type === 'medium' ?
                'radial-gradient(circle, #60a5fa, #3b82f6)' :
                '#60a5fa';
                
            return {
                ...baseStyle,
                background: colors,
                boxShadow: `0 0 ${star.size * 4}px ${star.size * 2}px rgba(96, 165, 250, ${star.opacity * 0.6}),
                           0 0 ${star.size * 6}px ${star.size * 3}px rgba(59, 130, 246, ${star.opacity * 0.3})`
            };
        }
    };

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {stars.map((star) => (
                <div 
                    key={star.id} 
                    className={`star absolute rounded-full transition-all duration-500 ${
                        isDarkMode ? 'animate-blink' : 'animate-blue-blink'
                    }`}
                    style={getStarStyle(star)}
                />
            ))}
            
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
                                boxShadow: '0 0 10px 2px rgba(96, 165, 250, 0.2)'
                            }}
                        />
                    ))}
                </>
            )}
        </div>
    )
}

export default StarBackG