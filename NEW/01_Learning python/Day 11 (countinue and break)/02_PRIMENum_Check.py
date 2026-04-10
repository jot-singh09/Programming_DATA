check=True
num=int(input("Enter The Value :"))
for i in range(2,num):
    if num%i==0:
        check=False
        break
if check==True:
    print(f"{num} is Prime Number ")
else:
    print(f"{num} is not Prime Number ")


