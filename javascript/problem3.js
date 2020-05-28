// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const largestPrimeFactor = num => {
  if (isPrime(num)) { return num; }

  let largest = 0;

  for (let i = 2; (i * i) <= num; i++) {
    if ( num % i === 0 && isPrime(i) ) {
      largest = i;
    }
  }

  return largest;
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
console.log(largestPrimeFactor(600851475143) === 6857);
