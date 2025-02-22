function fibs(n) {
  let fibsArr = [];

  for (let i = 0; i < n; i++) {
    if (i <= 1) fibsArr.push(i);
    else {
      const next = fibsArr[i - 1] + fibsArr[i - 2];
      fibsArr.push(next);
    }
  }

  return fibsArr;
}

function fibsRec(n) {
  // Base case
  if (n === 2) return [0, 1];
  if (n === 1) return [0];
  if (n <= 0) return [];

  // Recursive case
  let arr = fibsRec(n - 1);
  arr.push(arr[n - 2] + arr[n - 3]);
  return arr;
}

console.log(fibsRec(10));
console.log(fibs(10));
