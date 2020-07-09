// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

const sumOfPrimesBelow = n => {
  let sum = 0;
  let number = 1;

  while (number < n) {
    number++;
    if (isPrime(number)) {
      sum += number;
    }
  }

  return sum;
}

const isPrime = num => {
  if (num < 2) { return false; }

  for (let i = 2; (i * i) <= num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

// test
console.log(sumOfPrimesBelow(2000000)); // => 142913828922
