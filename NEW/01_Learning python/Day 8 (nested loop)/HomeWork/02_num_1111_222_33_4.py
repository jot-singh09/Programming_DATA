num=int(input("Enter a Value :"))
out=1
for i in range(num,0,-1):
    for j in range(1,i+1):
        print(out,end=" ")
    out+=1
    print()