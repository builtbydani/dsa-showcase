import { useState } from "react";
import GlowPanel from "../Common/GlowPanel";
import DescriptionBox from "../Common/DescriptionBox";
import Input from "../Common/Input";
import Button from "../Common/Button";

export default function StackQueueDemo() {
  const [mode, setMode] = useState("stack"); // "stack" or "queue"
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;

    if (mode === "stack") {
      setItems((prev) => [input, ...prev]);
    } else {
      setItems((prev) => [...prev, input]);
    }

    setInput("");
  };

  const handleRemove = () => {
    if (mode === "stack") {
      setItems((prev) => prev.slice(1));
    } else {
      setItems((prev) => prev.slice(1));
    }
  };

  return (
    <>
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter value"/>

        <Button onClick={handleAdd} variant="green">
          {mode === "stack" ? "Push" : "Enqueue"}
        </Button>

        <Button onClick={handleRemove} disabled={items.length === 0} variant="red">
          {mode === "stack" ? "Pop" : "Dequeue"}
        </Button>

        <Button onClick={() => setMode(mode === "stack" ? "queue" : "stack")} variant="gray">
          Switch to {mode === "stack" ? "Queue" : "Stack"}
        </Button>
      </div>

      <div className="flex gap-3 mb-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="
              w-16 h-16 
              flex items-center justify-center 
              bg-indigo-400 
              text-white font-semibold rounded-xl
          ">
            {item}
          </div>
        ))}
      </div>

      <GlowPanel title="Pseudocode">
        <pre className="text-sm font-mono">
          {mode === "stack" ? (
            <>
              <div>push(item): stack.unshift(item)</div>
              <div>pop(): stack.shift()</div>
            </>
          ) : (
            <>
              <div>enqueue(item): queue.push(item)</div>
              <div>dequeue(): queue.shift()</div>
            </>
          )}
        </pre>
      </GlowPanel>

      <DescriptionBox>
        <p>
          <strong>Stack (LIFO):</strong>
          <br />
          The last item added is the first one removed. Imagine a stack of plates.
          <br /><br />
          <strong>Queue (FIFO):</strong>
          <br />
          The first item added is the first one removed. Like a line at a coffee shop.
        </p>
      </DescriptionBox>
    </>
  );
}

