import GlowPanel from "../Common/GlowPanel";

const pseudocodeMap = {
  BFS: [
    "Create a queue and add the start node",
    "While queue is not empty:",
    " Dequeue node",
    " If not visited:",
    "  Mark as visited",
    "  Add all unvisited neighbors to queue",
  ],
  DFS: [
    "Create a stack and push the start node",
    "While stack is not empty:",
    " Pop node",
    " If not visited:",
    "  Mark as visited",
    "  Push all unvisited neighbors to stack",
  ],
  Dijkstra: [
    "Set all distances to ∞, start = 0",
    "Add start to priority queue",
    "While queue is not empty:",
    " Get node with smallest distance",
    " If not visited:",
    "  Mark as visited",
    "  For each neighbor:",
    "   If shorter path found:",
    "    Update distance",
    "    Add neighbor to queue",
  ],
  AStar: [
    "g(n) = cost from start",
    "f(n) = g(n) + h(n)",
    "Add start to open list",
    "While open list not empty:",
    " Pick node with lowest f(n)",
    " If goal, done",
    " Mark as visited",
    " For each neighbor:",
    "  Update g(n), f(n)",
    "  Add to open list if better",
  ],
};

export default function PseudocodeBox({ algorithm = "BFS" }) {
  const code = pseudocodeMap[algorithm] || [];

  return (
    <GlowPanel 
      title={`${algorithm} Pseudocode`} 
      className="w-[380px] h-[220px] overflow-hidden"
    >
      <div className="text-sm font-mono space-y-1 text-left px-2 h-full overflow-y-auto">
        {code.map((line, index) => (
          <div key={index} className="whitespace-pre">
            {line}
          </div>
        ))}
      </div>
    </GlowPanel>
  );
}
