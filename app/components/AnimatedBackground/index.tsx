"use client"
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const adjustCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', adjustCanvas);
        adjustCanvas();

        // Configuração das partículas
        const particles: Array<{
            x: number;
            y: number;
            radius: number;
            speedX: number;
            speedY: number;
            opacity: number;
        }> = [];

        // Criar partículas iniciais
        const createParticles = () => {
            // Aumentamos o número de partículas
            const numberOfParticles = 1000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 5 + 1,
                    speedX: (Math.random() - 0.5) * 0.2,
                    speedY: (Math.random() - 0.5) * 0.2,
                    opacity: Math.random() * 0.3 + 0.5
                });
            }
        };

        createParticles();

        // Animação
        const animate = () => {
            // Aumentamos a opacidade do fade
            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                // Atualizar posição
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Verificar bordas com wrap-around suave
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Desenhar partícula com gradiente
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.radius
                );
                
                // Mudamos para um tom mais escuro de azul (0066FF - nosso azul principal)
                gradient.addColorStop(0, `rgba(0, 102, 255, ${particle.opacity})`);
                gradient.addColorStop(1, 'rgba(0, 102, 255, 0)');

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', adjustCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
            style={{ background: 'white' }}
        />
    );
};

export default AnimatedBackground; 