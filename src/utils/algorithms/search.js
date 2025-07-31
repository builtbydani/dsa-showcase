import { wait } from "../delay.js";

export async function linearSearch({
  array,
  target,
  setArray,
  setIsBinary,
  setCurrentIndex,
  setActiveLine,
}) {
  const fresh = [...array];
  setArray(fresh);
  setIsBinary(false);

  for (let i = 0; i < fresh.length; i++) {
    setActiveLine(0);
    await wait(300);
    setCurrentIndex(i);
    setActiveLine(1);
    await wait(300);
    if (fresh[i] === Number(target)) {
      setActiveLine(2);
      break;
    }
  }
  setActiveLine(null);
}

export async function binarySearch({
  array,
  target,
  setArray,
  setIsBinary,
  setCurrentIndex,
  setActiveLine,
}) {
  const fresh = [...array].sort((a, b) => a - b);
  setArray(fresh);
  setIsBinary(true);

  let low = 0, high = fresh.length - 1;
  setActiveLine(0);
  await wait(200);
  setActiveLine(1);
  await wait(200);

  while (low <= high) {
    setActiveLine(2);
    await wait(200);
    let mid = Math.floor((low + high) / 2);
    setActiveLine(3);
    setCurrentIndex(mid);
    await wait(300);

    if (fresh[mid] === Number(target)) {
      setActiveLine(4);
      break;
    }

    if (fresh[mid] < Number(target)) {
      setActiveLine(6);
      low = mid + 1;
    } else {
      setActiveLine(8);
      high = mid - 1;
    }

    await wait(300);
  }

  setActiveLine(null);
}

