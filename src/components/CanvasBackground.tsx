// Home.js
import React, { useRef, useEffect } from "react";

class Circle {
  x: number;
  y: number;
  angle: number;
  radius: number;
  colors: string[];
  hslaColors: string[];

  constructor(w, h, minR, maxR) {
    this.x = Math.random() * h;
    this.y = Math.random() * h;
    this.angle = Math.random() * Math.PI * 2;
    this.radius = Math.random() * (maxR - minR) + minR;

    this.colors = ["#83dec3", "#bea2f0", "#fef3ef"];
    //"#fef3ef" "#aea5c4"
    this.hslaColors = this.colors.map((color) => {
      // Convert hex color to RGB components
      const hex = color.substring(1);
      const rgb = [
        parseInt(hex.substring(0, 2), 16),
        parseInt(hex.substring(2, 4), 16),
        parseInt(hex.substring(4, 6), 16),
      ];

      // Convert RGB to HSL
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const delta = max - min;

      let h = 0;
      let s = 0;
      let l = (max + min) / 2;
      if (delta !== 0) {
        s = delta / (1 - Math.abs(2 * l - 1));
        switch (max) {
          case r:
            h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
            break;
          case g:
            h = ((b - r) / delta + 2) * 60;
            break;
          case b:
            h = ((r - g) / delta + 4) * 60;
            break;
        }
      }

      // Format HSLA string
      return `hsla(${h}, ${s * 100}%, ${l * 100}%, 1)`;
    });
  }
  draw(ctx, speed) {
    this.angle += speed;
    const x = this.x + Math.cos(this.angle) * 200;
    const y = this.y + Math.sin(this.angle) * 200;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
    gradient.addColorStop(0, this.hslaColors[0]);
    gradient.addColorStop(0.4, this.hslaColors[1]);
    gradient.addColorStop(0.6, this.hslaColors[2]);
    // gradient.addColorStop(0.6, this.hslaColors[3]);
    // gradient.addColorStop(0.8, this.hslaColors[4]);
    gradient.addColorStop(0.2, this.hslaColors[0]);

    ctx.globalCompositeOperation = `overlay`;
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null); // Add type annotation for canvasRef

  useEffect(() => {
    const minRadius = 2000;
    const maxRadius = 2000;
    const speed = 0.000025;
    const circleNum = 2;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    let circles: Circle[] = []; // Initialize circles array

    // Ensure canvas exists before proceeding
    if (!canvas || !ctx) {
      return;
    }

    const setCanvasSize = () => {
      let w = (canvas.width = window.innerWidth * devicePixelRatio);
      let h = (canvas.height = window.innerHeight * devicePixelRatio);
      ctx.scale(devicePixelRatio, devicePixelRatio);
      return { w, h };
    };

    const createCircles = ({ w, h }) => {
      for (let i = 0; i < circleNum; i++) {
        circles.push(new Circle(w, h, minRadius, maxRadius));
      }
    };

    const drawCircles = () => {
      circles.forEach((circle) => {
        circle.draw(ctx, speed);
      });
    };

    const drawAnimation = () => {
      clearCanvas();
      drawCircles();
      window.requestAnimationFrame(drawAnimation);
    };

    const clearCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const handleResize = () => {
      const { w, h } = setCanvasSize();
      createCircles({ w, h });
    };

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial setup
    const { w, h } = setCanvasSize();
    createCircles({ w, h });
    drawAnimation();

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
      }}
    />
  );
};

export default CanvasBackground;
