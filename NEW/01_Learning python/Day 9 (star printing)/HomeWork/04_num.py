'''
---1
--23
-456
7891

'''

''' 
---*
--**
-***
****
'''
num=4
i=1
out=1
while i<=num:
    j=num-1
    while j>=i:
        print("-",end="")
        j-=1
    k=1
    while k<=i:
        print(out,end="")
        out+=1
        if out==10:
            out=1
        k+=1
    
    
    i+=1
    print()
    
