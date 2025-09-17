import React, { useEffect, useState } from 'react'

const StarBackG = () => {
    const [stars, setStars] = useState([])
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
)
  

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
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight /10000)
    

    const newStars = [];

    for (let i=0; i < numberOfStars; i++){
        newStars.push({
            id : i,
            size : Math.random() * 3 + 1,
            x: Math.random() * 100 ,
            y: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 3 + 2,
            animationDelay: Math.random() * 5

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