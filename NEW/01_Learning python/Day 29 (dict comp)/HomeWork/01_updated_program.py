def start_l(n):
    start_dict= dict()
    for i in range(1,n+1):
        key=input("Enter the Key :")
        val=input("Enter the Value of Key :")
        start_dict[key]=val

    return start_dict

def options(n="Make New Dict "):
    print(f"Enter Q for Exit : ")
    print(f"1. {n} : ")
    print(f"2. Update in Value : ")
    print(f"3. Remove the key : ",end="")
    option=input(" ")
    return option

def option1():
    howval=int(input("How many Value Want to Add :"))
    new_dict=dict()
    for i in range(1,howval+1):
        key=input("Enter the Key :")
        val=input("Enter the Value of Key :")
        new_dict[key]=val
        print("Dict Created Successfully")
        print()
        
    return new_dict

def option2(dic1,dic2):
    print(f"1. Want to Update {dic1}")
    print(f"2. Want to Update {dic2}",end="")
    option=int(input("Choose option :"))
    if option==1:
        print(f"Select the Key :{dic1.keys()} ",end="")
        key=input(" :")
        if key in dic1:
            print(f"Enter the Value for  '{key}' :",end="")
            value=input("")
            dic1[key]=value
            print("Value Added Successfully")
            print()
        elif key not in dic1:
            print("Key not Found!")
            add=input("Enter Y to Add key :").lower()
            if add=="y":
                key=input("Enter the Key :")
                value=input("Enter the Value of Key:")
                dic1[key]=value
                print("Key Added Successfully")
                print()
            else:
                print("Thanks!")
        # return dic1


    elif option==2:
         print(f"Select the Key :{dic2.keys()} ",end="")
         key=input(" :")
         if key in dic2:
            print(f"Enter the Value for  '{key}' :",end="")
            value=input("")
            dic2[key]=value
            print("Value Added Successfully")
            print()
         elif key not in dic2:
            print("Key not Found!")
            add=input("Enter Y to Add key :").lower()
            if add=="y":
                key=input("Enter the Key :")
                value=input("Enter the Value of Key:")
                dic2[key]=value
                print("Key Added Successfully")
                print()
            else:
                print("Thanks!")
        #  return dic2
    

def option3 (dic1,dic2):
    print(f"1. To remove in {dic1}")
    print(f"2. To remove in {dic2} :",end="")
    option=int(input(""))
    if option==1:
        print(f"Select the Key {dic1} :",end="")
        key=input("")
        dic1.pop(key)
    elif option==2:
        print(f"Select the Key {dic2} :",end="")
        key=input("")
        dic2.pop(key)
    

def final():
    dict2 = {

    }
    count=1
    val=int(input("Enter how many value is added in Dict"))
    dict1 = start_l(val)
    while True:
        if count==1:
            user_choose = options()
            if user_choose=="q":
                break
            user_choose=int(user_choose)
            if user_choose==1:
                dict2 = option1()
            elif user_choose==2:
                option2(dict1,dict2)
            elif user_choose==3:
                option3(dict1,dict2)
            count+=1

        elif count>1:
            
            n="ADD val in New dict"
            user_choose = options(n)
            if user_choose=="q":
                break
            user_choose=int(user_choose)
            if user_choose==1:
                dict2 = option1()
            elif user_choose==2:
                option2(dict1,dict2)
            elif user_choose==3:
                option3(dict1,dict2)
        
    print(dict1)
    print(dict2)
final()

        