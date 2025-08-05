import GlowPanel from "../Common/GlowPanel";
import GlowTitle from "../Common/GlowTitle";

export default function PseudocodeBox({ mode }) {
  let lines = [];

  if (mode === "insert") {
    lines = [
      "function insert(node, value):",
      "  if node is null:",
      "    return new Node(value)",
      "  if value < node.value:",
      "    node.left = insert(node.left, value)",
      "  else if value > node.value:",
      "    node.right = insert(node.right, value)",
      "  return node",
    ];
  } else if (mode === "search") {
    lines = [
      "function search(node, value):",
      "  if node is null or node.value == value:",
      "    return node",
      "  if value < node.value:",
      "    return search(node.left, value)",
      "  else:",
      "    return search(node.right, value)",
    ];
  } else if (mode === "delete") {
    lines = [
      "function delete(node, value):",
      "  if node is null:",
      "    return null",
      "  if value < node.value:",
      "    node.left = delete(node.left, value)",
      "  else if value > node.value:",
      "    node.right = delete(node.right, value)",
      "  else:",
      "    if no children: return null",
      "    if one child: return that child",
      "    node.value = min(node.right)",
      "    node.right = delete(node.right, node.value)",
      "  return node",
    ];
  }

  return (
    <GlowPanel title="Pseudocode:">
      <pre className="font-mono text-sm whitespace-pre leading-6">
        {lines.join("\n")}
      </pre>
    </GlowPanel>
  );
}

