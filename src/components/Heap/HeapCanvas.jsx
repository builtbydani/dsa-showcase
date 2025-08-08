import { useEffect, useRef } from "react";

export default function HeapCanvas({ array, highlight }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const parentWidth = canvas.parentElement.offsetWidth;
    canvas.width = parentWidth;
    canvas.height = 300;

    const width = canvas.width;
    const height = canvas.height;
    const barWidth = width / array.length;

    ctx.clearRect(0, 0, width, height);

    array.forEach((val, i) => {
      const barHeight = (val / Math.max(...array)) * 200;

      const x = i * barWidth;
      const y = height - barHeight - 40;

      const left = 2 * i + 1;
      const right = 2 * i + 2;

      const isParent = left < array.length || right < array.length; 
      
      ctx.fillStyle = highlight.includes(i) ? "red" : "skyblue";
      ctx.fillRect(x, y, barWidth - 4, barHeight);

      // Draw value
      ctx.fillStyle = "black";
      ctx.font = "bold 14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(val, x + barWidth / 2, y - 6);

      // Draw index
      ctx.fillStyle = "#4b5563";
      ctx.font = "12px sans-serif";
      ctx.fillText(i, x + barWidth / 2, height - 10);

      // Draw label
      ctx.fillStyle = isParent ? "#2563eb" : "#6b7280";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(isParent ? "Parent" : "Child", x + barWidth / 2, height - 24);
    });
  }, [array, highlight]);

  return (
    <canvas
      ref={canvasRef}
      className="rounded bg-white mx-auto w-full h-[300px] mt-4"
    />
  );
}

