'''
---*
--**
-***
****
'''
for i in range (1,5):

    for j in range (3,i-1,-1):
        print("-",end="")
    for k in range(1,i+1):
        print("*",end="")
    print()