import { useEffect, useRef } from 'react';
import './RippleDots.css';

export default function RippleDots({
  dotSize = 2,
  gridSpacing = 30,
  color = 'rgba(124, 58, 237, 0.4)',
  interactive = true,
  attract = false, // false = repel (stone in water), true = pull closer
  effectRadius = 150,
  pushForce = 20,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dots = [];
    let mouse = { x: -1000, y: -1000 };
    let animationFrame;

    const initDots = () => {
      dots = [];
      const cols = Math.floor(width / gridSpacing) + 2;
      const rows = Math.floor(height / gridSpacing) + 2;
      
      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          dots.push({
            originX: i * gridSpacing,
            originY: j * gridSpacing,
            x: i * gridSpacing,
            y: j * gridSpacing,
            vx: 0,
            vy: 0
          });
        }
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initDots();
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('mouseleave', handleMouseLeave);
    }

    // A slow global drift so the grid feels alive without mouse
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      
      time += 0.005;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        
        // Base drift
        let targetX = dot.originX + Math.sin(time + dot.originY * 0.01) * 5;
        let targetY = dot.originY + Math.cos(time + dot.originX * 0.01) * 5;

        // Interaction
        if (interactive) {
          const isMobile = window.innerWidth < 768;
          let currentMouseX = mouse.x;
          let currentMouseY = mouse.y;

          // On mobile, simulate a floating virtual cursor if no real mouse activity
          if (isMobile) {
            currentMouseX = width / 2 + Math.sin(time * 0.8) * (width / 3);
            currentMouseY = height / 2 + Math.cos(time * 0.5) * (height / 3);
          }

          const dx = currentMouseX - dot.originX;
          const dy = currentMouseY - dot.originY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < effectRadius) {
            // Calculate force (stronger closer to center)
            const force = (effectRadius - dist) / effectRadius;
            
            if (attract) {
              targetX += dx * force * 0.5;
              targetY += dy * force * 0.5;
            } else {
              // Repel like a ripple wave
              const angle = Math.atan2(dy, dx);
              // Calculate wave distortion
              const push = Math.sin((dist / effectRadius) * Math.PI) * pushForce * force;
              targetX -= Math.cos(angle) * push;
              targetY -= Math.sin(angle) * push;
            }
          }
        }

        // Spring physics to glide to target smoothly
        dot.vx += (targetX - dot.x) * 0.05;
        dot.vy += (targetY - dot.y) * 0.05;
        dot.vx *= 0.8; // Dampening
        dot.vy *= 0.8;
        
        dot.x += dot.vx;
        dot.y += dot.vy;

        ctx.beginPath();
        // Dynamic path radius based on velocity for speed blur illusion
        const speed = Math.sqrt(dot.vx*dot.vx + dot.vy*dot.vy);
        ctx.arc(dot.x, dot.y, dotSize + (speed * 0.1), 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationFrame = requestAnimationFrame(draw);
    };
    
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrame);
    };
  }, [dotSize, gridSpacing, color, interactive, attract, effectRadius, pushForce]);

  return <canvas ref={canvasRef} className="ripple-dots-canvas" />;
}
