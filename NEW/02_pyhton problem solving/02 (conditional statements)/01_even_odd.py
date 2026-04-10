num=eval(input("Enter the Number :"))
if num%2==0 and num>=0:
    
    print("You Enter an Even Number : ",num)
elif num<0:
    print("The number is less than zero ")
    print("Please enter the bigger number")
elif num%2!=0:
    print("You Enter an Odd Number : ",num)

else:
    print("Invaild Number Entered!")
