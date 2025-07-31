// src/components/ArraySearch/PseudocodePanel.jsx
import GlowPanel from "../Common/GlowPanel";

export default function PseudocodePanel({ isBinary, activeLine, linearCode, binaryCode }) {
  const codeLines = isBinary ? binaryCode : linearCode;

  return (
    <GlowPanel title="Pseudocode">
      <pre className="text-sm font-mono space-y-1">
        {codeLines.map((line, idx) => (
          <div
            key={idx}
            className={`transition-all ${
              idx === activeLine ? "bg-yellow-200 font-bold px-2 rounded" : ""
            }`}
          >
            {line}
          </div>
        ))}
      </pre>
    </GlowPanel>
  );
}

