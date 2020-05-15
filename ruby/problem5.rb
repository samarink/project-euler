# 2520 is the smallest number that can be divided
# by each of the numbers from 1 to 10 without any remainder.

# What is the smallest positive number that is
# evenly divisible by all of the numbers from 1 to 20?

# Smalest mult of array of numbers is their least common multiple
def smallestMult(n)
  (1..n).to_a.inject(:lcm)
end

# Test
p smallestMult(5)    # => 60
p smallestMult(7)    # => 420
p smallestMult(10)   # => 2520
p smallestMult(20)   # =>
