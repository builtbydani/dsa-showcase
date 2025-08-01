import { useState } from "react";

export function useStackQueue() {
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

  return {
    mode,
    setMode,
    items,
    setItems,
    input,
    setInput,
    handleAdd,
    handleRemove,
  };
}
