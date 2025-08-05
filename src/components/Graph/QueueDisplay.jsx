import GlowPanel from "../Common/GlowPanel";

export default function QueueDisplay({ queue }) {
  return (
    <GlowPanel title="Queue:">
      <div className="flex flex-row gap-2 justify-center mt-2">
        {queue.map((node, index) => (
          <div
            key={index}
            className={`w-10 h-10 text-black rounded flex items-center justify-center font-bold ${node.visited ? "bg-green-400" : "bg-sky-300"} text-black`}
          >
            {node.value}
          </div>
        ))}
      </div>
    </GlowPanel>
  );
}
