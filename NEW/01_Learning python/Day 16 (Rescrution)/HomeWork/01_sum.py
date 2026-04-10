'''
# Example:
sum_digits(1234) → 1+2+3+4 = 10
'''

def sum_digit(n):
    sum=0
    single_dig=n%10
    sum=sum+single_dig
    # single_dig=single_dig/10
    if n==0:
        return sum
    return sum_digit()


print(sum_digit(1234))