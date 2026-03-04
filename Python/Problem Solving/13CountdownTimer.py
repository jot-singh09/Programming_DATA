# Print countdown from n to 1, then "Blast Off!"
# Input: 5
# Output: 5 4 3 2 1 Blast Off!

n=int(input("Enter the number"))

for i in range(n):
    print(n)
    if n==1:
        print("Blast Off!")
    n=n-1
    