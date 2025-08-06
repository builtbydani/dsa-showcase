import { useEffect, useRef } from "react";

export default function SortingCanvas({ array, highlight }) {
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
      ctx.fillStyle = highlight.includes(i) ? "red" : "skyblue";
      ctx.fillRect(i * barWidth, height - barHeight, barWidth - 2, barHeight);
    });
  }, [array, highlight]);

  return <canvas ref={canvasRef} className="rounded bg-white mx-auto w-full h-[400px]" />;
}

