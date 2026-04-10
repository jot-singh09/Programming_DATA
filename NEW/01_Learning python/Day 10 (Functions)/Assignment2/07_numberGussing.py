'''
7. Guess the Number Game
• Create a number (e.g., 7)
• Ask the user to guess
• Loop runs until correct guess
• Use break when correct
'''

print("Let's Play NUMBER GUSSING GAME!")
number=73
a=True
while a :
    guss=eval(input("Guss the Number please :"))
    if guss>50 and guss<70:
        print("Higher number please!")
    elif guss>=70 and guss<73:
        print("Too Close!")
    elif guss>0 and guss<=50:
        print("More Higher Number please!")
    elif guss>73 and guss<100:
        print("Smaller Number please!")
    elif guss>100:
        print("Too Lower Number please! ")
    elif guss<0:
        print("Enter Positive Number please! ")
    elif guss==number:
        print("Woo You Guss the number")
        a=False 