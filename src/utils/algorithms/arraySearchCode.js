export const linearCode = [
  "for i in 0 to array.length:",
  "   if array[i] == target:",
  "       return i",
];

export const binaryCode = [
  "low = 0",
  "high = array.length - 1",
  "while low <= high:",
  "   mid = (low + high) // 2",
  "   if array[mid] == target:",
  "       return mid",
  "   else if array[mid] < target:",
  "       low = mid + 1",
  "   else:",
  "       high = mid - 1",
];

