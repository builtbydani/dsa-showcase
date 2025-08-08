export default function quickSortSteps(arr) {
  const steps = [];

  function quickSort(start, end) {
    if (start >= end) return;

    const pivotIndex = partition(start, end);
    quickSort(start, pivotIndex - 1);
    quickSort(pivotIndex + 1, end);
  }

  function partition(start, end) {
    const pivot = arr[end];
    let i = start;

    for (let j = start; j < end; j++) {
      steps.push([[...arr], [j, end], end]); // compare j and pivot
      if (arr[j] < pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        steps.push([[...arr], [i, j], end]); // highlight swap
        i++;
      }
    }

    [arr[i], arr[end]] = [arr[end], arr[i]];
    steps.push([[...arr], [i, end], end]); // final pivot swap
    return i;
  }

  quickSort(0, arr.length - 1);
  return steps;
}

