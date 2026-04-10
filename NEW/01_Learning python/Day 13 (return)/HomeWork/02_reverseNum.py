def reverse(num):
    value=num
    ans=0
    i=1
    while value>0:
        mod=value%10
        ans =  ans *10 + mod
        value=value//10
    return ans


num=int(input("Enter the number :"))
ans = reverse(num)
print(ans)
    