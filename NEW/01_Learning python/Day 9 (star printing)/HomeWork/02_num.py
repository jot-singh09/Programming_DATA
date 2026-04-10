'''
1 1 1 1 
2 2 2 
3 3 
4 

'''
num=4
i=1
out=1
while i<=4:
    j=num
    while j>=i:
     print(out,end=" ")   
     j-=1
    i+=1
    out+=1
    print()