import GlowPanel from "../Common/GlowPanel";

export default function StackPseudo({ mode }) {
  return (
    <GlowPanel title="Pseudocode">
      <pre className="text-sm font-mono">
        {mode === "stack" ? (
          <>
            <div>push(item): stack.unshift(item)</div>
            <div>pop(): stack.shift()</div>
          </>
        ) : (
          <>
            <div>enqueue(item): queue.push(item)</div>
            <div>dequeue(): queue.shift()</div>
          </>
        )}
      </pre>
    </GlowPanel>
  );
}
