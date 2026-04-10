num=eval(input("Enter the value"))
for i in range(1,num+1):
    for j in range(num,i-1,-1):
        print("*",end=" ")
    print()