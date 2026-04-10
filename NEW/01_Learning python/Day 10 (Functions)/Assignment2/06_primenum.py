'''
Print all prime numbers between 1 to 50
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
devide itself and on 1 

'''
# num1=int(input("Enter the numer :"))
# num=0
# if num1==1:
#         print("Prime Numbre start form 2!")
# else:
#     for i in range (2,num1+1):
        
#         num=i # in this the 1 is adding in i value
#         if num1==2: # in this we check that can user enter 2
#             print("2",end="")

#         elif num==3: # if user enter upper than 2 so the if user enter 3 so this running
#             print("2,3,",end="")

#         elif (i%2!=0 and i%3!=0): # in this if user enter upper thatn 3 so first the 3 condition match then this will run in next loop
#                 print(f"{i},",end="")
    
#     print()

num=int(input("Enter the Number :"))
for i in range(2,num+1):
    isprime=True
    for j in range(2,i):
        if i%j==0:
            isprime=False
            break    
    if isprime==True:
        print(i)
        
    
    