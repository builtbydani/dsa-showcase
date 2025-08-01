import DescriptionBox from "../Common/DescriptionBox.jsx";

export default function StackDescription() {
  return (
    <DescriptionBox>
        <p>
          <strong>Stack (LIFO):</strong>
          <br />
          The last item added is the first one removed. Imagine a stack of plates.
          <br /><br />
          <strong>Queue (FIFO):</strong>
          <br />
          The first item added is the first one removed. Like a line at a coffee shop.
        </p>
      </DescriptionBox>
  );
}
