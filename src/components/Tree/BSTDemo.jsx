import { useEffect, useRef, useState } from "react";
import BSTCanvas from "./BSTCanvas";
import BSTControls from "./BSTControls";
import DescriptionBox from "../Common/DescriptionBox";
import GlowPanel from "../Common/GlowPanel";
import PseudocodeBox from "./PseudocodeBox";
import { BST } from "./BSTLogic";

export default function BSTDemo() {
  const [highlight, setHighlight] = useState(null);
  const [lastInserted, setLastInserted] = useState(null);
  const [mode, setMode] = useState("insert");
  const [bst, setBst] = useState(() => {
    const b = new BST();
    b.insert(20);
    return b;
  });

  const panelRef = useRef();

  useEffect(() => {
    if (panelRef.current) {
      const width = panelRef.current.offsetWidth;
      bst.updatePositions(width);
      console.log("BST updated; triggering layout update.");
    }
  }, [bst]);

  return (
    <GlowPanel innerRef={panelRef}>

      <BSTCanvas
        bst={bst}
        highlight={highlight}
        lastInserted={lastInserted}
      />

      <BSTControls
        bst={bst}
        setBst={setBst}
        setHighlight={setHighlight}
        setLastInserted={setLastInserted}
        mode={mode}
        setMode={setMode}
      />

      <PseudocodeBox mode={mode}/>

      <DescriptionBox>
        A <strong>Binary Search Tree</strong> is a binary tree where each node follows the rule:
        <br />
        <em>left child &lt; parent &lt; right child</em>.
        <br />
        This property allows effiecient <strong>search, insertion, and deletion</strong> operations.
      </DescriptionBox> 

    </GlowPanel>
  );
}
