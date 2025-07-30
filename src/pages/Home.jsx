// src/pages/Home.jsx
import { Link } from "react-router-dom";

const sections = [
  { title: "Array + Search", path: "/array" },
  { title: "Stack + Queue", path: "/stackqueue" },
  { title: "Linked List", path: "/linkedlist" },
  { title: "Binary Search Tree", path: "/bst" },
  { title: "Graphs", path: "/graphs" },
  { title: "Sorting", path: "/sorting" },
  { title: "Heaps", path: "/heaps" },
  { title: "Hash Tables", path: "/hashtables" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-100 p-8">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">📘 DSA Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {sections.map((sec) => (
          <Link
            key={sec.path}
            to={sec.path}
            className="bg-white shadow-lg rounded-2xl p-6 text-center text-lg font-medium hover:bg-indigo-50 hover:scale-105 transition-all duration-200"
          >
            {sec.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

