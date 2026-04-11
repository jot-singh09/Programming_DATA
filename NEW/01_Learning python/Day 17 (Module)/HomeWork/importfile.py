from star import square , leftshift,rightshift,traingle

print("1. Traingle")
print("2. Square")
print("3. LeftShift")
print("4. RightShift")
select=int(input("Choose the Number :"))
num=int(input("Enter the Size :"))

# if select==1:
#     traingle(num)
# elif select==2:
#     square(num)
# elif select==3:
#     leftshift(num)
# elif select==4:
#     rightshift(num)
# else:
#     print("Invaild Error! , Occurs")

match select:
    case 1:
        traingle(num)
    case 2:
        square(num)
    case 3:
        leftshift(num)
    case 4:
        rightshift(num)
    case _:
        print("Invaild Error, Occurs")



