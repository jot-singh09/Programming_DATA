# Calculate factorial of a number
# Input: 5
# Output: "5! = 120" (5×4×3×2×1) or (1*2*3*4*5)

num=int(input("Enter the number :"))
i=1
for i in range(num+1):
   sum=num*i
   num=num-1
   print(sum)
   