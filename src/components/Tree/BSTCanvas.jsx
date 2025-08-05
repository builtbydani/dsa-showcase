import { useRef, useEffect } from "react";

export default function BSTCanvas({ bst, highlight, lastInserted }) {
  const canvasRef = useRef(); 

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const parentWidth = canvas.parentElement.offsetWidth;
    canvas.width = parentWidth;
    canvas.height = 500;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const drawNode = (node) => {
      if (!node) return;

      // Draw left/right edges
      if (node.left) {
        drawLine(ctx, node.x, node.y, node.left.x, node.left.y);
      }
      if (node.right) {
        drawLine(ctx, node.x, node.y, node.right.x, node.right.y);
      }

      // Recurse
      drawNode(node.left);
      drawNode(node.right);

      // Draw node
      drawCircle(ctx, node.x, node.y, node.value, node === highlight, node.value === lastInserted);
    };

    drawNode(bst.root);
  }, [bst, highlight]);

  return <canvas ref={canvasRef} width={1000} height={600} className="rounded bg-black" />;
}

function drawLine(ctx, x1, y1, x2, y2) {
  ctx.strokeStyle = "#888";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function drawCircle(ctx, x, y, value, highlight = false, animate = false) {
  ctx.save();

  if (animate) {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#86efac88";
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.fillStyle = highlight ? "#facc15" : "#38bdf8"; // yellow or blue
  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.fillStyle = "black";
  ctx.font = "16px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(value, x, y);
}

