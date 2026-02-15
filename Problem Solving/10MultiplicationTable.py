# Print multiplication table for any number
# Input: 7
# Output:
# 7 x 1 = 7
# 7 x 2 = 14
# ...
# 7 x 10 = 70

table=int(input("Enter the number :"))

for t in range(11):
    print(f"{table} X {t}={table*t}")