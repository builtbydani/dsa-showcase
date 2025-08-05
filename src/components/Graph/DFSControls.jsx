import { dfs } from "../../utils/algorithms/dfs";

const presetGraph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

export default function DFSControls({
  visitedNodes,
  setVisitedNodes,
  currentNode,
  setCurrentNode,
  stackState,
  setStackState,
}) {
  const handleRunDFS = () => {
    const traversal = dfs(presetGraph, "A");
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
        stackState: newStackState,
      } = steps[i];

      setVisitedNodes(newVisited);
      setCurrentNode(currentNode);
      setStackState(newStackState);
      i++;
    }, 600);
  };

  return (
    <div className="mb-4">
      <button
        onClick={handleRunDFS}
        className="px-4 py-2 bg-purple-300 rounded hover:bg-purple-400 font-bold"
      >
        Run DFS
      </button>
    </div>
  );
}

