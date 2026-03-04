# Classify person based on age:
# 0-12: Child
# 13-19: Teenager
# 20-64: Adult
# 65+: Senior
# Input: age=25
# Output: "You are an Adult"

age=int(input("Enter your age :"))
if age>=0 and age<=12:
    print("You are an child")

elif age>=13 and age<=19:
    print("You are an Teenager")
    
elif age>=20 and age<=64:
    print("You are an Adult")

else:
    print("You are an Senior")
