import GlowPanel from "../Common/GlowPanel";

export default function PriorityQueueDisplay({ queue }) {
  return (
    <GlowPanel title="Priority Queue:">
      <div className="flex flex-row items-center justify-center gap-2 mt-2">
        {[...queue]
          .sort((a, b) => a.priority - b.priority) // optional: sort by priority for display
          .map((node, index) => (
            <div
              key={index}
              className={`min-w-[4rem] px-2 py-1 rounded flex items-center justify-center font-bold text-black
                ${node.visited ? "bg-green-400" : "bg-pink-300"}`}
            >
              {node.value} ({node.priority})
            </div>
          ))}
      </div>
    </GlowPanel>
  );
}

