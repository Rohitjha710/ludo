import React, { useEffect, useRef } from 'react';

const Fireworks = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];

    const addParticle = () => {
      const particle = {
        x: Math.random() * canvas.width,
        y: canvas.height,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        radius: Math.random() * 4 + 1,
        velocityX: Math.random() * 6 - 3,
        velocityY: Math.random() * -3 - 1,
        life: 60
      };
      particles.push(particle);
    };

    const updateParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.velocityX;
        p.y += p.velocityY;
        p.life--;

        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
    };

    const animate = () => {
      addParticle();
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <div className="fireworks-container"> {/* Container for positioning */}
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};

export default Fireworks;
