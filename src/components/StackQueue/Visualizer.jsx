export default function Visualizer({ items }) {
  return (
    <div className="flex gap-3 mb-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="
            w-16 h-16 
            flex items-center justify-center 
            bg-indigo-400 
            text-white font-semibold rounded-xl
        ">
          {item}
        </div>
      ))}
    </div>
  );
}
