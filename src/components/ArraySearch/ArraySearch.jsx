import { useState } from "react";
import { generateArray } from "../../utils/algorithms/generateArray";
import { linearCode, binaryCode } from "../../utils/algorithms/arraySearchCode";
import { linearSearch, binarySearch } from "../../utils/algorithms/search";
import GlowPanel from "../Common/GlowPanel";
import DescriptionBox from "./DescriptionBox";
import Input from "../Common/Input";
import Button from "../Common/Button";
import Array from "../Common/Array";
import ControlBar from "./ControlBar";
import PseudoCodePanel from "./PseudoCodePanel";

export default function ArraySearch() {
  const [array, setArray] = useState(generateArray());
  const [target, setTarget] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showCode, setShowCode] = useState(false);
  const [activeLine, setActiveLine] = useState(null);
  const [isBinary, setIsBinary] = useState(false);

  const disabled = target.trim() === "";

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

  return (
    <>
     <Array values={array} highlightIndex={currentIndex} />
      <ControlBar
        target={target}
        setTarget={setTarget}
        runLinear={runLinear}
        runBinary={runBinary}
        showCode={showCode}
        setShowCode={setShowCode}
        disabled={disabled}
      />
      {showCode && (
        <PseudoCodePanel
          isBinary={isBinary}
          activeLine={activeLine}
          linearCode={linearCode}
          binaryCode={binaryCode}
        />
      )}
      <DescriptionBox />
    </>
  );
}

