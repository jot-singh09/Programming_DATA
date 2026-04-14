# 1. find largest number in list

num=[1,2,4,6,9]
sum=0

# with while loop
# i=0
# Len=len(num)
# while i<Len:
#     if sum<num[i]:
#         sum=num[i]
#     i+=1

# print(sum)

# With For loop
In=0
for i in num :
    if sum<num[In]:
        sum=num[In]
    In+=1

print(sum)
    