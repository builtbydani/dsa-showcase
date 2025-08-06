import { dijkstra } from "../../utils/algorithms/dijkstra";

const weightedGraph = {
  A: [{ node: "B", weight: 2 }, { node: "C", weight: 5 }],
  B: [{ node: "A", weight: 2 }, { node: "D", weight: 4 }, { node: "E", weight: 7 }],
  C: [{ node: "A", weight: 5 }, { node: "F", weight: 6 }],
  D: [{ node: "B", weight: 4 }],
  E: [{ node: "B", weight: 7 }, { node: "F", weight: 1 }],
  F: [{ node: "C", weight: 6 }, { node: "E", weight: 1 }],
};

export default function DijkstraControls({
  visitedNodes,
  setVisitedNodes,
  currentNode,
  setCurrentNode,
  pqState,
  setPQState,
  distances,
  setDistances,
  onRun
}) {
  const handleRunDijkstra = () => {
    onRun?.();
    const traversal = dijkstra(weightedGraph, "A");
    const steps = [...traversal];

    let i = 0;
    const interval = setInterval(() => {
      if (i >= steps.length) {
        clearInterval(interval);
        return;
      }

      const {
        currentNode,
        visitedNodes: newVisited,
        pqState: newPQ,
        distances: newDistances,
      } = steps[i];

      setVisitedNodes(newVisited);
      setCurrentNode(currentNode);
      setPQState(newPQ);
      setDistances(newDistances);

      i++;
    }, 600);
  };

  return (
    <div className="mb-4">
      <button
        onClick={handleRunDijkstra}
        className="px-4 py-2 bg-pink-300 rounded hover:bg-pink-400 font-bold"
      >
        Run Dijkstra
      </button>
    </div>
  );
}

