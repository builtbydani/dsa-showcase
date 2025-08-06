import { useState } from "react";
import SortingCanvas from "./SortingCanvas";
import SortingControls from "./SortingControls";
import PseudocodeBox from "../Sorting/PseudocodeBox"; // or copy to Sorting if needed
import DescriptionBox from "../Common/DescriptionBox";
import insertionSortSteps from "../../utils/algorithms/insertionSort";

export default function SortingDemo() {
  const [array, setArray] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [sortType, setSortType] = useState("insertion");

  const generateArray = () => {
    const newArr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArr);
    setHighlight([]);
  };

  const startSort = async () => {
    const steps = insertionSortSteps([...array]);
    for (const [arr, hi] of steps) {
      setArray(arr);
      setHighlight(hi);
      await new Promise((r) => setTimeout(r, 100));
    }
    setHighlight([]);
  };

  return (
    <>
      <SortingCanvas array={array} highlight={highlight} />
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

