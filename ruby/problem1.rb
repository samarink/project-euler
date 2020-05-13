# If we list all the natural numbers below 10 that are multiples of 3 or 5,
# we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

# Straightforward approach
def sum_of_mults(limit)
  sum = 0

  (1...limit).each do |number|
    sum += number if number % 3 == 0 || number % 5 == 0
  end

  sum
end

# Return an array of multipes of either of numbers args
# Up to but not including limit
def multiples(limit, *numbers)
  (1...limit).select { |n| numbers.any? { |number| n % number == 0 } }
end

# Return sum of an array
def sum(arr)
  arr.reduce(:+)
end

# Implemented from notes
# Optimized approach
def sum_devisible_by(number, limit)
  p = limit / number
  number * (p * (p + 1)) / 2
end

def sum_of_mults_optimized()
  sum_devisible_by(3, 1000) + sum_devisible_by(5, 1000) - sum_devisible_by(15, 1000)
end

# Test
below_10   = multiples(10, 3, 5)
below_1000 = multiples(1000, 3, 5)

puts sum(below_10)              # => 23
puts sum(below_1000)            # => 233168
puts sum_of_mults(1000)         # => 233168
puts sum_of_mults_optimized     # => 233168
