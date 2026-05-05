'''
press 1 to create dict
2 for update value
q for exit
'''
d= dict()
pair=int(input("Enter Your Pair Value :"))
for i in range(1,pair+1):
    key=input("Enter the Key :")
    value=input("Enter the Value of Key :")
    d[key]=value
new_dict=dict()
count=1
while True:
    if count==1:
        print("Enter Q for exit")
        print("1. To Create New dict")
        print("2. To Update dict")
        print("3. To Remove ")
        select=input("Choose The Value :").lower()
        if select =="q":
            break
        select=int(select)
        if select==1:
            key=input("Enter the Key :")
            value=input("Enter the Value of Key :")
            new_dict[key]=value
            count+=1
            # updating in  dict
        elif select==2:
            print(f"1. Change in {d}")
            print(f"2. Change in {new_dict}")
            select=int(input("Choose the Option :"))
            # updating the d dict
            if select==1:
                print(f"Select the Key {d.keys()}",end="")
                key=input(" :")
                # checking the key is avaiable in dict d 
                if key in d:
                    value=input("Enter the Value :")
                    d[key]=value
                    # if not present
                elif key not in d:
                    print("Key not Found")
                    val=input("Y to add new key , Q to Exit ").lower()
                    if val=="q":
                        break
                    # if user want to ad the new value
                    elif val=="y":
                        key=input("Enter the Key ")
                        value=input("Enter the Value :")
                        d[key]=value
            # if user select new_dict 
            elif select==2:
                print(f"Select the Key {new_dict.keys()}",end="")
                key=input(" :")
                if key in new_dict:

                    new_dict[key]=value

                    value=input("Enter the Value :")
                    # is key not present 
                elif key not in new_dict:

                    print("Key not Found")
                    val=input("Y to add new key , Q to Exit ").lower()
                    if val=="q":
                        break
                    elif val=="y":
                        
                        value=input("Enter the Value :")
                        new_dict[key]=value
        elif select==3:
            print(f"1. select the key to remove {d.keys()}")
            print(f"2. select the key to remove {new_dict.keys()}")
            choose=int(input(""))
            if choose==1:
                key=input("select the key :")
                d.pop(key)
            elif choose==2:
                key=input("select the key :")
                new_dict.pop(key)


# is new list is created
    elif count>1:
        print("Enter Q for exit")
        print("1. To add  New val dict")
        print("2. To Update dict")
        print("3. To Remove Dict")
        select=input("Choose The Value :").lower()
        if select =="q":
            break
        select=int(select)
        if select==1:
            key=input("Enter the Key :")
            value=input("Enter the Value of Key :")
            new_dict[key]=value
            count+=1
        elif select==2:
            print(f"1. Change in {d}")
            print(f"2. Change in {new_dict}")
            select=int(input("Choose the Option :"))
            if select==1:
                print(f"Select the Key {d.keys()}",end="")
                key=input(" :")
                if key in d:
                    value=input("Enter the Value :")
                    d[key]=value
                elif key not in d:
                    print("Key not Found")
                    val=input("Y to add new key , Q to Exit ").lower()
                    if val=="q":
                        break
                    elif val=="y":
                        key=input("Enter the Key ")
                        value=input("Enter the Value :")
                        d[key]=value
            
            elif select==2:
                print(f"Select the Key {new_dict.keys()}",end="")
                key=input(" :")
                if key in new_dict:

                    new_dict[key]=value

                    value=input("Enter the Value :")
                elif key not in new_dict:

                    print("Key not Found")
                    val=input("Y to add new key , Q to Exit ").lower()
                    if val=="q":
                        break
                    elif val=="y":
                        
                        value=input("Enter the Value :")
                        new_dict[key]=value
        elif select==3:
            print(f"1. select the key to remove {d.keys()}")
            print(f"2. select the key to remove {new_dict.keys()}")
            choose=int(input(""))
            if choose==1:
                key=input("select the key :")
                d.pop(key)
            elif choose==2:
                key=input("select the key :")
                new_dict.pop(key)


print(d)
print(new_dict)
            

        

        

'''
press 1 to create dict
2 for update value
q for exit
'''
'''

d= dict()
pair=int(input("Enter Your Pair Value :"))
for i in range(1,pair+1):
    key=input("Enter the Key :")
    value=input("Enter the Value of Key :")
    d[key]=value
new_dict=dict()

while True:
    print("Enter Q for exit")
    print("1. To Create New dict")
    print("2. To Update dict")
    select=input("Choose The Value :").lower()
    if select =="q":
        break
    select=int(select)
    if select==1:
        key=input("Enter the Key :")
        value=input("Enter the Value of Key :")
        new_dict[key]=value
    elif select==2:
        print(f"1. Change in {d}")
        print(f"2. Change in {new_dict}")
        select=int(input("Choose the Option :"))
        if select==1:
            print(f"Select the Key {d.keys()}",end="")
            key=input(" :")
            if key in d:
                value=input("Enter the Value :")
                d[key]=value
            elif key not in d:
                print("Key not Found")
                val=input("Y to add new key , Q to Exit ").lower()
                if val=="q":
                    break
                elif val=="y":
                    key=input("Enter the Key ")
                    value=input("Enter the Value :")
                    d[key]=value
        elif select==2:
            print(f"Select the Key {new_dict.keys()}",end="")
            key=input(" :")
            if key in new_dict:

                new_dict[key]=value

                value=input("Enter the Value :")
            elif key not in new_dict:

                print("Key not Found")
                val=input("Y to add new key , Q to Exit ").lower()
                if val=="q":
                    break
                elif val=="y":
                    key=input("Enter the Key ")
                    value=input("Enter the Value :")
                    new_dict[key]=value
print(f"1. for Print First Dict")
print(f"2. for Print Second Dict")
pri=int(input(" :"))
if pri==1:
    print(d)
elif pri ==2 :
    print(new_dict)
'''
