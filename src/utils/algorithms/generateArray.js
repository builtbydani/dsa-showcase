export function generateArray(forceInclude) {
    const arr = [];
    const length = 8;

    if (forceInclude !== undefined && forceInclude !== "") {
      arr.push(Number(forceInclude));
    }

    while (arr.length < length) {
      const num = Math.floor(Math.random() * 20) + 1;
      if (!arr.includes(num)) {
        arr.push(num);
      }
    }

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }
