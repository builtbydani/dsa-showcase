import { useEffect, useRef } from "react";

const positions = {
  A: [300, 100],
  B: [200, 200],
  C: [400, 200],
  D: [150, 300],
  E: [250, 300],
  F: [450, 300],
};

const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["B", "E"],
  ["C", "F"],
  ["E", "F"],
];

const GraphCanvas = ({ visitedNodes = [], currentNode = null }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw edges
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 2;
    edges.forEach(([from, to]) => {
      const [x1, y1] = positions[from];
      const [x2, y2] = positions[to];
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });

    // Draw nodes
    Object.entries(positions).forEach(([node, [x, y]]) => {
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.fillStyle = currentNode === node
        ? "#facc15" // 🟡 visiting
        : visitedNodes.includes(node)
        ? "#4ade80" // 🟢 visited
        : "#60a5fa"; // 🔵 unvisited
      ctx.fill();
      ctx.strokeStyle = "#000";
      ctx.stroke();
      ctx.fillStyle = "#000";
      ctx.font = "16px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(node, x, y);
    });
  }, [visitedNodes, currentNode]);

  return <canvas ref={canvasRef} width={600} height={400} className="mx-auto border rounded" />;
};

export default GraphCanvas;
