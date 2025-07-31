// src/components/ArraySearch/ArrayDescription.jsx
import DescriptionBox from "../Common/DescriptionBox";

export default function ArrayDescription() {
  return (
    <DescriptionBox>
      <p>
        <strong>Linear Search:</strong>
        <br />
        Checks each element one by one from left to right until it finds the target value.
        <br />
        Time complexity is <code>O(n)</code>.
        <br />
        <br />
        <strong>Binary Search:</strong>
        <br />
        Requires a sorted array.
        <br />
        Repeatedly divides the search space in half by comparing
        the middle element to the target.
        <br />
        Time complexity is <code>O(log n)</code>.
      </p>
    </DescriptionBox>
  );
}

