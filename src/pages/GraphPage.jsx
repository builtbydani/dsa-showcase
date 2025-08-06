import { useState } from "react";
import DSAPageLayout from "../components/Common/DSAPageLayout";
import BFSControls from "../components/Graph/BFSControls";
import DFSControls from "../components/Graph/DFSControls";
import GraphCanvas from "../components/Graph/GraphCanvas";
import QueueDisplay from "../components/Graph/QueueDisplay";
import StackDisplay from "../components/Graph/StackDisplay";
import DijkstraControls from "../components/Graph/DijkstraControls";
import PriorityQueueDisplay from "../components/Graph/PriorityQueueDisplay";
import AStarControls from "../components/Graph/AStarControls";

export default function GraphPage() {
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const [queueState, setQueueState] = useState([]);
  const [stackState, setStackState] = useState([]);
  const [pqState, setPQState] = useState([]);
  const [distances, setDistances] = useState([]);

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
      <DijkstraControls
        visitedNodes={visitedNodes}
        setVisitedNodes={setVisitedNodes}
        currentNode={currentNode}
        setCurrentNode={setCurrentNode}
        pqState={pqState}
        setPQState={setPQState}
        distances={distances}
        setDistances={setDistances}
      />
      <AStarControls
        visitedNodes={visitedNodes}
        setVisitedNodes={setVisitedNodes}
        currentNode={currentNode}
        setCurrentNode={setCurrentNode}
        pqState={pqState}
        setPQState={setPQState}
      />

      <GraphCanvas visitedNodes={visitedNodes} currentNode={currentNode} />
      <QueueDisplay queue={queueState}/>
      <StackDisplay stack={stackState} />
      <PriorityQueueDisplay queue={pqState} />
    </DSAPageLayout>
  );
}
