
s=set()
while True:

    print("1. Add more Values")
    print("2. Remove the Values")
    print("3. Exit")

    inp=int(input("Select Choise :"))
    if inp ==1:
        val=input("Enter the Value :")
        s.add(val)
        print()
        
    elif inp==2:
        rmv=input("Enter the Value to Remove : ")
        if rmv in s:
            s.discard(rmv)
        elif rmv not in s:
            print("Value is not Present!")
            
                
    elif inp==3:
       break
    else:
        print("Invaild Error")



print(s)