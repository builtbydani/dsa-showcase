export function* astar(graph, startNode, goalNode, heuristic) {
  const visited = new Set();
  const gScore = {}; // actual cost
  const pq = [{ node: startNode, g: 0, f: heuristic(startNode) }];
  const fullPQ = [{ node: startNode, g: 0, f: heuristic(startNode) }];

  for (const node in graph) {
    gScore[node] = Infinity;
  }
  gScore[startNode] = 0;

  while (pq.length > 0) {
    pq.sort((a, b) => a.f - b.f);
    const { node: current } = pq.shift();
    if (visited.has(current)) continue;

    visited.add(current);

    yield {
      currentNode: current,
      visitedNodes: Array.from(visited),
      pqState: fullPQ.map((entry) => ({
        value: entry.node,
        priority: entry.f,
        visited: visited.has(entry.node),
      })),
      gScores: { ...gScore },
    };

    if (current === goalNode) return;

    for (const edge of graph[current]) {
      const neighbor = edge.node;
      const weight = edge.weight;
      const tentativeG = gScore[current] + weight;

      if (tentativeG < gScore[neighbor]) {
        gScore[neighbor] = tentativeG;
        const fScore = tentativeG + heuristic(neighbor);
        pq.push({ node: neighbor, g: tentativeG, f: fScore });
        fullPQ.push({ node: neighbor, g: tentativeG, f: fScore });
      }
    }
  }
}

