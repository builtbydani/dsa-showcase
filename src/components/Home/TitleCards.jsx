import { Link } from "react-router-dom";

const sections = [
  { title: "Array + Search", path: "/array", emoji: "🔍" },
  { title: "Stack + Queue", path: "/stackqueue", emoji: "📦" },
  { title: "Linked List", path: "/linkedlist", emoji: "🔗" },
  { title: "Binary Search Tree", path: "/bst", emoji: "🌳" },
  { title: "Graphs", path: "/graphs", emoji: "🕸️" },
  { title: "Sorting", path: "/sorting", emoji: "🔀" },
  { title: "Heaps", path: "/heaps", emoji: "📈" },
  { title: "Hash Tables", path: "/hashtables", emoji: "🎯" },
];


export default function TitleCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {sections.map(({ title, path, emoji }) => (
        <Link
          key={path}
          to={path}
          className="
            bg-white/70 backdrop-blur-lg 
            hover:bg-white hover:scale-[1.03] hover:shadow-xl 
            transition-all duration-200 shadow-md 
            border border-white rounded-3xl 
            px-6 py-8 text-center text-lg font-medium text-gray-800 
            flex flex-col items-center justify-center
        ">
          <div className="text-3xl mb-2">
            {emoji}
          </div>

          <div>
            {title}
          </div>

        </Link>
      ))}
    </div>
  );
}
