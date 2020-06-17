// By listing the first six prime numbers:
// 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.

// What is the 10 001st prime number?

const nthPrime = (n) => {
  let primesSeen = 0;
  let number = 1;

  while (primesSeen < n) {
    number++;
    if (isPrime(number)) {
      primesSeen++;
    }
  }

  return number;
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

console.log(nthPrime(10001));
