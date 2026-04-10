'''
1. Print Numbers (while loop)
Print numbers from 1 to 50, but:
• Skip multiples of 3 using continue
'''

i=0
num=50
while i<=num:
    i+=1
    if i%3==0:
        continue
    print(i)
    # i+=1 this is not working..?
        

