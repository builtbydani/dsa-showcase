// src/components/ArraySearch/ControlBar.jsx
import Input from "../Common/Input";
import Button from "../Common/Button";

export default function ControlBar({
  target,
  setTarget,
  runLinear,
  runBinary,
  showCode,
  setShowCode,
  disabled
}) {
  return (
    <div className="flex items-center gap-4 flex-wrap mb-6">
      <Input
        type="number"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        placeholder="Search for..."
      />
      <Button onClick={runLinear} disabled={disabled} variant="pink">
        Linear Search
      </Button>
      <Button onClick={runBinary} disabled={disabled} variant="blue">
        Binary Search
      </Button>
      <Button onClick={() => setShowCode(!showCode)} variant="gray">
        {showCode ? "Hide Pseudocode" : "Show Pseudocode"}
      </Button>
    </div>
  );
}

