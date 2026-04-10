def prime(num):
    for i in range(2,num):
        if num%i==0:
            return False
            break
       
    return True


num=int(input("Enter The Value :"))
ans=prime(num)
if ans==True:
    print(f"{num} is Prime Number ")
else:
    print(f"{num} is not Prime Number ")