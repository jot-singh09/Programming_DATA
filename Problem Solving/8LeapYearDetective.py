# Check if a year is a leap year
# Rules: Divisible by 4, but not by 100 unless also by 400
# Input: 2024
# Output: "2024 is a leap year"
# Input: 2100
# Output: "2100 is not a leap year"

year= int(input("Enter the Year :"))
if year%4==0 :
    print(f"{year} is leap year")
else:
    print(f"{year} is not leap year")