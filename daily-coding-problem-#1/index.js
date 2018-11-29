function Problem001(arr, sum) {
  const hashTable = new Set();

  for (let num of arr) {
    if (hashTable.has(num)) return true;
    hashTable.add(sum - num);
  }

  return false
}

Problem001([10, 15, 3, 7], 17); // true