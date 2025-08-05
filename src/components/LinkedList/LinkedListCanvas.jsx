export default function LinkedListCanvas({ list, type, animationState, activeIndex }) {
  return (
    <div className="flex items-center flex-wrap gap-4 mt-8">
      {list?.map((node, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className={`px-4 py-2 rounded shadow text-white transition-all duration-300 ${
              index === activeIndex
                ? "bg-yellow-400 scale-110 ring-2 ring-yellow-300"
                : "bg-purple-400"
            }`}
          >
            {node.value}
          </div>
          {index < list.length - 1 && (
            <div className="text-xl">{type === "doubly" ? "⇄" : "→"}</div>
          )}
        </div>
      ))}
    </div>
  );
}

