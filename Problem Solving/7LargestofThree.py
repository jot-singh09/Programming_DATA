# Find the largest among three numbers
# Input: 15, 8, 22
# Output: "22 is the largest"

num1=int(input("Enter the First  Number :"))
num2=int(input("Enter the Secound Number :"))
num3=int(input("Enter the Third Number :"))

if num1>num2 and num2>num3:
    print(f"{num1} is the largest ")
elif num2>num3:
    print(f"{num2} is the largest")
elif num3>num2 and num3>num1 :
    print(f"{num3} is the largest")
else:
    print(f"{num1},{num2},{num3} all are equall!")