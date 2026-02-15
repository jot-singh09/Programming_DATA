# Check if a number is even or odd
# Input: 7
# Output: "7 is odd"
# Input: 10
# Output: "10 is even"

num=int(input("Enter the number in integer :"))
if num%2==0:
    print(f"{num} is even ")

else:
    print(f"{num} is odd")