import Input from "../Common/Input";
import Button from "../Common/Button";

export default function ControlBar({ input, setInput, mode, handleAdd, handleRemove, setMode, disabled }) {
  return (
    <div className="flex items-center gap-4 mb-6 flex-wrap">
      <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter value" />

      <Button onClick={handleAdd} variant="green">
        {mode === "stack" ? "Push" : "Enqueue"}
      </Button>

      <Button onClick={handleRemove} disabled={disabled} variant="red">
        {mode === "stack" ? "Pop" : "Dequeue"}
      </Button>

      <Button onClick={() => setMode(mode === "stack" ? "queue" : "stack")} variant="gray">
        Switch to {mode === "stack" ? "Queue" : "Stack"}
      </Button>
    </div>
  );
}

