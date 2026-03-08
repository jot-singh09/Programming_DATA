# Create variables to represent a person's details and calculate their birth year from age
import time
from datetime import date



name=input("Enter your Name :")
age=int(input("Enter your Age :"))

print("\n Let's Calculate Your Birth Year\n")
print("Loading...")
time.sleep(3)
today = date.today().year
birth=today-age
print(f"The Birth Year of {name} is : {birth}")

