import random
num=50
computer =random.randint(1, num)      # Random integer between 1-50


you=int(input("Guess The Number (1 to 50) :"))
print(f"You Choose {you}")
print(f"Computer Choose {computer}")

if you>num:
    print("Enter Between The (1 to 50 )")
elif you<=num:
    
    if you==computer:
        print("You Wins!")
    elif you>computer:
        print("You Loose!")
        print("Lower Number Please!")
    elif you<computer:
        print("You Loose!")
        print("Bigger Number Please!")
    else:print("Try Again!")
else:
    print("Try Again!")     



   
 