import React, { useEffect, useState } from 'react'

const StarBackG = () => {
  const [raindrops, setRaindrops] = useState([])

    useEffect(() => {
        const generateRaindrops = () => {
            const newDrops = [];
            // Increase or decrease this number to change the rain density
            const numberOfDrops = Math.floor(window.innerWidth * window.innerHeight / 15000); 

            for (let i = 0; i < numberOfDrops; i++) {
                newDrops.push({
                    id: i,
                    x: Math.random() * 100, // Horizontal position
                    y: Math.random() * 100, // Vertical position
                    size: Math.random() * 1.5 + 0.5, // Small size variation
                    animationDuration: Math.random() * 1.5 + 0.5, // Faster animation
                    animationDelay: Math.random() * 10,
                });
            }
            setRaindrops(newDrops);
        };

        generateRaindrops();
        window.addEventListener("resize", generateRaindrops);

        return () => {
            window.removeEventListener("resize", generateRaindrops);
        };
    }, []);


    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {raindrops.map((drop) => (
                <div 
                    key={drop.id} 
                    className='raindrop'
                    style={{
                        '--raindrop-size': `${drop.size}px`,
                        '--raindrop-x': `${drop.x}vw`,
                        '--raindrop-y': `${drop.y}vh`,
                        '--raindrop-duration': `${drop.animationDuration}s`,
                        '--raindrop-delay': `${drop.animationDelay}s`,
                    }}
                />
            ))}
        </div>
    )
}
export default StarBackG