import { useStackQueue } from "../../utils/algorithms/stackQueueAlgorithm";
import ControlBar from "./ControlBar";
import StackPseudo from "./StackPseudo";
import Visualizer from "./Visualizer";
import StackDescription from "./StackDescription";

export default function StackQueueDemo() {
  const {
    mode,
    setMode,
    items,
    input,
    setInput,
    handleAdd,
    handleRemove,
  } = useStackQueue();

  return (
    <>
     <ControlBar
       input={input}
       setInput={setInput}
       mode={mode}
       handleAdd={handleAdd}
       handleRemove={handleRemove}
       setMode={setMode}
       disabled={items.length === 0}
     />

     <Visualizer items={items} /> 

     <StackPseudo mode={mode} /> 

     <StackDescription /> 
    </>
  );
}

