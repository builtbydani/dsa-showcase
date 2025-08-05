import { useState } from "react";
import DSAPageLayout from "../components/Common/DSAPageLayout";
import BFSControls from "../components/Graph/BFSControls";
import DFSControls from "../components/Graph/DFSControls";
import GraphCanvas from "../components/Graph/GraphCanvas";
import QueueDisplay from "../components/Graph/QueueDisplay";
import StackDisplay from "../components/Graph/StackDisplay";

export default function GraphPage() {
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const [queueState, setQueueState] = useState([]);
  const [stackState, setStackState] = useState([]);

  return (
    <DSAPageLayout title="Graphs">
      <BFSControls
        visitedNodes={visitedNodes}
        setVisitedNodes={setVisitedNodes}
        currentNode={currentNode}
        setCurrentNode={setCurrentNode}
        queueState={queueState}
        setQueueState={setQueueState}
      />
      <DFSControls
        visitedNodes={visitedNodes}
        setVisitedNodes={setVisitedNodes}
        currentNode={currentNode}
        setCurrentNode={setCurrentNode}
        stackState={stackState}
        setStackState={setStackState}
      />
      <GraphCanvas visitedNodes={visitedNodes} currentNode={currentNode} />
      <QueueDisplay queue={queueState}/>
      <StackDisplay stack={stackState} />
    </DSAPageLayout>
  );
}
