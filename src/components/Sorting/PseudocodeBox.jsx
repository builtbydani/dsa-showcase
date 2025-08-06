import GlowPanel from "../Common/GlowPanel";

export default function PseudocodeBox({ sortType }) {
  return (
    <GlowPanel title="Pseudocode:">
      {sortType === "insertion" && (
        <pre>
          {`for i = 1 to n-1
            j = 1
            while j > 0 and A[j] < A[j-1]
              swap A[j] and A[j-1]
              j--
          `}
        </pre>
      )}
    </GlowPanel>
  );
}
