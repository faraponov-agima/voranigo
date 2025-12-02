"use client";

import React, { useRef, useEffect } from "react";

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export interface MousePosition {
  x: number;
  y: number;
}

interface MeshNetworkProps {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  mouseDistance?: number;
  speed?: number;
  lineWidth?: number;
  color?: string; // Hex color for unified line coloring
  boundaryOffset?: number; // How far outside the canvas particles can go
}

// Helper to convert hex to rgb
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 56, g: 189, b: 248 }; // Default sky-400
};

export const MeshNetworkAnimation: React.FC<MeshNetworkProps> = ({
  className = "",
  particleCount = 80,
  connectionDistance = 120,
  mouseDistance = 250,
  speed = 1,
  lineWidth = 1,
  color = "#38bdf8", // Default Sky-400
  boundaryOffset = 100,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<MousePosition>({ x: -1000, y: -1000 });
  const requestRef = useRef<number>(0);

  // Store config in ref
  const configRef = useRef({
    connectionDistance,
    mouseDistance,
    speed,
    lineWidth,
    rgb: hexToRgb(color),
    boundaryOffset,
  });

  // Keep config ref in sync with props
  useEffect(() => {
    configRef.current = {
      connectionDistance,
      mouseDistance,
      speed,
      lineWidth,
      rgb: hexToRgb(color),
      boundaryOffset,
    };
  }, [
    connectionDistance,
    mouseDistance,
    speed,
    lineWidth,
    color,
    boundaryOffset,
  ]);

  // Initialize particles
  const initParticles = (width: number, height: number) => {
    const { boundaryOffset: offset } = configRef.current;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        // Initialize within the expanded bounds
        x: Math.random() * (width + offset * 2) - offset,
        y: Math.random() * (height + offset * 2) - offset,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 2 + 1,
      });
    }
    particlesRef.current = particles;
  };

  const draw = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    ctx.clearRect(0, 0, width, height);

    const {
      connectionDistance: connDist,
      mouseDistance: mouseDist,
      speed: currentSpeed,
      lineWidth: currentWidth,
      rgb,
      boundaryOffset: offset,
    } = configRef.current;

    // Base color string generator
    const getColor = (alpha: number) =>
      `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;

    particlesRef.current.forEach((particle, i) => {
      // Move
      particle.x += particle.vx * currentSpeed;
      particle.y += particle.vy * currentSpeed;

      // Bounce off expanded boundaries
      // We clamp position to boundary to prevent sticking if boundaryOffset reduces rapidly
      if (particle.x < -offset) {
        particle.x = -offset;
        particle.vx *= -1;
      } else if (particle.x > width + offset) {
        particle.x = width + offset;
        particle.vx *= -1;
      }

      if (particle.y < -offset) {
        particle.y = -offset;
        particle.vy *= -1;
      } else if (particle.y > height + offset) {
        particle.y = height + offset;
        particle.vy *= -1;
      }

      // Connect to other particles
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const other = particlesRef.current[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connDist) {
          ctx.beginPath();
          ctx.strokeStyle = getColor(1 - distance / connDist);
          ctx.lineWidth = currentWidth;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }

      // Connect to mouse
      const dxMouse = particle.x - mouseRef.current.x;
      const dyMouse = particle.y - mouseRef.current.y;
      const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

      if (distMouse < mouseDist) {
        ctx.beginPath();
        // Use SAME color as lines, just thicker/fading logic
        ctx.strokeStyle = getColor(1 - distMouse / mouseDist);
        ctx.lineWidth = currentWidth * 2;
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
        ctx.stroke();

        // Gentle interaction
        if (distMouse < 50) {
          const forceDirectionX = dxMouse / distMouse;
          const forceDirectionY = dyMouse / distMouse;
          const force = (50 - distMouse) / 50;
          particle.vx += forceDirectionX * force * 0.05 * currentSpeed;
          particle.vy += forceDirectionY * force * 0.05 * currentSpeed;
        }
      }
    });
  };

  // Resize & Init
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      initParticles(container.clientWidth, container.clientHeight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [particleCount]);

  // Global mouse tracking (allows pointer-events: none on canvas)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();

      // Calculate mouse position relative to canvas
      // We do this globally so the canvas doesn't need to capture the event
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    // We can't really detect "mouseleave" on the window for the canvas bounds specifically
    // without bounding checks, but usually, letting it stay at the last pos or
    // checking if e.target is outside the window is fine.
    // For simplicity, we'll reset if mouse leaves the window.
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles(width, height);
    };

    const animate = () => {
      draw(ctx, width, height);
      requestRef.current = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative overflow-hidden pointer-events-none ${className}`} // pointer-events-none added
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
