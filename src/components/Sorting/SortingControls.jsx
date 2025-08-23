import Button from "../Common/Button";
import GlowPanel from "../Common/GlowPanel";

export default function SortingControls({ onSort, onGenerate, sortType, setSortType }) {
  return (
    <GlowPanel title="Controls" className="mt-4">
      <div className="flex flex-col items-center gap-4">
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="p-2 rounded border"
        >
          <option value="insertion">Insertion Sort</option>
          <option value="bubble">Bubble Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="quick">Quick Sort</option>
        </select>

        <div className="flex gap-2">
          <Button onClick={onGenerate} variant="blue">Generate Array</Button>
          <Button onClick={onSort} variant="green">Start</Button>
        </div>
      </div>
    </GlowPanel>
  );
}

