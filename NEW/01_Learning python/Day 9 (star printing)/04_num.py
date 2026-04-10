'''
---1
--23
-456
7891

'''
out=1
for i in range(1,5):
    for j in range (3,i-1,-1):
        print(" ",end="")

    for k in range(1,i+1):
        print(out,end="")
        out+=1
        if out==10:
            out=1
        
        
    print()