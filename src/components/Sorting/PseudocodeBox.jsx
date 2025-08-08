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
      {sortType === "bubble" && (
        <pre>
          {`for i = 0 to n - 1
            for j = 0 to n - i - 1
              if A[j] > A[j+1]
                swap A[j] and A[j+1]
          `}
        </pre>
      )}
      {sortType === "merge" && (
        <pre>
          {`function mergeSort(arr):
            if len(arr) <= 1: return
            mid = len(arr) // 2
            left = mergeSort(arr[0:mid])
            right = mergeSort(arr[mid:])
            return merge(left, right)

          function merge(left, right):
            result = []
            while left and right:
              if left[0] < right[0]:
                result.append(left.pop(0))
              else:
                result.append(right.pop(0))
            return result + left + right
          `}
        </pre>
      )}
      {sortType === "quick" && (
        <pre>
          {`function quickSort(arr, start, end):
            if start >= end: return
            pivotIndex = partition(arr, start, end)
            quickSort(arr, start, pivotIndex - 1)
            quickSort(arr, pivotIndex + 1, end)

          function partition(arr, start, end):
            pivot = arr[end]
            i = start
            for j = start to end-1:
              if arr[j] < pivot:
                swap arr[i], arr[j]
                i++
            swap arr[i], arr[end]
            return i`}
        </pre>
      )}

    </GlowPanel>
  );
}
