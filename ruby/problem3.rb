# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?

def largest_prime_factor(num)
  return num if is_prime?(num)

  largest = 0

  (2..Math.sqrt(num)).each do |n|
    largest = n if num % n == 0 && is_prime?(n)
  end

  largest

end

def is_prime?(num)
  (2..Math.sqrt(num)).each do |n|
    return false if num % n == 0
  end

  true
end

# Test
p largest_prime_factor(2)             #    2
p largest_prime_factor(3)             #    3
p largest_prime_factor(5)             #    5
p largest_prime_factor(7)             #    7
p largest_prime_factor(13195)         #   29
p largest_prime_factor(600851475143)  # 6857
