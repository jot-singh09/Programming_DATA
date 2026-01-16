print("Enter Any 4 Number :")
num1=int(input("Enter Number 1 :"))
num2=int(input("Enter Number 2 :"))
num3=int(input("Enter Number 3 :"))
num4=int(input("Enter Number 4 :"))

if(num1>num2 and num1>num3 and num1>num4):
    print("The Number One ",num1,"is Bigger Number")
elif(num2>num3 and num3>num4):
    print("The Number Two ",num2,"is Bigger Number")
elif(num3>num4):print("The Number Three ",num3," is Bigger Number")
elif(num4>num3 and num4>num2 and num4>num1):print( " The Number Four", num4 ,"is Bigger Number")
elif(num1==num2 and num2==num3 and num3==num4):print("All Number are Equall")
else:print("Try Again!")

#num=1 num2=1 num=1 num3=1 num3=1 num4=1  this is logic

