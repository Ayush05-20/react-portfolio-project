import React, { useEffect, useState } from 'react'

const StarBackG = () => {
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])
    const [nebulaClouds, setNebulaClouds] = useState([])
    const [planets, setPlanets] = useState([])

    useEffect(()=>{
        generateStars();
        generateMeteors();
        generateNebulaClouds();
        generatePlanets();

        const handleResize = ()=>{
            generateStars();
            generateMeteors();
            generateNebulaClouds();
            generatePlanets();
        }

        window.addEventListener("resize",handleResize)
        return ()=>{
            window.removeEventListener("resize",handleResize)
        }
    },[])

    const generateStars = ()=>{
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight /8000)
        const newStars = [];

        for (let i=0; i < numberOfStars; i++){
            const starType = Math.random();
            let color, glowColor;
            
            if (starType < 0.3) {
                color = '#ff6b6b'; // Red dwarf
                glowColor = 'rgba(255, 107, 107, 0.6)';
            } else if (starType < 0.6) {
                color = '#4ecdc4'; // Blue giant
                glowColor = 'rgba(78, 205, 196, 0.6)';
            } else if (starType < 0.85) {
                color = '#ffe66d'; // Yellow star
                glowColor = 'rgba(255, 230, 109, 0.6)';
            } else {
                color = '#ff9ff3'; // Purple star
                glowColor = 'rgba(255, 159, 243, 0.6)';
            }

            newStars.push({
                id : i,
                size : Math.random() * 4 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.6 + 0.4,
                animationDuration: Math.random() * 4 + 2,
                animationDelay: Math.random() * 8,
                color: color,
                glowColor: glowColor,
                twinkleSpeed: Math.random() * 2 + 1
            })
        }
        setStars(newStars)
    }

    const generateMeteors = ()=>{
        const numberOfMeteors = 3
        const newMeteors = [];

        for (let i=0; i < numberOfMeteors; i++){
            const colors = [
                'linear-gradient(45deg, #ff6b6b, transparent)',
                'linear-gradient(45deg, #4ecdc4, transparent)', 
                'linear-gradient(45deg, #ffe66d, transparent)',
                'linear-gradient(45deg, #ff9ff3, transparent)'
            ];

            newMeteors.push({
                id : i,
                width : Math.random() * 60 + 40,
                height: Math.random() * 3 + 2,
                x: Math.random() * 120 - 20,
                y: Math.random() * 30,
                delay: Math.random() * 20,
                animationDuration: Math.random() * 4 + 3,
                gradient: colors[Math.floor(Math.random() * colors.length)],
                angle: Math.random() * 60 + 200 // Varying angles
            })
        }
        setMeteors(newMeteors)
    }

    const generateNebulaClouds = ()=>{
        const numberOfClouds = 3
        const newClouds = [];

        for (let i=0; i < numberOfClouds; i++){
            const colors = [
                'radial-gradient(circle, rgba(138,43,226,0.1) 0%, transparent 70%)', // Purple
                'radial-gradient(circle, rgba(30,144,255,0.08) 0%, transparent 70%)', // Blue
                'radial-gradient(circle, rgba(255,20,147,0.06) 0%, transparent 70%)', // Pink
            ];

            newClouds.push({
                id : i,
                size : Math.random() * 300 + 200,
                x: Math.random() * 120 - 10,
                y: Math.random() * 120 - 10,
                opacity: Math.random() * 0.3 + 0.1,
                animationDuration: Math.random() * 20 + 30,
                background: colors[i % colors.length],
                rotationSpeed: Math.random() * 40 + 20
            })
        }
        setNebulaClouds(newClouds)
    }

    const generatePlanets = ()=>{
        const numberOfPlanets = 2
        const newPlanets = [];

        for (let i=0; i < numberOfPlanets; i++){
            const planetTypes = [
                { 
                    gradient: 'radial-gradient(circle at 30% 30%, #ff6b6b, #d63031)',
                    rings: false,
                    moons: 0
                },
                { 
                    gradient: 'radial-gradient(circle at 30% 30%, #74b9ff, #0984e3)',
                    rings: true,
                    moons: 1
                }
            ];

            const planetType = planetTypes[i % planetTypes.length];

            newPlanets.push({
                id : i,
                size : Math.random() * 80 + 60,
                x: Math.random() * 80 + 10,
                y: Math.random() * 80 + 10,
                animationDuration: Math.random() * 40 + 60,
                ...planetType
            })
        }
        setPlanets(newPlanets)
    }

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0' 
             style={{background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f1419 100%)'}}>
            
            {/* Nebula Clouds */}
            {nebulaClouds.map((cloud)=>(
                <div 
                    key={`cloud-${cloud.id}`} 
                    className='absolute rounded-full'
                    style={{
                        width: cloud.size + "px",
                        height: cloud.size + "px",
                        left: cloud.x + '%',
                        top: cloud.y + "%",
                        background: cloud.background,
                        opacity: cloud.opacity,
                        animation: `float ${cloud.animationDuration}s ease-in-out infinite, rotate ${cloud.rotationSpeed}s linear infinite`,
                        filter: 'blur(2px)'
                    }} 
                />
            ))}

            {/* Planets */}
            {planets.map((planet)=>(
                <div key={`planet-${planet.id}`} className='absolute' style={{
                    left: planet.x + '%',
                    top: planet.y + "%",
                    animation: `float ${planet.animationDuration}s ease-in-out infinite`
                }}>
                    <div 
                        className='rounded-full relative'
                        style={{
                            width: planet.size + "px",
                            height: planet.size + "px",
                            background: planet.gradient,
                            boxShadow: '0 0 20px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.1)'
                        }}
                    >
                        {planet.rings && (
                            <div 
                                className='absolute rounded-full border border-opacity-30'
                                style={{
                                    width: planet.size * 1.8 + "px",
                                    height: planet.size * 0.3 + "px",
                                    left: -(planet.size * 0.4) + "px",
                                    top: planet.size * 0.35 + "px",
                                    borderColor: '#ffffff40',
                                    transform: 'perspective(100px) rotateX(75deg)',
                                    boxShadow: '0 0 10px rgba(255,255,255,0.2)'
                                }}
                            />
                        )}
                        {planet.moons > 0 && (
                            <div 
                                className='absolute w-3 h-3 bg-gray-300 rounded-full'
                                style={{
                                    right: -15 + "px",
                                    top: "20%",
                                    animation: `orbit ${planet.animationDuration * 0.3}s linear infinite`
                                }}
                            />
                        )}
                    </div>
                </div>
            ))}

            {/* Enhanced Stars */}
            {stars.map((star)=>(
                <div 
                    key={`star-${star.id}`} 
                    className='absolute rounded-full'
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + '%',
                        top: star.y + "%",
                        backgroundColor: star.color,
                        opacity: star.opacity,
                        boxShadow: `0 0 ${star.size * 3}px ${star.glowColor}, 0 0 ${star.size * 6}px ${star.glowColor}`,
                        animation: `twinkle ${star.twinkleSpeed}s ease-in-out infinite alternate`
                    }} 
                />
            ))}

            {/* Enhanced Meteors */}
            {meteors.map((meteor)=>(
                <div 
                    key={`meteor-${meteor.id}`} 
                    className='absolute rounded-full'
                    style={{
                        width: meteor.width + "px",
                        height: meteor.height + "px",
                        left: meteor.x + '%',
                        top: meteor.y + "%",
                        background: meteor.gradient,
                        opacity: 0.8,
                        animationDuration: meteor.animationDuration + "s",
                        animationDelay: meteor.delay + "s",
                        animation: `meteor-custom ${meteor.animationDuration}s linear infinite`,
                        transform: `rotate(${meteor.angle}deg)`,
                        filter: 'blur(0.5px)',
                        boxShadow: '0 0 10px rgba(255,255,255,0.5)'
                    }} 
                />
            ))}

            {/* Enhanced Moon */}
            <div 
                className='absolute w-20 h-20 rounded-full'
                style={{
                    right: '10%',
                    top: '15%',
                    background: 'radial-gradient(circle at 35% 35%, #f8f9fa, #e9ecef)',
                    boxShadow: 'inset -8px -8px 12px rgba(0,0,0,0.3), 0 0 30px rgba(248,249,250,0.3)',
                    animation: 'float 8s ease-in-out infinite'
                }}
            >
                {/* Moon craters */}
                <div className='absolute w-2 h-2 bg-gray-400 rounded-full opacity-40' style={{left: '30%', top: '40%'}}></div>
                <div className='absolute w-3 h-3 bg-gray-400 rounded-full opacity-30' style={{right: '25%', bottom: '35%'}}></div>
                <div className='absolute w-1 h-1 bg-gray-400 rounded-full opacity-50' style={{left: '60%', top: '25%'}}></div>
            </div>

            <style jsx>{`
                @keyframes twinkle {
                    0% { transform: scale(1); opacity: 0.7; }
                    100% { transform: scale(1.2); opacity: 1; }
                }
                @keyframes meteor-custom {
                    0% { transform: translateX(-100px) translateY(-100px) rotate(var(--angle, 215deg)); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateX(calc(100vw + 100px)) translateY(calc(100vh + 100px)) rotate(var(--angle, 215deg)); opacity: 0; }
                }
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes orbit {
                    from { transform: rotate(0deg) translateX(50px) rotate(0deg); }
                    to { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(2deg); }
                }
            `}</style>
        </div>
    )
}

export default StarBackG