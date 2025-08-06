export default function insertionSortSteps(arr) {
  const steps = [];

  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      steps.push([[...arr], [j, j - 1]]); // Save state and highlight indices
      j--;
    }
    steps.push([[...arr], [j]]); // Optional: show current pointer after inner loop
  }

  return steps;
}

