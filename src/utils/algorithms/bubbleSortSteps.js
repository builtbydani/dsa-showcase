export default function bubbleSortSteps(arr) {
  const steps = [];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Always highlight the pair being compared
      steps.push([[...arr], [j, j + 1]]);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // Push the swapped result too
        steps.push([[...arr], [j, j + 1]]);
      }
    }
  }

  // Final pass — mark whole array as sorted (optional)
  steps.push([[...arr], []]);

  return steps;
}

