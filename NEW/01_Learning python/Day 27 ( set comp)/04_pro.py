sen= "My Friend Name is Gurshan. He is in +2 Arts"
def uni(n):
    count=0
    for i in n:
        count+=1
    return count
unique = set((sen.split()))
print(unique)
print(uni(unique))

