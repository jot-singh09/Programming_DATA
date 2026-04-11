'''
Define a function called analyze_numbers(start, end) that:

Takes two integers start and end as parameters (assume start < end).

Uses a loop to go through all numbers from start to end (inclusive).

For each number, uses conditional statements to check:

If the number is divisible by both 3 and 5 → print "FizzBuzz"

Else if divisible by 3 → print "Fizz"

Else if divisible by 5 → print "Buzz"

Else → print the number itself
'''

num=int(input("Enter the Staring Number :"))
num1=int(input("Enter the Staring Number :"))
sum=0
for i in range(num,num1+1):
    if i%3==0 and i%5==0:
        print("FizzBuzz")
    elif i%3==0:
        print("Fizz")
    elif i%5==0:
        print("Buzz")
    else:
        print(i)
    if i%2==0:
        sum+=i
print("Sum of even numbers:",sum)