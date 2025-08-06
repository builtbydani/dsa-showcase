export function* dijkstra(graph, startNode) {
  const visited = new Set();
  const distances = {};
  const pq = [{ node: startNode, dist: 0 }];
  const fullPQ = [{ node: startNode, dist: 0 }]; // History

  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;

  while (pq.length > 0) {
    // Sort PQ by lowest distance
    pq.sort((a, b) => a.dist - b.dist);
    const { node: current } = pq.shift();
    if (visited.has(current)) continue;
    visited.add(current);

    // Push step data
    yield {
      currentNode: current,
      visitedNodes: Array.from(visited),
      pqState: fullPQ.map((entry) => ({
        value: entry.node,
        priority: entry.dist,
        visited: visited.has(entry.node),
      })),
      distances: { ...distances },
    };

    for (const edge of graph[current]) {
      const neighbor = edge.node;
      const weight = edge.weight;
      const newDist = distances[current] + weight;

      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.push({ node: neighbor, dist: newDist });
        fullPQ.push({ node: neighbor, dist: newDist });
      }
    }
  }
}

