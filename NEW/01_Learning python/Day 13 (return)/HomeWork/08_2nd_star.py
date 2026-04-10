'''
* *  * *
* *  * *
* *  * *
* *  * *

'''
def star(num):
    
    for i in range(1,num+1):
        for j in range (2):
            print("*",end=" ")
        print(" ",end="")
        for k in range(2):
            print("*",end=" ")
        print()

num=int(input("Enter the Number :"))
star(num)