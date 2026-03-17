#  Implement a simple currency converter (USD to EUR, GBP, etc.)

print("Select Your Currency :")
print("1. USD")
print("2. EUR")
print("3. GBP")
Input=int(input(""))
if Input<=3 and Input>0:
    print("Select Convertion Currency :")
    if Input==1:
        print("1. EUR")
        print("2. GBP")
        Input=int(input())
    elif Input==2:
        print("1. USD")
        print("2. GBP")
    elif Input==3:
        print("1. USD")
        print("2. EUR")


    


