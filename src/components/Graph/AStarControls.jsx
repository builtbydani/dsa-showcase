import { astar } from "../../utils/algorithms/astar";

// Same graph as Dijkstra
const weightedGraph = {
  A: [{ node: "B", weight: 2 }, { node: "C", weight: 5 }],
  B: [{ node: "A", weight: 2 }, { node: "D", weight: 4 }, { node: "E", weight: 7 }],
  C: [{ node: "A", weight: 5 }, { node: "F", weight: 6 }],
  D: [{ node: "B", weight: 4 }],
  E: [{ node: "B", weight: 7 }, { node: "F", weight: 1 }],
  F: [{ node: "C", weight: 6 }, { node: "E", weight: 1 }],
};

// Dummy heuristic: straight-line distance to "F" (goal)
const heuristic = (node) => {
  const estimates = {
    A: 6,
    B: 5,
    C: 2,
    D: 7,
    E: 1,
    F: 0,
  };
  return estimates[node] ?? Infinity;
};

export default function AStarControls({
  visitedNodes,
  setVisitedNodes,
  currentNode,
  setCurrentNode,
  pqState,
  setPQState,
  onRun
}) {
  const handleRunAStar = () => {
    onRun?.();
    const traversal = astar(weightedGraph, "A", "F", heuristic);
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
      } = steps[i];

      setVisitedNodes(newVisited);
      setCurrentNode(currentNode);
      setPQState(newPQ);

      i++;
    }, 600);
  };

  return (
    <div className="mb-4">
      <button
        onClick={handleRunAStar}
        className="px-4 py-2 bg-indigo-300 rounded hover:bg-indigo-400 font-bold"
      >
        Run A*
      </button>
    </div>
  );
}

