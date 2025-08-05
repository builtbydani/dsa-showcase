export function* bfs(graph, startNode) {
  const visited = new Set();
  const queue = [startNode];
  const fullQueue = [startNode];

  while (queue.length > 0) {
    const current = queue.shift();
    if (visited.has(current)) continue;

    visited.add(current);

    yield {
      currentNode: current,
      visitedNodes: Array.from(visited),
      queueState: fullQueue.map((node) => ({
        value: node,
        visited: visited.has(node),
      })),
    };

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor) && !queue.includes(neighbor)) {
        queue.push(neighbor);
        fullQueue.push(neighbor);
      }
    }
  }
}

