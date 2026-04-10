def sum(start,end):
    sum=0
    for i in range(start,end+1):
        sum+=i
    print(sum)
num=int(input("Enter the Value :"))
num1=int(input("Enter the Value :"))
sum(num,num1)