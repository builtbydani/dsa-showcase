import { useState } from "react";
import Input from "../Common/Input";
import Button from "../Common/Button";
import { BST } from "./BSTLogic";

export default function BSTControls({ bst, setBst, setHighlight, mode, setMode }) {
  const [input, setInput] = useState("");

  const handleAction = () => {
    const value = parseInt(input);
    if (isNaN(value)) return;

    const newBST = new BST();
    Object.assign(newBST, bst);

    newBST.root = bst.root;

    if (mode === "insert") {
      newBST.insert(value);
    } else if (mode === "search") {
      const found = newBST.search(value);
      setHighlight(found ? found : null);
    } else if (mode === "delete") {
      newBST.delete(value);
    }

    const canvasWidth = document.querySelector("canvas")?.offsetWidth || 800;
    newBST.updatePositions(canvasWidth);

    setBst(newBST);
    setInput("");
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter value"
      />
      <select
        className="px-2 py-1 rounded bg-gray-800 text-white border border-gray-600"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="insert">Insert</option>
        <option value="search">Search</option>
        <option value="delete">Delete</option>
      </select>
      <Button onClick={handleAction}>Go</Button>
    </div>
  );
}

