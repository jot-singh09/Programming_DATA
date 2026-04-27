'''
make a normal set and remove the random value in set 

'''
s = {1,2,3,4,5,6,7,8,9,10}
ans = s.pop()
print(ans)
i=0
j=2
while i<3 :
    user=int(input("Guss the Value Which is Removed :"))
    if user == ans:
        print("You Guss the Value!")
        break
    else:
        print("You not Guss the Value!")
        if j>=1:
            print(f"Your {j} Attemps are Left to Guss")
        elif j==0:
            print("You Loose the Game ")
            print("Better luck next time !")

        print()
    i+=1
    j-=1
