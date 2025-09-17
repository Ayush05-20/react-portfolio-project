import React, { useEffect, useState, useRef } from 'react'

const CosmicBackground = () => {
    const [particles, setParticles] = useState([])
    const [nebulaClouds, setNebulaClouds] = useState([])
    const [pulsars, setPulsars] = useState([])
    const [energyRipples, setEnergyRipples] = useState([])
    const [isDarkMode, setIsDarkMode] = useState(false)
    const canvasRef = useRef(null)
    const animationRef = useRef(null)

    useEffect(() => {
        checkTheme()
        generateParticles()
        generateNebulaClouds()
        generatePulsars()
        initCanvas()
        startAnimation()

        const handleResize = () => {
            generateParticles()
            generateNebulaClouds()
            generatePulsars()
            initCanvas()
        }

        const observer = new MutationObserver(() => {
            checkTheme()
        })

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        })

        window.addEventListener("resize", handleResize)
        
        return () => {
            window.removeEventListener("resize", handleResize)
            observer.disconnect()
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    const checkTheme = () => {
        const isDark = document.documentElement.classList.contains('dark')
        setIsDarkMode(isDark)
    }

    const initCanvas = () => {
        const canvas = canvasRef.current
        if (!canvas) return
        
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }

    const generateParticles = () => {
        const numberOfParticles = Math.floor(window.innerWidth * window.innerHeight / 15000)
        const newParticles = []

        for (let i = 0; i < numberOfParticles; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 4 + 1,
                speed: Math.random() * 0.5 + 0.1,
                direction: Math.random() * Math.PI * 2,
                opacity: Math.random() * 0.7 + 0.3,
                color: Math.random() > 0.7 ? 'cosmic' : 'normal',
                pulsePhase: Math.random() * Math.PI * 2
            })
        }
        setParticles(newParticles)
    }

    const generateNebulaClouds = () => {
        const numberOfClouds = 8
        const newClouds = []

        for (let i = 0; i < numberOfClouds; i++) {
            newClouds.push({
                id: i,
                x: Math.random() * 120 - 10,
                y: Math.random() * 120 - 10,
                size: Math.random() * 400 + 200,
                opacity: Math.random() * 0.3 + 0.1,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 0.2,
                color: ['purple', 'blue', 'pink', 'cyan'][Math.floor(Math.random() * 4)]
            })
        }
        setNebulaClouds(newClouds)
    }

    const generatePulsars = () => {
        const numberOfPulsars = 6
        const newPulsars = []

        for (let i = 0; i < numberOfPulsars; i++) {
            newPulsars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                intensity: Math.random() * 0.8 + 0.2,
                pulseSpeed: Math.random() * 2 + 1,
                delay: Math.random() * 5,
                color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'][Math.floor(Math.random() * 5)]
            })
        }
        setPulsars(newPulsars)
    }

    const createEnergyRipple = (x, y) => {
        const newRipple = {
            id: Date.now(),
            x: x,
            y: y,
            radius: 0,
            maxRadius: 200,
            opacity: 1
        }
        
        setEnergyRipples(prev => [...prev, newRipple])
        
        setTimeout(() => {
            setEnergyRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
        }, 2000)
    }

    const startAnimation = () => {
        const animate = () => {
            const canvas = canvasRef.current
            if (!canvas) return
            
            const ctx = canvas.getContext('2d')
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            // Draw flowing energy lines
            drawEnergyLines(ctx)
            
            animationRef.current = requestAnimationFrame(animate)
        }
        animate()
    }

    const drawEnergyLines = (ctx) => {
        const time = Date.now() * 0.001
        const lines = 5
        
        for (let i = 0; i < lines; i++) {
            ctx.beginPath()
            ctx.strokeStyle = isDarkMode 
                ? `rgba(100, 200, 255, ${0.1 + Math.sin(time + i) * 0.1})` 
                : `rgba(59, 130, 246, ${0.05 + Math.sin(time + i) * 0.05})`
            ctx.lineWidth = 2
            
            const y = (i / lines) * canvas.height + Math.sin(time + i * 2) * 50
            
            ctx.moveTo(0, y)
            for (let x = 0; x < canvas.width; x += 20) {
                const waveY = y + Math.sin((x * 0.01) + time + i) * 30
                ctx.lineTo(x, waveY)
            }
            ctx.stroke()
        }
    }

    const handleCanvasClick = (e) => {
        const rect = canvasRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        createEnergyRipple(x, y)
    }

    const getParticleStyle = (particle) => ({
        position: 'absolute',
        left: particle.x + '%',
        top: particle.y + '%',
        width: particle.size + 'px',
        height: particle.size + 'px',
        borderRadius: '50%',
        opacity: particle.opacity,
        background: particle.color === 'cosmic' 
            ? (isDarkMode 
                ? 'radial-gradient(circle, #ff6b6b, #4ecdc4, #45b7d1)' 
                : 'radial-gradient(circle, #6366f1, #8b5cf6, #ec4899)')
            : (isDarkMode ? '#ffffff' : '#1e293b'),
        boxShadow: particle.color === 'cosmic'
            ? `0 0 ${particle.size * 4}px ${particle.size}px ${isDarkMode ? 'rgba(255, 107, 107, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`
            : `0 0 ${particle.size * 2}px rgba(255, 255, 255, 0.4)`,
        animation: `cosmicFloat ${3 + particle.speed * 2}s ease-in-out infinite, cosmicPulse ${2 + particle.speed}s ease-in-out infinite`,
        animationDelay: `${particle.pulsePhase}s`
    })

    const getNebulaStyle = (cloud) => ({
        position: 'absolute',
        left: cloud.x + '%',
        top: cloud.y + '%',
        width: cloud.size + 'px',
        height: cloud.size + 'px',
        opacity: cloud.opacity,
        borderRadius: '50%',
        background: isDarkMode 
            ? getNebulaGradient(cloud.color, 'dark')
            : getNebulaGradient(cloud.color, 'light'),
        filter: 'blur(40px)',
        animation: `nebulaRotate ${20 + cloud.rotationSpeed * 10}s linear infinite`,
        transform: `rotate(${cloud.rotation}deg)`
    })

    const getNebulaGradient = (color, theme) => {
        const gradients = {
            dark: {
                purple: 'radial-gradient(circle, rgba(147, 51, 234, 0.3), rgba(79, 70, 229, 0.2), transparent)',
                blue: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(147, 197, 253, 0.2), transparent)',
                pink: 'radial-gradient(circle, rgba(236, 72, 153, 0.3), rgba(251, 113, 133, 0.2), transparent)',
                cyan: 'radial-gradient(circle, rgba(34, 197, 94, 0.3), rgba(52, 211, 153, 0.2), transparent)'
            },
            light: {
                purple: 'radial-gradient(circle, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1), transparent)',
                blue: 'radial-gradient(circle, rgba(59, 130, 246, 0.15), rgba(147, 197, 253, 0.1), transparent)',
                pink: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), rgba(251, 113, 133, 0.1), transparent)',
                cyan: 'radial-gradient(circle, rgba(34, 197, 94, 0.15), rgba(52, 211, 153, 0.1), transparent)'
            }
        }
        return gradients[theme][color]
    }

    const getPulsarStyle = (pulsar) => ({
        position: 'absolute',
        left: pulsar.x + '%',
        top: pulsar.y + '%',
        width: '20px',
        height: '20px',
        background: pulsar.color,
        borderRadius: '50%',
        opacity: pulsar.intensity,
        boxShadow: `0 0 40px 10px ${pulsar.color}66`,
        animation: `pulsarBeam ${pulsar.pulseSpeed}s ease-in-out infinite`,
        animationDelay: `${pulsar.delay}s`
    })

    return (
        <>
            <style jsx>{`
                @keyframes cosmicFloat {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    25% { transform: translateY(-15px) translateX(10px); }
                    50% { transform: translateY(-5px) translateX(-8px); }
                    75% { transform: translateY(-12px) translateX(5px); }
                }
                @keyframes cosmicPulse {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
                @keyframes nebulaRotate {
                    0% { transform: rotate(0deg) scale(1); }
                    50% { transform: rotate(180deg) scale(1.1); }
                    100% { transform: rotate(360deg) scale(1); }
                }
                @keyframes pulsarBeam {
                    0%, 100% { 
                        opacity: 0.5; 
                        transform: scale(1);
                        box-shadow: 0 0 20px 5px currentColor;
                    }
                    50% { 
                        opacity: 1; 
                        transform: scale(1.5);
                        box-shadow: 0 0 60px 20px currentColor;
                    }
                }
                @keyframes energyRipple {
                    0% { 
                        opacity: 1; 
                        transform: scale(0);
                    }
                    100% { 
                        opacity: 0; 
                        transform: scale(4);
                    }
                }
            `}</style>
            
            <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
                {/* Animated canvas background */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 pointer-events-auto cursor-pointer"
                    onClick={handleCanvasClick}
                />
                
                {/* Dynamic background gradient */}
                <div 
                    className="absolute inset-0 transition-all duration-1000"
                    style={{
                        background: isDarkMode 
                            ? 'radial-gradient(ellipse at top, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 0.9) 100%)'
                            : 'radial-gradient(ellipse at top, rgba(241, 245, 249, 0.8) 0%, rgba(226, 232, 240, 0.9) 100%)'
                    }}
                />
                
                {/* Nebula clouds */}
                {nebulaClouds.map((cloud) => (
                    <div key={cloud.id} style={getNebulaStyle(cloud)} />
                ))}
                
                {/* Cosmic particles */}
                {particles.map((particle) => (
                    <div key={particle.id} style={getParticleStyle(particle)} />
                ))}
                
                {/* Pulsars */}
                {pulsars.map((pulsar) => (
                    <div key={pulsar.id} style={getPulsarStyle(pulsar)} />
                ))}
                
                {/* Interactive energy ripples */}
                {energyRipples.map((ripple) => (
                    <div
                        key={ripple.id}
                        className="absolute pointer-events-none"
                        style={{
                            left: ripple.x + '%',
                            top: ripple.y + '%',
                            width: '20px',
                            height: '20px',
                            border: isDarkMode 
                                ? '2px solid rgba(59, 130, 246, 0.6)' 
                                : '2px solid rgba(99, 102, 241, 0.4)',
                            borderRadius: '50%',
                            animation: 'energyRipple 2s ease-out forwards',
                            transform: 'translate(-50%, -50%)'
                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default 