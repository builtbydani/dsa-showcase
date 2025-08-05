export function* dfs(graph, startNode) {
  const visited = new Set();
  const stack = [startNode];
  const fullStack = [startNode]; // Track all nodes ever pushed

  while (stack.length > 0) {
    const current = stack.pop();
    if (visited.has(current)) continue;

    visited.add(current);

    yield {
      currentNode: current,
      visitedNodes: Array.from(visited),
      stackState: fullStack.map((node) => ({
        value: node,
        visited: visited.has(node),
      })),
    };

    // Add neighbors in reverse order to simulate "left-to-right" depth
    const neighbors = graph[current];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const neighbor = neighbors[i];
      if (!visited.has(neighbor) && !stack.includes(neighbor)) {
        stack.push(neighbor);
        fullStack.push(neighbor);
      }
    }
  }
}

