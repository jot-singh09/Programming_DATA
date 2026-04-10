

unit = eval(input("Enter Your Units :"))
bill=0
if unit <=100 and unit>1:
    bill=unit*5
    print(f"Your Bill are {bill} Rupees")
elif unit>100 and unit<=300:
    bill=unit*7
    print(f"Your Bill are {bill} Rupees")
elif unit>300:
    bill=unit*10
    print(f"Your Bill are {bill} Rupees")
else:
    print("Invalild Unit Entered")

