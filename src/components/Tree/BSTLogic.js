export class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.x = 0;
    this.y = 0;
    this.level = 0;
  }
}

export class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this.#insertRecursive(this.root, value);
  }

  #insertRecursive(node, value) {
    if (node === null) return new BSTNode(value);

    if (value < node.value) {
      node.left = this.#insertRecursive(node.left, value);
    } else if (value > node.value) {
      node.right = this.#insertRecursive(node.right, value);
    }

    return node;
  }

  search(value) {
    return this.#searchRecursive(this.root, value);
  }

  #searchRecursive(node, value) {
    if (!node || node.value === value) return node;

    if (value < node.value) {
      return this.#searchRecursive(node.left, value);
    } else {
      return this.#searchRecursive(node.right, value);
    }
  }

  delete(value) {
    this.root = this.#deleteRecursive(this.root, value);
  }

  #deleteRecursive(node, value) {
    if (node === null) return null;

    if (value < node.value) {
      node.left = this.#deleteRecursive(node.left, value);
    } else if (value > node.value) {
      node.right = this.#deleteRecursive(node.right, value);
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        const minLargerNode = this.#getMinNode(node.right);
        node.value = minLargerNode.value;
        node.right = this.#deleteRecursive(node.right, minLargerNode.value);
      }
    }

    return node;
  }

  #getMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  inorder() {
    const result = [];
    this.#inorderRecursive(this.root, result);
    return result;
  }

  #inorderRecursive(node, result) {
    if (!node) return;
    this.#inorderRecursive(node.left, result);
    result.push(node.value);
    this.#inorderRecursive(node.right, result);
  }

  preorder(result = []) {
    this.#preorderRecursive(this.root, result);
    return result;
  }

  #preorderRecursive(node, result) {
    if (!node) return;
    result.push(node.value);
    this.#preorderRecursive(node.left, result);
    this.#preorderRecursive(node.right, result);
  }

  postorder(result = []) {
    this.#postorderRecursive(this.root, result);
    return result;
  }

  #postorderRecursive(node, result) {
    if (!node) return;
    this.#postorderRecursive(node.left, result);
    this.#postorderRecursive(node.right, result);
    result.push(node.value);
  }

  updatePositions(canvasWidth = 800) {
    console.log("[BST] updating positions, canvaswidth = ", canvasWidth);
    const setCoords = (node, x, y, level, spacing) => {
      if (!node) return;
      console.log(`Placing node ${node.value} at (${x}, ${y})`);

      node.x = x;
      node.y = y;
      node.level = level;

      const offset = spacing / 2;

      setCoords(node.left, x - offset, y + 80, level + 1, offset);
      setCoords(node.right, x + offset, y + 80, level + 1, offset);
    };

    const baseX = canvasWidth / 2;
    const baseY = 80;
    const spacing = canvasWidth / 3;

    setCoords(this.root, baseX, baseY, 0, spacing);
  }
}
