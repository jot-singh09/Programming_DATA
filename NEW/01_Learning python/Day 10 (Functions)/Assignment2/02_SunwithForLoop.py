'''
2. Sum with Condition (for loop)
Find the sum of numbers from 1 to 100, but:
• Stop the loop if sum becomes greater than 1000 using break
'''

sum=0
out=0

for i in range(1,101):
    sum+=i
    if sum>1000:
        break
    out=sum
print(sum)