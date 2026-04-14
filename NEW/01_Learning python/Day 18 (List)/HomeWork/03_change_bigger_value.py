#  3. in list those value are bigger than 10 instead of this add greater str in list 
Index=0
num=[2,43,2,5,4,4453,665,18]
for i in num:
    if num[Index]>10:
        num[Index] = "Greater"
    Index+=1
print(num)