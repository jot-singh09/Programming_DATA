'''
9. Multiplication Table Generator
• Ask user for a number
• Print table up to 10
'''

table=int(input("Enter the Number :"))
for i in range (1,11):
    print(f"{table}X{i}={table*i}")