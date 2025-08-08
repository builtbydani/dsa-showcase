import { useEffect, useRef } from "react";

export default function HashCanvas({ buckets, highlight }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const parentWidth = canvas.parentElement.offsetWidth;
    canvas.width = parentWidth;
    canvas.height = 300;

    const width = canvas.width;
    const bucketWidth = width / buckets.length;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    buckets.forEach((bucket, i) => {
      const x = i * bucketWidth;

      // Bucket box
      ctx.fillStyle = highlight.includes(i) ? "red" : "#d1d5db"; // red = active
      ctx.fillRect(x + 5, 50, bucketWidth - 10, 180);

      // Index label
      ctx.fillStyle = "#374151";
      ctx.font = "12px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`Index ${i}`, x + bucketWidth / 2, 45);

      // Bucket contents
      bucket.forEach((val, j) => {
        ctx.fillStyle = "#1f2937";
        ctx.font = "bold 14px sans-serif";
        ctx.fillText(val, x + bucketWidth / 2, 75 + j * 20);
      });
    });
  }, [buckets, highlight]);

  return (
    <canvas
      ref={canvasRef}
      className="rounded bg-white mx-auto w-full h-[300px] mt-4"
    />
  );
}

