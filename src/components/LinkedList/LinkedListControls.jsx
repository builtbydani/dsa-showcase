import { useState } from "react";
import  Button  from "../Common/Button";

export default function LinkedListControls({ type, instance, forceUpdate, setAnimationState }) {
  const [input, setInput] = useState("");

  const handleInsert = () => {
    if (!input.trim()) return;
    instance.insertAtEnd(input);
    forceUpdate(); // refresh UI
    setInput("");
  };

  const handleDelete = () => {
    if (!input.trim()) return;
    instance.delete(input);
    forceUpdate(); // refresh UI
    setInput("");
  };

  const handleTraverse = () => {
    setAnimationState("traversing");
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border rounded"
        placeholder="Enter value"
      />
      <Button onClick={handleInsert} variant="green">
        Insert
      </Button>
      <Button onClick={handleDelete} variant="red">
        Delete
      </Button>
      <Button onClick={handleTraverse} variant="blue">
        Traverse
      </Button>
    </div>
  );
}
