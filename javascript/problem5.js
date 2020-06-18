 // 2520 is the smallest number that can be divided
 // by each of the numbers from 1 to 10 without any remainder.

 // What is the smallest positive number that is
 // evenly divisible by all of the numbers from 1 to 20?

const smallestMult = (n) => {
  return range(1, n).reduce(lcm);  /* Smalest mult of array
                                      of numbers is their
                                      least common multiple */
}

const range = (min, max) => {
  if (min === max) {
    return [];
  }

  return [min].concat(range(min + 1, max));
}

const gcd = (a, b) => {
    return !b ? a : gcd(b, a % b);
}

const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
}

// test
console.log(smallestMult(20)); // => 232792560
