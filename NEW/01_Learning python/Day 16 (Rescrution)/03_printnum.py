def pnum(n):
    if n==0:
        return
    print(n)
    pnum(n-1)
pnum(6)