export default function LinkedListCanvas({ list, type, animationState }) {
  return (
    <div className="flex items-center flex-wrap gap-4 mt-8">
      {list?.map((node, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="bg-purple-400 text-white px-4 py-2 rounded shadow">
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

