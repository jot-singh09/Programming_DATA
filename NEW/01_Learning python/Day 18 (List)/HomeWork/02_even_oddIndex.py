#  2. if even index so multiply 2 that value if odd index so add 2 

num=[1, 2, 5, 7, 9 , 34 ,5]
#    0, 1, 2, 3, 4,   5, 6
Index=0
for i in num:
    if Index%2==0:
        value=num[Index]*2
        print(value)
    elif Index%2!=0:
        value=num[Index]+2
        print(value)
    Index+=1