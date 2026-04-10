num=int(input("Enter the number :"))
# num=1.59 float not working
reverse=0
mod=0
while num>0:
    mod=num%10
    reverse=(reverse*10)+mod
    num=num//10

print(reverse)