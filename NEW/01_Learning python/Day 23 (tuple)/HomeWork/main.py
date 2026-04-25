 #  show the all index to multiple numbers like 3 ans is 2,3

def indexcheck(n):
    check=4
    l=[]
    count=0
    for i in t :
        if i==check:
            l.append(count)

        count+=1
    l= tuple(l)
    return l
        
t=(1,2,3,4,5,4,32,4,45,4,32,23,42,4)

print(indexcheck(t))
    
