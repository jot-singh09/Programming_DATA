l1=[1,2,3,4,5,6]
t1=(1,2,3,4,5,6)
# s1={"a",1,2,3,4,5,6} if not same data so we got error
s1={1,2,3,4,5,6}
d={"a" :"hello","b":"world"}
print(l1)
print(t1)   
print(s1)
print(d)
print("Len Results")
print(len(l1))
print(len(s1))
print(len(t1))
print(len(d))
print("Max Results")
print(max(l1))
print(max(t1))
print(max(s1))
print(max(d))
print("Min Results")
print(min(l1))
print(min(t1))
print(min(s1))
print(min(d))

del t1,s1,l1,d
print(l1)