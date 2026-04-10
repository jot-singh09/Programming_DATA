def prime(num):
    
    i=2
    while i<=num:
            isprime=True
            j=2
            while j<i: 
                print(j,"while")
                if i%j==0:
                    isprime=False
                    break
                j+=1

            if isprime==True:
                return i
            i+=1
num1=int(input("Enter the Value :"))
ans =prime(num1)
print(ans)