t=(1,2,3,7,9,5,90)
t= list(t)
t=[i**2 for i in t]
t=[i for i in t if i<25]

print(t)
t= tuple(t)
print(t)

