'''
8. Skip Speci c Numbers
Print numbers from 1 to 30, but:
• Skip numbers divisible by 2 AND 5
out=1 3 7 9 11 13 17 19 21 23 27 29
'''
# i=0
# while i<=30: # condition is =30 going to 31..?
#     i+=1
#     if i%2==0 or i%5==0:
#         continue
#     print(i)

for i in range(1,31):
    if i%2==0 or i%5==0:
        continue
    print(i)

