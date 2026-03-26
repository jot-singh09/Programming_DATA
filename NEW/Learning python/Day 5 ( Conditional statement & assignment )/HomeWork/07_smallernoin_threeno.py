
num1=eval(input("Enter the First Number :"))
num2=eval(input("Enter the Secound Number :"))
num3=eval(input("Enter the Third Number :"))
if num1<num2 and num2<num3:
    print(f"{num1} is Smallest Number")
elif num2<num3:
    print(f"{num2} is Smallest Number")
else:
    print(f"{num3} is Smallest Number")