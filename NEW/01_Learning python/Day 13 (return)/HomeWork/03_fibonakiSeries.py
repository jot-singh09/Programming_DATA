def series(num):
    a=0
    b=1
    if num==1:
        print(f"{a}",end="")
    elif num==2:
        print(f"{a} , {b} ,",end="")
    else:
        print(f"{a} , {b} ,",end="")
    for i in range(3,num+1):
        c=a+b
        print(f" {c} ,",end="")
        a=b
        b=c
    print()

num=int(input("Enter the Number :"))

series(num)