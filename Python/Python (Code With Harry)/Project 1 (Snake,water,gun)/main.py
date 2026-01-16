import random # use to generate random number from 0,1,2,
'''
0 for snake
 1 for water 
 2 for gun
'''
computer = random.choice([0,1,2]) # select ramdom choice

youstr = (input("Enter Your Choise(s,w,g)")) # entering s,w,g
youdic={"s": 0, "w" :1 , "g" :2} # creating dic for if s so in math 0 etc
dic={0:"snake",1:"water",2:"gun"} # to dispaly choices if 0 so snake show etc
you=youdic[youstr] # converting the user input str in int for logic
comp=dic[computer] # converting the comp int digit into str to Display the choise
your=dic[you]# converting the user int digit into str to Display the choise


print(f"You Choose {youstr} ") # user choise
print(f"Computer Choose {comp}\n") # comp choice

# main checking login whose win! 

if (computer==you):
    print("Draw!")
elif(computer==0 and you==1):
    print("You Loose!")
elif(computer ==1 and you==0 ):
    print("You Win!")
elif(computer==1 and you==2):
    print("You Loose!")
elif(computer==2 and you==1):
    print("You Win!")
elif(computer==0 and you==2):
    print("You Win!")
elif(computer==2 and you==0):
    print("You Loose!")