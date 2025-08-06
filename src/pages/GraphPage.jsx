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
import PseudocodeBox from "../components/Graph/PseudocodeBox";
import DescriptionBox from "../components/Common/DescriptionBox";

export default function GraphPage() {
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const [queueState, setQueueState] = useState([]);
  const [stackState, setStackState] = useState([]);
  const [pqState, setPQState] = useState([]);
  const [distances, setDistances] = useState([]);
  const [activeAlgo, setActiveAlgo] = useState("BFS");

  return (
    <DSAPageLayout title="Graphs">
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-4 items-start">
        <div className="flex flex-col gap-2">
          <BFSControls
            visitedNodes={visitedNodes}
            setVisitedNodes={setVisitedNodes}
            currentNode={currentNode}
            setCurrentNode={setCurrentNode}
            queueState={queueState}
            setQueueState={setQueueState}
            onRun={() => setActiveAlgo("BFS")}
          />
          <DFSControls
            visitedNodes={visitedNodes}
            setVisitedNodes={setVisitedNodes}
            currentNode={currentNode}
            setCurrentNode={setCurrentNode}
            stackState={stackState}
            setStackState={setStackState}
            onRun={() => setActiveAlgo("DFS")}
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
            onRun={() => setActiveAlgo("Dijkstra")}
          />
          <AStarControls
            visitedNodes={visitedNodes}
            setVisitedNodes={setVisitedNodes}
            currentNode={currentNode}
            setCurrentNode={setCurrentNode}
            pqState={pqState}
            setPQState={setPQState}
            onRun={() => setActiveAlgo("AStar")}
          />
        </div>
        <PseudocodeBox algorithm={activeAlgo} />
      </div>
      <GraphCanvas visitedNodes={visitedNodes} currentNode={currentNode} /> 
      <QueueDisplay queue={queueState}/>
      <StackDisplay stack={stackState} />
      <PriorityQueueDisplay queue={pqState} />
      <DescriptionBox>
        A <strong>graph</strong> is a data structure made up of nodes connected by edges.
        <br />
        Graphs can be <strong>directed</strong> (edges have a direction)
        or <strong>undirected</strong> (edges go both ways), 
        and may include <em>weights</em> on edges representing cost or distance.
        <br /><br />
        <strong>BFS</strong> explores the graph level by level using a <em>queue</em>, 
        while <strong>DFS</strong> dives deep along one branch at a time using a <em>stack</em>.
        <br /><br />
        <strong>Dijkstra's Algorithm</strong> finds the shortest path from a starting node 
        to all others using a <em>priority queue</em> and edge weights.
        <br /><br />
        <strong>A*</strong> improves upon Dijkstra by using a <em>heuristic</em> 
        to estimate distance to the goal, making it faster in many cases.
      </DescriptionBox>

    </DSAPageLayout>
  );
}
