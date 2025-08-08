import { useState } from "react";
import SortingCanvas from "./SortingCanvas";
import SortingControls from "./SortingControls";
import PseudocodeBox from "../Sorting/PseudocodeBox";
import DescriptionBox from "../Common/DescriptionBox";
import insertionSortSteps from "../../utils/algorithms/insertionSort";
import bubbleSortSteps from "../../utils/algorithms/bubbleSortSteps";
import mergeSortSteps from "../../utils/algorithms/mergeSortSteps";
import quickSortSteps from "../../utils/algorithms/quickSortSteps";

export default function SortingDemo() {
  const [array, setArray] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [sortType, setSortType] = useState("insertion");
  const [pivotIndex, setPivotIndex] = useState(null);

  const generateArray = () => {
    const newArr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArr);
    setHighlight([]);
  };

  const startSort = async () => {
    let steps = [];

    if (sortType === "insertion") {
      steps = insertionSortSteps([...array]);
    } else if (sortType === "bubble") {
      steps = bubbleSortSteps([...array]);
    } else if (sortType === "merge") {
      steps = mergeSortSteps([...array]);
    } else if (sortType === "quick") {
      steps = quickSortSteps([...array]);
    }

    for (const [arrStep, highlights, pivot] of steps) {
      setArray(arrStep);
      setHighlight(highlights);
      setPivotIndex(pivot ?? null);
      await new Promise((r) => setTimeout(r, 100));
    }

    setHighlight([]);
    setPivotIndex(null);
  };

  return (
    <>
      <SortingCanvas array={array} highlight={highlight} pivot={pivotIndex} />
      <SortingControls
        onSort={startSort}
        onGenerate={generateArray}
        sortType={sortType}
        setSortType={setSortType}
      />
      <PseudocodeBox sortType={sortType}/>
      <DescriptionBox>
        Sorting algorithms organize data into a particular order (typically ascending or descending). 
        This demo visually represents how different sorting algorithms—like 
        <strong>insertion sort</strong>—rearrange values 
        using comparisons and swaps. Try changing the algorithm or regenerating the array!
      </DescriptionBox>
    </>
  );
}

