
def check_prime(num):
    if num==1:
        return False
    else:
        isprime=True
        for j in range (2,num):
            if num%j==0:
                isprime=False
                break
        return isprime

num=int(input("Enter the Number :"))
for i in range(1,num+1):
    ans= check_prime(i)
    if ans==True:
        print(i)
