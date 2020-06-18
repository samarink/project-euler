// A Pythagorean triplet is a set of three
// natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2

// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const pyhTriplet = n => {
  for (let a = 1; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
      const c = n - a - b;

      if (isTriplet(a, b, c, n)) {
        return a * b * c;
      }
    }
  }
}

const isTriplet = (a, b, c, n) => {
  return ( a**2 + b**2 == c**2 && a + b + c ==n )
}

// test
console.log(pyhTriplet(1000)); // => 31875000
