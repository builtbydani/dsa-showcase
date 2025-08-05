import GlowPanel from "../Common/GlowPanel";

export default function StackDisplay({ stack }) {
  return (
    <GlowPanel title="Stack:">
      <div className="flex flex-col gap-2 items-center mt-2">
        {[...stack].reverse().map((node, index) => (
          <div
            key={index}
            className={`w-10 h-10 rounded flex items-center justify-center font-bold ${
              node.visited ? "bg-green-400" : "bg-purple-300"
            } text-black`}
          >
            {node.value}
          </div>
        ))}
      </div>
    </GlowPanel>
  );
}

