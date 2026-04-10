num=int(input("Enter the value :"))
i=2
isprime=True
while i<num:
    if num%i==0:
        isprime=False
        break
    i+=1
if isprime==True:
    print("This is prime number ")
else:
    print("This is not prime number ")

    