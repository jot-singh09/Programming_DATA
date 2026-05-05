s = input("Enter the Value ").lower()
'''
a=3
e=1
i=2
o=1
u=0
'''
count=0
a=0
e=0
i=0
o=0
u=0
for j in s :
    if j=="a":
        count+=1
        a+=1
    elif j=="e":
        count+=1
        e+=1
    elif j=="i":
        count+=1
        i+=1
    elif j=="o":
        count+=1
        o+=1
    elif j=="u":
        count+=1
        u+=1
        
print(f"The a is : {a}")
print(f"The e is : {e}")
print(f"The i is : {i}")
print(f"The o is : {o}")
print(f"The u is : {u}")
print(f"The Total Vowel is : {count}")
