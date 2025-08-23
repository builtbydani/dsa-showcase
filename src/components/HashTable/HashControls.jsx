import { useState } from "react";
import GlowPanel from "../Common/GlowPanel";
import Button from "../Common/Button";
import Input from "../Common/Input";

export default function HashControls({ onInsert, mode, setMode }) {
  const [key, setKey] = useState("");

  const handleAdd = () => {
    if (!key.trim()) return;
    onInsert(key.trim());
    setKey("");
  };

  return (
    <GlowPanel title="Controls" className="mt-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <Input
            placeholder="Enter key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <Button onClick={handleAdd} variant="blue">Insert</Button>
        </div>

        <div className="flex gap-2">
          <label className="text-sm">Collision Handling:</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="p-1 rounded border"
          >
            <option value="chaining">Chaining</option>
            <option value="linear">Linear Probing</option>
          </select>
        </div>
      </div>
    </GlowPanel>
  );
}

