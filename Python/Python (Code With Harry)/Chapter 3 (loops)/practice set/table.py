num=int(input("Enter a number want to print table :"))
table=num*11
i=0
j=1
for i in range (num,table,num):
    print(num,"X",j,"=",i)
    i+=1
    j+=1