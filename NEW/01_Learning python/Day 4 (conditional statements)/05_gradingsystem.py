'''
90 Grade A
60-90 B
40-60 C
-40 fail
'''
precentage=eval(input("Enter Your Precentage :"))
if precentage>90  and precentage<=100:
    print("You Got a A grade")
elif precentage>60 and precentage<=90:
    print("You Got a B grade")
elif precentage>=40 and precentage<=60:
    print("You Got a C grade")
elif precentage<40 and precentage>=1:
    print("You are Fail!")
else:
    print("Invaild Entered")

    
