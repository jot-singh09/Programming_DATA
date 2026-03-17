# if all user invest $1 
'''
red=2%
green=2%
voilet=3%
'''

red=int(input("Enter The Value of Red :"))
green=int(input("Enter The Value of Green :"))
Voilet=int(input("Enter The Value of Voilet :"))
mul_green=green+green
mul_voilet=Voilet+Voilet
mul_red=red+red
print(f"The Red Value is : {red}")
print(f"The Green Value is : {green}")
print(f"The Voilet Value is : {Voilet}")
print("\n")

if(red<green and red<Voilet): # check if red is smaller than others
    sum_predication=green+Voilet
    print("Total of others",sum_predication)
    
    print("\n")
    print("red is smaller ")
    if(sum_predication>mul_red): # check if the sum of green and voilet is double or more the red value
        user_distribution=(red*100)/100 # distribution in user 
        print("Distributed in users :",user_distribution)
        sum_predication-user_distribution # subtract the user distribution in total of green and voilet

        distributed_levels=(red*30)/100 # disbtribution in levels
        print(f"Fund Collect for levels :{distributed_levels}" )
        eachuser_distribution=(distributed_levels*red)/100 # distribute in each red user levels
        print(f"Fund Distribute in all red user level : {eachuser_distribution}")
        sum_predication- distributed_levels # subtract the level distribution in total of green and voilet
        print("\n")
        print(f"The Rest amount of admin is:{sum_predication}")
        print("\n")
   
    elif(sum_predication>mul_green):  # if the amount is not bigger then double of red
        print("distribution in green ")
        user_distribution=(green*100)/100 # distribution in user 
        print("Distributed in users :",user_distribution)
        sum_predication-user_distribution # subtract the user distribution in total of green and voilet

        distributed_levels=(green*30)/100 # disbtribution in levels
        print(f"Fund Collect for levels :{distributed_levels}" )
        eachuser_distribution=(distributed_levels*green)/100 # distribute in each red user levels
        print(f"Fund Distribute in green user level : {eachuser_distribution}")
        sum_predication- distributed_levels # subtract the level distribution in total of green and voilet
        print("\n")
        print(f"The Rest amount of admin is:{sum_predication}")
        print("\n")
    elif(sum_predication>mul_voilet): # if the amount is not bigger then double of red and green
        print("distribution in voilet ")
        user_distribution=(Voilet*100)/100 # distribution in user 
        print("Distributed in users :",user_distribution)
        sum_predication-user_distribution # subtract the user distribution in total of green and voilet

        distributed_levels=(Voilet*30)/100 # disbtribution in levels
        print(f"Fund Collect for levels :{distributed_levels}" )
        eachuser_distribution=(distributed_levels*Voilet)/100 # distribute in each red user levels
        print(f"Fund Distribute in all voilet user level  :{eachuser_distribution}")
        sum_predication- distributed_levels # subtract the level distribution in total of green and voilet
        print("\n")
        print(f"The Rest amount of admin is:{sum_predication}")
        print("\n")
    else: # if the amount is not bigger then double of red and green and voilet
        print("All amount goes to admin")






elif(green>Voilet):
    sum_predication=red+Voilet
    print("Total of others",sum_predication)
    
    print("\n")
    print("Green is smaller ")
    if(sum_predication>mul_green): # check if the sum of red and voilet is double or more the red value
        user_distribution=(green*100)/100 # distribution in user 
        print("Distributed in users :",user_distribution)
        sum_predication-user_distribution # subtract the user distribution in total of green and voilet

        distributed_levels=(green*30)/100 # disbtribution in levels
        print(f"Fund Collect for levels :{distributed_levels}" )
        eachuser_distribution=(distributed_levels*green)/100 # distribute in each red user levels
        print(f"Fund Distribute in all green user level : {eachuser_distribution}")
        sum_predication- distributed_levels # subtract the level distribution in total of green and voilet
        print("\n")
        print(f"The Rest amount of admin is:{sum_predication}")
        print("\n")
   
    elif(sum_predication>mul_red):  # if the amount is not bigger then double of green
        print("distribution in red ")
        user_distribution=(red*100)/100 # distribution in user 
        print("Distributed in users :",user_distribution)
        sum_predication-user_distribution # subtract the user distribution in total of green and voilet

        distributed_levels=(red*30)/100 # disbtribution in levels
        print(f"Fund Collect for levels :{distributed_levels}" )
        eachuser_distribution=(distributed_levels*red)/100 # distribute in each red user levels
        print(f"Fund Distribute in all red user level : {eachuser_distribution}")
        sum_predication- distributed_levels # subtract the level distribution in total of green and voilet
        print("\n")
        print(f"The Rest amount of admin is:{sum_predication}")
        print("\n")
    elif(sum_predication>mul_voilet): # if the amount is not bigger then double of  red and green
        print("distribution in voilet ")
        user_distribution=(Voilet*100)/100 # distribution in user 
        print("Distributed in users :",user_distribution)
        sum_predication-user_distribution # subtract the user distribution in total of green and voilet

        distributed_levels=(Voilet*30)/100 # disbtribution in levels
        print(f"Fund Collect for levels :{distributed_levels}" )
        eachuser_distribution=(distributed_levels*Voilet)/100 # distribute in each red user levels
        print(f"Fund Distribute in all voilet user level : {eachuser_distribution}")
        sum_predication- distributed_levels # subtract the level distribution in total of green and voilet
        print("\n")
        print(f"The Rest amount of admin is:{sum_predication}")
        print("\n")
    else: # if the amount is not bigger then double of red and green and voilet
        print("All amount goes to admin")






elif(Voilet>red and Voilet>green):
    sum_predication=red+green
    print("Total of others",sum_predication)
    
    print("\n")
    print("voilet is smaller ")
    if(sum_predication>mul_voilet): # check if the sum of green and red is double or more the red value
        user_distribution=(Voilet*100)/100 # distribution in user 
        print("Distributed in users :",user_distribution)
        sum_predication-user_distribution # subtract the user distribution in total of green and voilet

        distributed_levels=(Voilet*30)/100 # disbtribution in levels
        print(f"Fund Collect for levels :{distributed_levels}" )
        eachuser_distribution=(distributed_levels*Voilet)/100 # distribute in each red user levels
        print(f"Fund Distribute in all Voilet user level : {eachuser_distribution}")
        sum_predication- distributed_levels # subtract the level distribution in total of green and voilet
        print("\n")
        print(f"The Rest amount of admin is:{sum_predication}")
        print("\n")
   
    elif(sum_predication>mul_red):  # if the amount is not bigger then double of voilet
        print("distribution in red ")
        user_distribution=(red*100)/100 # distribution in user 
        print("Distributed in users :",user_distribution)
        sum_predication-user_distribution # subtract the user distribution in total of green and voilet

        distributed_levels=(red*30)/100 # disbtribution in levels
        print(f"Fund Collect for levels :{distributed_levels}" )
        eachuser_distribution=(distributed_levels*red)/100 # distribute in each red user levels
        print(f"Fund Distribute in all red user level : {eachuser_distribution}")
        sum_predication- distributed_levels # subtract the level distribution in total of green and voilet
        print("\n")
        print(f"The Rest amount of admin is:{sum_predication}")
        print("\n")
    elif(sum_predication>mul_green): # if the amount is not bigger then double of  red and green
        print("distribution in green ")
        user_distribution=(green*100)/100 # distribution in user 
        print("Distributed in users :",user_distribution)
        sum_predication-user_distribution # subtract the user distribution in total of green and voilet

        distributed_levels=(green*30)/100 # disbtribution in levels
        print(f"Fund Collect for levels :{distributed_levels}" )
        eachuser_distribution=(distributed_levels*green)/100 # distribute in each red user levels
        print(f"Fund Distribute in all green user level : {eachuser_distribution}")
        sum_predication- distributed_levels # subtract the level distribution in total of green and voilet
        print("\n")
        print(f"The Rest amount of admin is:{sum_predication}")
        print("\n")
    else: # if the amount is not bigger then double of red and green and voilet
        print("All amount goes to admin")


else:
    print("all Amount goes to admin")


