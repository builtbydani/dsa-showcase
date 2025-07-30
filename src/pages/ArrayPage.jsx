// src/pages/ArrayPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ArrayPage() {
  const [array, setArray] = useState([5, 2, 9, 1, 6, 8, 3, 7]);
  const [target, setTarget] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showCode, setShowCode] = useState(false);
  const [activeLine, setActiveLine] = useState(null);
  const [isBinary, setIsBinary] = useState(false);

  const reset = () => setCurrentIndex(null);

  const linearSearch = async () => {
    reset();
    setIsBinary(false);
    for (let i = 0; i < array.length; i++) {
      setActiveLine(0);
      await new Promise((res) => setTimeout(res, 300));
      setCurrentIndex(i);
      setActiveLine(1);
      await new Promise((res) => setTimeout(res, 300));
      if (array[i] === Number(target)) {
        setActiveLine(2);
        break;
      }
    }
    setActiveLine(null);
  };

  const binarySearch = async () => {
    reset();
    setIsBinary(true);
    let arr = [...array].sort((a, b) => a - b);
    setArray(arr);
    let low = 0, high = arr.length - 1;
    setActiveLine(0);
    await new Promise(res => setTimeout(res, 200));
    setActiveLine(1);
    await new Promise(res => setTimeout(res, 200));
    while (low <= high) {
      setActiveLine(2);
      await new Promise(res => setTimeout(res, 200));
      let mid = Math.floor((low + high) / 2);
      setActiveLine(3);
      setCurrentIndex(mid);
      await new Promise((res) => setTimeout(res, 300));
      if (arr[mid] === Number(target)) {
        setActiveLine(4);
        break;
      }
      if (arr[mid] < Number(target)) {
        setActiveLine(6);
        low = mid + 1;
      } else {
        setActiveLine(8);
        high = mid - 1;
      }
      await new Promise(res => setTimeout(res, 300));
    }
    setActiveLine(null);
  };

  const linearCode = [
    "for i in 0 to array.length:",
    "   if array[i] == target:",
    "       return i",
  ];

  const binaryCode = [
    "low = 0",
    "high = array.length - 1",
    "while low <= high:",
    "   mid = (low + high) // 2",
    "   if array[mid] == target:",
    "       return mid",
    "   else if array[mid] < target:",
    "       low = mid + 1",
    "   else:",
    "       high = mid - 1",
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-100 to-purple-100">
      <Link to="/" className="text-indigo-500 underline mb-6 block">← Back</Link>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">🔍 Array + Search</h1>

      <div className="flex flex-wrap gap-3 mb-6">
        {array.map((num, idx) => (
          <div
            key={idx}
            className={`w-12 h-12 flex items-center justify-center rounded-xl text-white text-lg font-semibold ${
              idx === currentIndex ? "bg-pink-500" : "bg-indigo-400"
            }`}
          >
            {num}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="Search for..."
          className="p-2 rounded-md border border-gray-300"
        />
        <button onClick={linearSearch} className="px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-lg">
          Linear Search
        </button>
        <button onClick={binarySearch} className="px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-lg">
          Binary Search
        </button>
        <button
          onClick={() => setShowCode(!showCode)}
          className="mt-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
        >
          {showCode ? "Hide Pseudocode" : "Show Pseudocode"}
        </button>

        {showCode && (
          <pre 
            className="
            mt-6 bg-white/80 p-4 rounded-xl 
            border border-gray-300 max-w-xl 
            text-left text-sm font-mono
          ">
            {(isBinary ? binaryCode : linearCode).map((line, idx) => (
              <div
                key={idx}
                className={`transition-all ${
                  idx === activeLine ? "bg-yellow-200 font-bold px-2 rounded" : ""
                }`}
              >
                {line}
              </div>
            ))}
          </pre>
        )}
      </div>
    </div>
  );
}

