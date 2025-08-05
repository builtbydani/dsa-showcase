import GlowPanel from "../Common/GlowPanel";

export default function PseudocodeBox({ activeLine }) {
  const codeLines = [
    "current = head",
    "while current is not null:",
    "    visit(current)",
    "    current = current.next",
  ];

  return (
    <GlowPanel title="Pseudocode">
        <pre className="text-sm font-mono leading-6">
          {codeLines.map((line, i) => (
            <div
              key={i}
              className={`transition-all ${
                i === activeLine ? "text-yellow-300 font-bold" : "text-gray-800"
              }`}
            >
              {line}
            </div>
          ))}
        </pre>
    </GlowPanel>
  );
}

