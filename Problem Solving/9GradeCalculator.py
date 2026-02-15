# Convert percentage to letter grade
# 90-100: A
# 80-89: B
# 70-79: C
# 60-69: D
# Below 60: F
# Input: 85
# Output: "Your grade is B"

percentage=float(input("Enter your precentage :"))
if percentage>=90 and percentage<=100:
     print("Your Grade is A")

elif percentage>=80 and percentage<=89:
     print("Your Grade is B")
elif percentage>=70 and percentage<=79:
     print("Your Grade is C")
elif percentage>=60 and percentage<=69:
     print("Your Grade is D")
elif percentage>100:
     print("Precentage will between 0-100")
     print(f" you enter {percentage} ")
else:
     print("Your Grade is F")