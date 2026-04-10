# def prime(j,num):
#     for i in range(j,num+1):
#         isprime=True
#         for j in range(2,i):
#             if i%j==0:
#                 isprime=False
#                 break    
#         if isprime==True:
#             sum=i
#             return sum
        
# num=int(input("Enter the Number :"))

# num=num+1
# for i in range(1,num+1):
#     j=2+1
#     ans=prime(j,num)
#     print(ans)




def prime(num):
    for i in range(2,num+1):
        isprime=True
        for j in range(2,i):
            if i%j==0:
                isprime=False
                break    
        if isprime==True:
            sum=i
            return sum
        
num=int(input("Enter the Number :"))
ans=prime(num)

print(ans)


