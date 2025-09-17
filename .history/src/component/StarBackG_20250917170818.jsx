import React, { useEffect, useState } from 'react'

const StarBackG = () => {
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])
    const [clickMeteors, setClickMeteors] = useState([])

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

    const handleClick = (e) => {
        const newMeteor = {
            id: Date.now(),
            size: Math.random() * 2 + 1,
            x: (e.clientX / window.innerWidth) * 100,
            y: (e.clientY / window.innerHeight) * 100,
            animationDuration: 1,
        };
        setClickMeteors((prev) => [...prev, newMeteor]);
        // Remove the meteor after its animation ends
        setTimeout(() => {
            setClickMeteors((prev) => prev.filter((m) => m.id !== newMeteor.id));
        }, newMeteor.animationDuration * 1000);
    };

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0' onClick={handleClick}>
            {stars.map((star)=>(
                <div key={star.id} className='star animate-blink' style={{
                    width: star.size  + "px",
                    height: star.size + "px",
                    left: star.x + '%',
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                    animationDelay: star.animationDelay + "s",
                }} />
            ))}
            {meteors.map((meteor)=>(
                <div key={meteor.id} className='meteor animate-meteor' style={{
                    width: meteor.size * 50 + "px",
                    height: meteor.size + "px",
                    left: meteor.x + '%',
                    top: meteor.y + "%",
                    opacity: meteor.opacity,
                    animationDuration: meteor.animationDuration + "s"
                }} />
            ))}
            {clickMeteors.map((meteor) => (
                <div key={meteor.id} className='meteor animate-meteor-on-click'
                    style={{
                        width: meteor.size * 50 + "px",
                        height: meteor.size + "px",
                        left: meteor.x + '%',
                        top: meteor.y + "%",
                        animationDuration: meteor.animationDuration + "s",
                }} />
            ))}
            {/* New Moon Component */}
            <div className='moon animate-float'></div>
        </div>
    )
}

export default StarBackG