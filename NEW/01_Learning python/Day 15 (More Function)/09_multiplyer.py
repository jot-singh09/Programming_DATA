def fun(n):
    return lambda num: num*n

multiplyer=fun(2)
ans=multiplyer(10)
print(ans)