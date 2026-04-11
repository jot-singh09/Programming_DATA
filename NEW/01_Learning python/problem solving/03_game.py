import random as r
print("Hello!")
print("Let's Play Rock paper siser game!")

bot=r.randint(1,3)
if bot==1:
    botc="r"
elif bot==2:
    botc="p"
else:
    botc="s"

p=True
while p :
    print("Rock=(R),paper=(P),sisor=(S)")
    # condition when always draw
    user=input("Enter Your Choice :").lower()
    if user=="exit" or user=="e":
        p==False
        print("See you next time!")
    elif (user=="r" and botc=="r") or (user=="p" and botc=="p") or (user=="s" and botc=="s"):
        print("Draw")
        print("Enter Exit to Close")

    
       
    # condition for user win
    elif (user=="r" and botc=="s") or (user=="s" and botc=="p") or (user=="p" and botc=="s"):
        print("Yoo!")
        print("You Win!")
        print("Enter Exit to Close")
           
    else:
        print("Noo!")
        print("You Loose!")
        print("Enter Exit to Close")
       
