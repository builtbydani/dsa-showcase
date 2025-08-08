import { useState, useRef } from "react";
import MinHeap from "../../utils/algorithms/minHeap";
import HeapCanvas from "./HeapCanvas";
import HeapControls from "./HeapControls";
import PseudocodeBox from "./PseudocodeBox";
import DescriptionBox from "../Common/DescriptionBox";

export default function HeapDemo() {
  const [array, setArray] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const heapRef = useRef(new MinHeap());

  const animateSteps = async (steps) => {
    for (const [arr, hi] of steps) {
      setArray(arr);
      setHighlight(hi);
      await new Promise((r) => setTimeout(r, 100));
    }
    setHighlight([]);
    heapRef.current.resetSteps();
  };

  const handleInsert = (value) => {
    const heap = heapRef.current;
    heap.insert(Number(value));
    animateSteps(heap.getSteps());
  };

  const handleExtractMin = () => {
    const heap = heapRef.current;
    heap.extractMin();
    animateSteps(heap.getSteps());
  };

  return (
    <>
      <HeapCanvas array={array} highlight={highlight} />
      <HeapControls onInsert={handleInsert} onExtractMin={handleExtractMin} />
      <PseudocodeBox />
      <DescriptionBox>
        A <strong>min heap</strong> is a binary tree where the value 
        of each node is less than or equal to its children.
        <br />
        The smallest element is always at the root. This visualization shows how 
        <em> heapify up</em> and <em> heapify down</em> maintain the heap property.
      </DescriptionBox>
    </>
  );
}

