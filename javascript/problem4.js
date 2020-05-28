// A palindromic number reads the same both ways.
// The largest palindrome made from the product of
// two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const largestPall = () => {
  let largest = 0;

  for (let i = 0; i < 999; i++) {
    for (let j = i; j < 999; j++) {
      let candidat = i * j;

      if (isPall(String(candidat)) && candidat > largest) {
        largest = candidat;
      }
    }
  }

  return largest;
}

const isPall = str => {
  return str === str.split('').reverse().join('');
}

console.log(largestPall() === 906609);
