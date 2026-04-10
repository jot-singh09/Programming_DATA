def bigger_num(num1,num2,num3):
    if num1>num2 and num1>num3:
        return num1
    elif num2>num3:
        return num2
    elif num3:
        return num3
    else:
        return "Invaild Value"

a=eval(input("Enter the Number :"))
b=eval(input("Enter the Number :"))
c=eval(input("Enter the Number :"))
check = bigger_num(a,b,c)
if check==int:
    print("The Bigger Number is :",check)
else:
    print(check)