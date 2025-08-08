import { useState } from "react";
import HashCanvas from "./HashCanvas";
import HashControls from "./HashControls";
import PseudocodeBox from "./PseudocodeBox";
import DescriptionBox from "../Common/DescriptionBox";
import { simpleHash } from "../../utils/algorithms/hashFunctions";

export default function HashDemo() {
  const BUCKET_COUNT = 10;
  const [buckets, setBuckets] = useState(Array.from({ length: BUCKET_COUNT }, () => []));
  const [mode, setMode] = useState("chaining"); // "chaining" or "linear"
  const [highlight, setHighlight] = useState([]);

  const animate = async (steps) => {
    for (const [newBuckets, hi] of steps) {
      setBuckets(newBuckets);
      setHighlight(hi);
      await new Promise((r) => setTimeout(r, 300));
    }
    setHighlight([]);
  };

  const handleInsert = (key) => {
    const newBuckets = buckets.map((b) => [...b]); // deep-ish copy
    const index = simpleHash(key, BUCKET_COUNT);
    const steps = [];

    if (mode === "chaining") {
      newBuckets[index].push(key);
      steps.push([newBuckets, [index]]);
    } else if (mode === "linear") {
      let i = index;
      while (newBuckets[i].length > 0) {
        steps.push([newBuckets.map((b) => [...b]), [i]]);
        i = (i + 1) % BUCKET_COUNT;
        if (i === index) {
          alert("Hash Table Full!");
          return;
        }
      }
      newBuckets[i].push(key);
      steps.push([newBuckets, [i]]);
    }

    animate(steps);
  };

  return (
    <>
      <HashCanvas buckets={buckets} highlight={highlight} />
      <HashControls onInsert={handleInsert} mode={mode} setMode={setMode} />
      <PseudocodeBox mode={mode} />
      <DescriptionBox>
        A <strong>hash table</strong> maps keys to values using a <em>hash function</em>. 
        If two keys land in the same bucket, we handle the <em>collision</em> using either{" "}
        <strong>chaining</strong> (a list at that index), or <strong>linear probing</strong>{" "}
        (finding the next open slot).
      </DescriptionBox>
    </>
  );
}

