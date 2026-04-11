def fact(n):
    fact=1
    for i in range(1,n+1):
        fact=fact*i
    return fact

def prime(n):
    for i in range(2,n):
        isprime=True
        if n%i==0:
            isprime=False
            break
    return isprime

def sum(n):
    sum=0
    for i in range(1,n+1):
        sum+=i
    return sum
