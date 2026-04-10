# def pnum(n):
#     num=1
#     if n==1:
#         return 1
    
#     return num+pnum(n-1)
# n=10
# for i in range(1,n+1):
#     print(pnum(10))



def pnum(n):
    if n==0:
        return
    pnum(n-1)
    print(n)
pnum(10)