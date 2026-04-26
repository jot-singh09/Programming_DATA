# s={}
# i= True
# while i:
#     num=eval(input("Enter the Value :"))
#     if num=="q":
#         break
#     s1={num}
#     s.update(s1)
# print(s)


    
def sum(s):
    sum=0
    for k in s :
        k=int(k)
        sum+=k
    return sum
l= set()
i=True
while i :
    num=input("Enter a Value :")
    if num=="Q" or num=="q":
        break
    l.add(num)
val=0
for j in l:
    print(f"{j},",end="")
    # j= int(j)
    # val+=j
print()
# print(val)
print(sum(l))

