# Calculate sum of all numbers from 1 to n
# Input: 10
# Output: "Sum of 1 to 10 = 55"

num=int(input("Enter the number :"))
sum=0
for i in range(num+1):  
    sum=sum+i
print(f"The sum from 1 to {num} is : {sum} ")