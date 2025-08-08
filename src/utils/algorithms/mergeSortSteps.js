export default function mergeSortSteps(arr) {
  const steps = [];
  const aux = [...arr];

  function mergeSort(start, end) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);
    merge(start, mid, end);
  }

  function merge(start, mid, end) {
    let i = start;
    let j = mid + 1;
    let k = start;

    while (i <= mid && j <= end) {
      steps.push([[...aux], [i, j]]); // highlight comparison
      if (aux[i] <= aux[j]) {
        arr[k++] = aux[i++];
      } else {
        arr[k++] = aux[j++];
      }
    }

    while (i <= mid) {
      arr[k++] = aux[i++];
    }

    while (j <= end) {
      arr[k++] = aux[j++];
    }

    // Copy back into aux and push the visual step
    for (let m = start; m <= end; m++) {
      aux[m] = arr[m];
    }
    steps.push([[...arr], Array.from({ length: end - start + 1 }, (_, i) => start + i)]);
  }

  mergeSort(0, arr.length - 1);
  return steps;
}

