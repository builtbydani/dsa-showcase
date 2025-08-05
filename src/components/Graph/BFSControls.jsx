import { bfs } from "../../utils/algorithms/bfs";

const presetGraph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

export default function BFSControls({
  visitedNodes,
  setVisitedNodes,
  currentNode,
  setCurrentNode,
  queueState,
  setQueueState
}) {
  const handleRunBFS = () => {
    const traversal = bfs(presetGraph, "A");
    const steps = [...traversal];

    let i = 0;
    const interval = setInterval(() => {
      if (i >= steps.length) {
        clearInterval(interval);
        return;
      }

      const { currentNode, visitedNodes: newVisited, queueState: newQueueState } = steps[i];
      setVisitedNodes(newVisited);
      setCurrentNode(currentNode);
      setQueueState(newQueueState);
      i++;
    }, 600);
  };

  return (
    <div className="mb-4">
      <button
        onClick={handleRunBFS}
        className="px-4 py-2 bg-yellow-300 rounded hover:bg-yellow-400 font-bold"
      >
        Run BFS
      </button>
    </div>
  );
}

