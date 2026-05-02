def make_l(n):
    list=[]
    for i in range (1,n+1):
        val=input(f"Enter the value {i} :" )
        list.append(val)
    return list
l1=int(input("Enter how many value enter in list 1 :"))
list1=make_l(l1)
l2=int(input("Enter how many value enter in list 2 :"))
list2=make_l(l2)
print(f"This is List 1 :{list1}")
print(f"This is List 2 :{list2}")

list1=set(list1)
list2=set(list2)
checksame= list1.intersection(list2)
checksame=list(checksame)
print(f"The Common value is : {checksame}")
