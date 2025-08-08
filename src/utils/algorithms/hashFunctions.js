// Basic hash: sum char codes % bucket count
export function simpleHash(key, bucketCount = 10) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % bucketCount;
}

