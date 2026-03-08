# Write a program to check if a number is even or odd using modulo operator

number=int(input("Enter the Number :"))

if number%2==0:
    print(f"The Number is Even {number}")
elif number%2 !=0:
    print(f"The Number is Odd {number}")
else:print("Number Error! \n please try again!")