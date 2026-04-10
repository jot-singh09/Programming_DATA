num=int(input("Enter the Number :"))

num1=0
num2=1
if num==1:
    print(num1)
elif num==2:
    print(num1)
    print(num2)
elif num>=3:
    print(num1)
    print(num2)


for i in range(3,num+1):
    sum=num1+num2
    
    print(sum)
    num1=num2
    num2=sum        