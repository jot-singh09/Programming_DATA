# Create a program that swaps the values of three variables in a loop

num1=int(input("Enter the First Number :"))
num2=int(input("Enter the Secound Number :"))
num3=int(input("Enter the Third Number :"))
loop=0
a=0
b=0
c=0
if (num1>num2 and num1>num3):
    loop=num1
elif (num2>num3):
    loop=num2
else:
    loop=num3 

for i in range(loop+1):
    if i==num1:
        print(num3)
    if (i==num2):
        print(num1)
    if i==num3:
        print(num2)
    i=i+1




