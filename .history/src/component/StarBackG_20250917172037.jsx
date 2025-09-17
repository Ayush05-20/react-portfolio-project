import React, { useEffect, useState } from 'react'

const StarBackG = () => {
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])

    useEffect(()=>{
        generateStars();
        generateMeteors();

        const handleResize = ()=>{
            generateStars();
            generateMeteors();
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



    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0' 
             style={{background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f1419 100%)'}}>
            
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
                    className='absolute rounded-full meteor-custom'
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

            
        </div>
    )
}

export default StarBackG