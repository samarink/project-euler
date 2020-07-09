// The sum of the squares of the first ten natural numbers is,
// 1^2+2^2+...+10^2=385

// The square of the sum of the first ten natural numbers is,
// (1+2+...+10)^2=552=3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const squaresDiff = (n) => {
  const r = range(1, n);

  return squareOfSum(r) - sumOfSquares(r);
}

const range = (min, max) => {
  if (min > max) { // include max
    return [];
  }

  return [min].concat(range(min + 1, max));
}

const sumOfSquares = (range) => {
  return range.reduce((acc, cur) => {
    return acc + (cur * cur);
  }, 0);
}

const squareOfSum = (range) => {
  const sum = range.reduce((acc, cur) => acc + cur);
  return (sum * sum);
}

// test
console.log(squaresDiff(100));
