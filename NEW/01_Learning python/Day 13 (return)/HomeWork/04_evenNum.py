def even_num(num):
    for j in range(1,num+1):
        if i%2==0:
            return True
        else:
            return False
        
num=int(input("Enter the Number :"))
for i in range(1,num+1):
    ans = even_num(i)
    if ans ==True :
        print(i)