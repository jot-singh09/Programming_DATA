'''
# Example:
sum_digits(1234) → 1+2+3+4 = 10
'''

def sum_digit(n):
    if n==0:
        return 0
    
    mod=n%10
  
    return mod+sum_digit(n//10)
# n%10 (1234)=4
#4+3


print(sum_digit(1234))