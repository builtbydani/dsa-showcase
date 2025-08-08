export default class MinHeap {
  constructor() {
    this.heap = [];
    this.steps = []; // [arraySnapshot, highlightIndices]
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  insert(value) {
    this.heap.push(value);
    this.steps.push([[...this.heap], [this.heap.length - 1]]);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      this.steps.push([[...this.heap], [index, parentIndex]]);

      if (this.heap[index] < this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        this.steps.push([[...this.heap], [index, parentIndex]]);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMin() {
    if (this.heap.length === 0) return;

    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.steps.push([[...this.heap], [0]]);
      this.heapifyDown(0);
    }

    return min;
  }

  heapifyDown(index) {
    const length = this.heap.length;

    while (true) {
      const left = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      this.steps.push([[...this.heap], [index, smallest]]);
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.steps.push([[...this.heap], [index, smallest]]);
      index = smallest;
    }
  }

  getSteps() {
    return this.steps;
  }

  getHeap() {
    return this.heap;
  }

  resetSteps() {
    this.steps = [];
  }
}

