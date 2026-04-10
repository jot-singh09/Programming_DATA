def prime(num):
    i=2
   
    while i<num:
        if num%i==0:
            return False
            break
        
        i+=1
    return True
num=int(input("Enter the value :"))
ans=prime(num)
if ans==True:
    print("This is prime number ")
else:
    print("This is not prime number ")

    