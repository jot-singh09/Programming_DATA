def traingle(n):
    for i in range(1,n+1):
        for j in range(n-1,i-1,-1):
            print(" ",end="")
        for k in range (1,i+1):
            print("*",end=" ")
        print()


def leftshift(n):
    for i in range(1,n+1):
        for j in range(n-1,i-1,-1):
            print("-",end=" ")
        for k in range (1,i+1):
            print("*",end=" ")
        print()



def rightshift(n):
    for i in range(1,n+1):
        
        for j in range (1,i+1):
            print("*",end=" ")
        print()

def square(n):
    for i in range(1,n+1):
        for j in range(1,n-1):
            print("* ",end=" ")
        print("",end="")
        for k in range(1,n-1):
            print("* ",end=" ")


        print()

