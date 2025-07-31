// src/pages/ArrayPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { generateArray } from "../utils/algorithms/generateArray";
import { linearCode, binaryCode } from "../utils/algorithms/arraySearchCode";
import { linearSearch, binarySearch } from "../utils/algorithms/search";
import GlowCard from "../components/Common/GlowCard.jsx";
import GlowTitle from "../components/Common/GlowTitle.jsx";
import GlowPanel from "../components/Common/GlowPanel.jsx";
import DescriptionBox from "../components/Common/DescriptionBox";

export default function ArrayPage() {

  const [array, setArray] = useState(generateArray());
  const [target, setTarget] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showCode, setShowCode] = useState(false);
  const [activeLine, setActiveLine] = useState(null);
  const [isBinary, setIsBinary] = useState(false);

  const reset = () => setCurrentIndex(null);

  const runLinear = () => {
    reset();
    linearSearch({
      array: generateArray(target),
      target,
      setArray,
      setIsBinary,
      setCurrentIndex,
      setActiveLine,
    });
  };

  const runBinary = () => {
    reset();
    binarySearch({
      array: generateArray(target),
      target,
      setArray,
      setIsBinary,
      setCurrentIndex,
      setActiveLine,
    });
  };

  const disabled = target.trim() === "";

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-100 to-purple-100">
      <Link to="/" className="text-indigo-500 underline mb-6 block">← Back</Link>
      <GlowCard>
        <GlowTitle>🔍 Array + Search</GlowTitle>
        <div className="flex flex-wrap gap-3 mb-6">
          {array.map((num, idx) => (
            <div
              key={idx}
              className={`w-12 h-12 
                          flex items-center justify-center 
                          rounded-xl text-white text-lg 
                          font-semibold ${
                          idx === currentIndex ? 
                          "bg-pink-500" : "bg-indigo-400"
                        }`}
            >
              {num}
            </div>
          ))}
        </div>
      </GlowCard>

      <div className="flex items-center gap-4">
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="Search for..."
          className="p-2 rounded-md border border-gray-300"
        />
        <button 
          onClick={runLinear} 
          className="
            px-4 py-2 
            bg-pink-400 hover:bg-pink-500 
            text-white rounded-lg" 
          disabled={disabled}
        >
          Linear Search
        </button>
        <button 
          onClick={runBinary} 
          className="
            px-4 py-2 
            bg-blue-400 hover:bg-blue-500 
            text-white rounded-lg" 
          disabled={disabled}
        >
          Binary Search
        </button>
        <button
          onClick={() => setShowCode(!showCode)}
          className="
            px-4 py-2 
            bg-gray-300 hover:bg-gray-400 
            text-gray-800 rounded-lg"
        >
          {showCode ? "Hide Pseudocode" : "Show Pseudocode"}
        </button>

        {showCode && (
          <GlowPanel title="Pseudocode">
            <pre className="text-sm font-mono space-y-1">
              {(isBinary ? binaryCode : linearCode).map((line, idx) => (
                <div
                  key={idx}
                  className={`transition-all ${
                    idx === activeLine ? 
                    "bg-yellow-200 font-bold px-2 rounded" : 
                    ""
                  }`}
                >
                  {line}
                </div>
              ))}
            </pre>
          </GlowPanel>
        )}
      </div>

      <DescriptionBox>
        <p>
          <strong>Linear Search:</strong>
          <br />
          Checks each element one by one from left to right until it finds the target value.
          <br />
          Time complexity is <code>O(n)</code>.
          <br /><br />
          <strong>Binary Search</strong>
          <br />
          Requires a sorted array. 
          <br />
          Repeatedly divides the search space in half by comparing
          the middle element to the target.
          <br />
          Time complexity is <code>O(log n)</code>.
        </p>
      </DescriptionBox>
    </div>
  );
}

