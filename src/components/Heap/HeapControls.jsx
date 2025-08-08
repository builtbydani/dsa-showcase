import { useState } from "react";
import GlowPanel from "../Common/GlowPanel";
import Button from "../Common/Button";
import Input from "../Common/Input";

export default function HeapControls({ onInsert, onExtractMin }) {
  const [value, setValue] = useState("");

  const handleInsertClick = () => {
    if (!value.trim()) return;
    onInsert(value);
    setValue("");
  };

  return (
    <GlowPanel title="Controls" className="mt-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <Input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value"
          />
          <Button onClick={handleInsertClick}>Insert</Button>
        </div>
        <Button onClick={onExtractMin}>Extract Min</Button>
      </div>
    </GlowPanel>
  );
}

