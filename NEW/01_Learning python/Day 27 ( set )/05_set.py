myset = set(range(1,11))
userset= set()
print("Enter Q To EXIT !")
while True:
    user=(input("Enter the Value :")).lower()
    if user=="q":
        break
    
    userset.add(int(user))
print(myset.difference(userset))

