function Problem004(arr) {
  const hashTable = arr.reduce((acc, next) =>
    acc.set(next, next), new Map);

  for (let num of arr) {
    const lowest = --num;

    if (!hashTable.has(lowest) && lowest > 0) {
      return lowest
    }
  }

  return Math.max(...arr) + 1
}

Problem004([3, 4, -1, 1]); // 2