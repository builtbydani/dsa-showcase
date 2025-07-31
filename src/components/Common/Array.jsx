// src/components/Common/Array.jsx
export default function Array({ values = [], highlightIndex = null }) {
  return (
    <div className="flex flex-wrap gap-3 mb-6 justify-center">
      {values.map((value, idx) => (
        <div
          key={idx}
          className={`w-12 h-12 flex items-center justify-center rounded-xl text-white text-lg font-semibold ${
            idx === highlightIndex ? "bg-pink-500" : "bg-indigo-400"
          }`}
        >
          {value}
        </div>
      ))}
    </div>
  );
}

