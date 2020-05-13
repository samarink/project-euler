# A palindromic number reads the same both ways.
# The largest palindrome made from the product of
# two 2-digit numbers is 9009 = 91 × 99.

# Find the largest palindrome made from the product of two 3-digit numbers.

# No brainer
def largerts_pall()
  curr = 1 # current largest pall

  (100..999).each do |a|
    (a..999).each do |b| # start form a to skip unnecessary duplication
      candidat = a * b

      if is_pall?(candidat.to_s) && candidat >= curr
        curr = candidat
      end
    end
  end

  curr
end

def is_pall?(str)
  str == str.reverse
end

# test
p largerts_pall # => 906609
