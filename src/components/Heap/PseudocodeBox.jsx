import GlowPanel from "../Common/GlowPanel";

export default function PseudocodeBox() {
  return (
    <GlowPanel title="Pseudocode:">
      <pre className="text-sm font-mono leading-snug whitespace-pre-wrap">
{`insert(value):
  add to end of array
  heapifyUp(index)

heapifyUp(index):
  while index > 0 and parent > current:
    swap with parent
    move index up

extractMin():
  swap root with last
  remove min
  heapifyDown(0)

heapifyDown(index):
  while child < current:
    swap with smaller child
    move index down`}
      </pre>
    </GlowPanel>
  );
}

