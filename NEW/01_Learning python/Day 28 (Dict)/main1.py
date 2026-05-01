d = dict()
while True:
    print("Enter Q on Key to Exit!")
    key=input("Enter the Key :")
    if key=="Q" or key=="q":
        break
    value=input("Enter the Value of Key :")
    d[key]= value
    
check = "name" in d
print(check)
print(d)