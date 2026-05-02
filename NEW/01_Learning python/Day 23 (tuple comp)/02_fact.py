def fact(n):
    f=1
    for i in range(1,n+1):
        f*=i
    return f , n
    
(*res, n) = fact(5)
print(res)
print(n)