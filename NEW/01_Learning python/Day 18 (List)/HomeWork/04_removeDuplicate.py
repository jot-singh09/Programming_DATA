#  Remove duplicates from a list.

num=[1,3,4,6,6,7,34,1]
i=0
count=0
while i<len(num):
    Num=num[i]
    for j in num:
        if Num==j:
            count+=1
            if count>=2:
                for k in range(count):
                    num[i]="Dup"
    i+=1
   
print(num)