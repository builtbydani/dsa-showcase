import { useEffect, useRef } from "react";

export default function SortingCanvas({ array, highlight, pivot }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const parentWidth = canvas.parentElement.offsetWidth;
    canvas.width = parentWidth;
    canvas.height = 400;

    const width = canvas.width;
    const height = canvas.height;
    const barWidth = width / array.length;

    ctx.clearRect(0, 0, width, height);

    array.forEach((val, i) => {
      const barHeight = (val / Math.max(...array)) * height;

      ctx.fillStyle = i === pivot
        ? "#a855f7"
        : highlight.includes(i) 
        ? "red" 
        : "skyblue";

      ctx.fillRect(i * barWidth, height - barHeight, barWidth - 2, barHeight);

      if (i === pivot) {
        ctx.save(); // Save current context state

        // Translate to pivot bar's center
        const x = i * barWidth + barWidth / 2;
        const y = height - barHeight / 2;

        ctx.translate(x, y);
        ctx.rotate(-Math.PI / 2); // Rotate 90° counter-clockwise

        // Draw vertical text
        ctx.fillStyle = "white";
        ctx.font = "bold 14px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("PIVOT", 0, 0);

        ctx.restore(); // Restore original context
      }
    });
  }, [array, highlight]);

  return <canvas ref={canvasRef} className="rounded bg-slate-600 mx-auto w-full h-[400px]" />;
}

