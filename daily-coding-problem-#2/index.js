// Solution O(n), but with division
function Problem002(arr) {
  let mult = arr.slice(1).reduce((a, b) => a * b, 1);
  const result = [mult];

  for (let i = 1; i < arr.length; i++) {
    mult = mult * arr[i - 1] / arr[i];
    result.push(mult); // res[i] = mult;
  }

  return result
}

Problem002([[1, 2, 3, 4, 5]]); // [120, 60, 40, 30, 24]