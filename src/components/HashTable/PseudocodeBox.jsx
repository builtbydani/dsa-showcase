import GlowPanel from "../Common/GlowPanel";

export default function PseudocodeBox({ mode }) {
  return (
    <GlowPanel title="Pseudocode:" className="mt-4">
      {mode === "chaining" ? (
        <pre className="text-sm font-mono leading-snug whitespace-pre-wrap">
{`insert(key):
  index = hash(key)
  buckets[index].append(key)`}
        </pre>
      ) : (
        <pre className="text-sm font-mono leading-snug whitespace-pre-wrap">
{`insert(key):
  index = hash(key)
  while buckets[index] occupied:
    index = (index + 1) % size
  buckets[index] = key`}
        </pre>
      )}
    </GlowPanel>
  );
}

