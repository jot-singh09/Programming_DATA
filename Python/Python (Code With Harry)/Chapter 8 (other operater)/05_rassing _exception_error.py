a= int(input("Enter The Number"))
b= int(input("Enter The  Secound Number"))
if(b==0):
    raise ZeroDivisionError("Zerro Not Valid") # raise is use to make your own error
# elif a==0:
#     raise ZeroDivisionError("Zerro Not Valid")
else:
    print(f"This Division is {a/b}")
