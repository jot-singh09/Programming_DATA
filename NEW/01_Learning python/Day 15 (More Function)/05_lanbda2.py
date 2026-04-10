bigger = lambda a,b: a>b

num1=eval(input("Enter the Number :"))
num2=eval(input("Enter the Number :"))
if bigger(num1,num2)==True:
    print(f"{num1} is Bigger")
else:
    print(f"{num2} is Bigger")