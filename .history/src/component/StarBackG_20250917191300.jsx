import React, { useEffect, useState } from 'react'

const StarBackG = () => {
    const [stars, setStars] = useState([])
    const [meteros, setMeteors] = useState([])
    const [nebula, setNebula] = useState([])

    useEffect(()=>{
        generateStars();
        generateMeteors();
        generateNebula();

        const handleResize = ()=>{
            generateStars();
            generateMeteors();
            generateNebula();
        }

        window.addEventListener("resize",handleResize)
        return ()=>{
            window.removeEventListener("resize",handleResize)
        }
    },[])


    const generateStars = ()=>{
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
    const generateMeteors = ()=>{
        const numberOfMeteors = 4
    

    const newMeteors = [];

    for (let i=0; i < numberOfMeteors; i++){
        newMeteors.push({
            id : i,
            size : Math.random() * 2 + 1,
            x: Math.random() * 100 ,
            y: Math.random() * 20,
            delay: Math.random() * 15,
            animationDuration: Math.random() *3 + 2,


        })
        
    }
    setMeteors(newMeteors)
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
}
  return (

    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        {stars.map((star)=>(
            <div key={star.id} className='star animate-blink absolute rounded-full bg-white' style={{
                width: star.size  + "px",
                height: star.size + "px",
                left: star.x + '%',
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
                animationDelay: star.animationDelay + "s",
                boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.5)"

            }} />
        ))}
        {meteros.map((meteor)=>(
            <div key={meteor.id} className='meteor animate-meteor' style={{
                width: meteor.size * 50 + "px",
                height: meteor.size + "px",
                left: meteor.x + '%',
                top: meteor.y + "%",
                opacity: meteor.opacity,
                animationDuration: meteor.animationDuration + "s"
            }} />
        ))}
    </div>
  )
}

export default StarBackG