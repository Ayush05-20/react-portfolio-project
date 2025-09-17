import React, { useEffect, useState } from 'react'

const StarBackG = () => {
    const canvasRef = useRef(null);
    const [points, setPoints] = useState([]);
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const generatePoints = () => {
            const newPoints = [];
            const numPoints = Math.floor((window.innerWidth * window.innerHeight) / 10000);
            for (let i = 0; i < numPoints; i++) {
                newPoints.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    vx: (Math.random() - 0.5) * 0.2, // very slow velocity
                    vy: (Math.random() - 0.5) * 0.2,
                    radius: Math.random() * 2 + 1,
                });
            }
            setPoints(newPoints);
        };

        const animate = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)';
            ctx.strokeStyle = document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
            
            // Update points position and draw them
            const updatedPoints = points.map(p => {
                let newX = p.x + p.vx;
                let newY = p.y + p.vy;

                // Wrap around edges
                if (newX < 0 || newX > canvas.width) p.vx = -p.vx;
                if (newY < 0 || newY > canvas.height) p.vy = -p.vy;
                
                newX = Math.max(0, Math.min(canvas.width, newX));
                newY = Math.max(0, Math.min(canvas.height, newY));

                ctx.beginPath();
                ctx.arc(newX, newY, p.radius, 0, Math.PI * 2);
                ctx.fill();
                return { ...p, x: newX, y: newY };
            });
            setPoints(updatedPoints);

            // Draw lines between nearby points
            ctx.beginPath();
            for (let i = 0; i < updatedPoints.length; i++) {
                for (let j = i + 1; j < updatedPoints.length; j++) {
                    const p1 = updatedPoints[i];
                    const p2 = updatedPoints[j];
                    const distance = Math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2);
                    const maxDistance = 150;
                    if (distance < maxDistance) {
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                    }
                }
            }
            ctx.stroke();

            requestAnimationFrame(animate);
        };

        generatePoints();
        window.addEventListener('resize', generatePoints);
        animate();

        return () => {
            window.removeEventListener('resize', generatePoints);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
export default StarBackG