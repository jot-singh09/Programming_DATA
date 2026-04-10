def sum(*num):
    sum=0   
    i=0
    while i<len(num):
        sum+=num[i]
        i+=1
    return sum


print(sum(2,4,6,8))