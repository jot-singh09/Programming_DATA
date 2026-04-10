def series(num):
    a=0
    b=1
    sum=0
    if num==1:
        print(a,end=" ")
    elif num==2:
        print(a ,b,end=" ")
        
    else:
        print(a ,b,end=" ")
    for i in range(3,num+1):
        sum=a+b
        print(sum,end=" ")
        a=b
        b=sum
    print()
number=int(input("Enter the Number :"))
series(number)