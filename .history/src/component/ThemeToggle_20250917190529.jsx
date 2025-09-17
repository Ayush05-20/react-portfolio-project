import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])
    const [nebula, setNebula] = useState([])
    const [shootingStars, setShootingStars] = useState([])

    useEffect(() => {
        generateStars();
        generateMeteors();
        generateNebula();
        generateShootingStars();

        const handleResize = () => {
            generateStars();
            generateMeteors();
            generateNebula();
            generateShootingStars();
        }

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 8000)
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            const starType = Math.random();
            let color = 'rgb(255, 255, 255)';
            let glowColor = 'rgba(255, 255, 255, 0.5)';
            
            // Different star colors based on stellar classification
            if (starType < 0.1) { // Blue giants
                color = 'rgb(135, 206, 250)';
                glowColor = 'rgba(135, 206, 250, 0.6)';
            } else if (starType < 0.3) { // Red giants
                color = 'rgb(255, 99, 71)';
                glowColor = 'rgba(255, 99, 71, 0.5)';
            } else if (starType < 0.5) { // Yellow stars
                color = 'rgb(255, 255, 140)';
                glowColor = 'rgba(255, 255, 140, 0.4)';
            }

            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
                animationDelay: Math.random() * 8,
                color: color,
                glowColor: glowColor,
                pulseSpeed: Math.random() * 3 + 1
            })
        }
        setStars(newStars)
    }

    const generateMeteors = () => {
        const numberOfMeteors = 6
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 30,
                delay: Math.random() * 20,
                animationDuration: Math.random() * 4 + 2,
                angle: Math.random() * 60 + 195 // Varying meteor angles
            })
        }
        setMeteors(newMeteors)
    }

    const generateNebula = () => {
        const numberOfNebulae = 3
        const newNebula = [];
        const colors = [
            'rgba(147, 51, 234, 0.15)', // Purple
            'rgba(59, 130, 246, 0.12)', // Blue
            'rgba(236, 72, 153, 0.13)'  // Pink
        ];

        for (let i = 0; i < numberOfNebulae; i++) {
            newNebula.push({
                id: i,
                size: Math.random() * 400 + 200,
                x: Math.random() * 120 - 10, // Allow some overflow for edge effect
                y: Math.random() * 120 - 10,
                color: colors[i % colors.length],
                animationDuration: Math.random() * 20 + 15,
                animationDelay: Math.random() * 10
            })
        }
        setNebula(newNebula)
    }

    const generateShootingStars = () => {
        const numberOfShootingStars = 2
        const newShootingStars = [];

        for (let i = 0; i < numberOfShootingStars; i++) {
            newShootingStars.push({
                id: i,
                x: Math.random() * 50,
                y: Math.random() * 50,
                delay: Math.random() * 15 + 5,
                animationDuration: Math.random() * 2 + 1
            })
        }
        setShootingStars(newShootingStars)
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Dynamic gradient background */}
            <div 
                className="absolute inset-0 opacity-80"
                style={{
                    background: `
                        radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
                        linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)
                    `
                }}
            />

            {/* Nebula clouds */}
            {nebula.map((cloud) => (
                <div
                    key={`nebula-${cloud.id}`}
                    className="absolute rounded-full blur-3xl opacity-40"
                    style={{
                        width: cloud.size + 'px',
                        height: cloud.size + 'px',
                        left: cloud.x + '%',
                        top: cloud.y + '%',
                        background: `radial-gradient(circle, ${cloud.color} 0%, transparent 70%)`,
                        animation: `float ${cloud.animationDuration}s ease-in-out infinite`,
                        animationDelay: cloud.animationDelay + 's'
                    }}
                />
            ))}

            {/* Enhanced stars with different colors */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full"
                    style={{
                        width: star.size + 'px',
                        height: star.size + 'px',
                        left: star.x + '%',
                        top: star.y + '%',
                        backgroundColor: star.color,
                        opacity: star.opacity,
                        boxShadow: `
                            0 0 ${star.size * 3}px ${star.size}px ${star.glowColor},
                            0 0 ${star.size * 6}px ${star.size * 2}px ${star.glowColor.replace('0.5', '0.2')}
                        `,
                        animation: `
                            twinkle ${star.animationDuration}s ease-in-out infinite,
                            pulse ${star.pulseSpeed}s ease-in-out infinite alternate
                        `,
                        animationDelay: star.animationDelay + 's'
                    }}
                />
            ))}

            {/* Enhanced meteors */}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="absolute"
                    style={{
                        width: meteor.size * 80 + 'px',
                        height: meteor.size * 2 + 'px',
                        left: meteor.x + '%',
                        top: meteor.y + '%',
                        background: `linear-gradient(${meteor.angle}deg, 
                            rgba(255, 255, 255, 0.9) 0%, 
                            rgba(135, 206, 250, 0.6) 30%,
                            rgba(255, 255, 255, 0.3) 60%,
                            transparent 100%)`,
                        borderRadius: '50%',
                        boxShadow: `0 0 20px 5px rgba(255, 255, 255, 0.3)`,
                        animation: `meteorFall ${meteor.animationDuration}s linear infinite`,
                        animationDelay: meteor.delay + 's',
                        transform: `rotate(${meteor.angle}deg)`
                    }}
                />
            ))}

            {/* Shooting stars */}
            {shootingStars.map((shootingStar) => (
                <div
                    key={`shooting-${shootingStar.id}`}
                    className="absolute"
                    style={{
                        width: '200px',
                        height: '2px',
                        left: shootingStar.x + '%',
                        top: shootingStar.y + '%',
                        background: `linear-gradient(90deg, 
                            rgba(255, 255, 255, 0) 0%,
                            rgba(255, 255, 255, 0.8) 30%,
                            rgba(135, 206, 250, 1) 60%,
                            rgba(255, 255, 255, 0.8) 80%,
                            rgba(255, 255, 255, 0) 100%)`,
                        borderRadius: '50%',
                        boxShadow: '0 0 10px 2px rgba(135, 206, 250, 0.5)',
                        animation: `shootingStarTrail ${shootingStar.animationDuration}s ease-out infinite`,
                        animationDelay: shootingStar.delay + 's',
                        transform: 'rotate(-30deg)'
                    }}
                />
            ))}

            {/* Constellation lines (subtle connecting lines between some stars) */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
                <defs>
                    <linearGradient id="constellationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(135, 206, 250, 0.3)" />
                        <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
                        <stop offset="100%" stopColor="rgba(135, 206, 250, 0.3)" />
                    </linearGradient>
                </defs>
                {stars.slice(0, 8).map((star, index) => {
                    if (index < stars.length - 1) {
                        const nextStar = stars[index + 1];
                        return (
                            <line
                                key={`constellation-${index}`}
                                x1={`${star.x}%`}
                                y1={`${star.y}%`}
                                x2={`${nextStar.x}%`}
                                y2={`${nextStar.y}%`}
                                stroke="url(#constellationGradient)"
                                strokeWidth="1"
                                opacity="0.3"
                            />
                        );
                    }
                    return null;
                })}
            </svg>

            {/* CSS animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-20px) scale(1.1); }
                }
                
                @keyframes twinkle {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    25% { opacity: 0.3; transform: scale(0.8); }
                    50% { opacity: 0.8; transform: scale(1.2); }
                    75% { opacity: 0.6; transform: scale(0.9); }
                }
                
                @keyframes pulse {
                    0% { filter: brightness(1); }
                    100% { filter: brightness(1.3); }
                }
                
                @keyframes meteorFall {
                    0% { 
                        transform: translateX(0) translateY(0) rotate(var(--angle));
                        opacity: 0;
                    }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { 
                        transform: translateX(-800px) translateY(400px) rotate(var(--angle));
                        opacity: 0;
                    }
                }
                
                @keyframes shootingStarTrail {
                    0% { 
                        transform: translateX(-200px) translateY(100px) rotate(-30deg);
                        opacity: 0;
                    }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { 
                        transform: translateX(calc(100vw + 200px)) translateY(-100px) rotate(-30deg);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    )
}

export default ThemeToggle