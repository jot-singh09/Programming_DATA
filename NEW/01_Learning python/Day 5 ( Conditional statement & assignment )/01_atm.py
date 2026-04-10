
pin=1234
user_pin=int(input("Enter Your Pin :"))
if user_pin==pin:
    print("1. Wallet Balance")
    print("2. Withdrall")
    print("3. Deposit")
    choose=int(input("Select (1-3)"))
    if choose==1:
        print("Your Wallet Balance is 5000")
    elif choose==2:
        amo=eval(input("Enter the Withdrall Amount"))
        if amo<=5000:
            print(f"Your New Balance is {5000-amo} ")
            print("Withdrall Sucessfully!")
        else:
            print("Insufficent Balance")
    elif choose==3:
        amo=eval(input("Enter the Deposit amount :"))
        print(f"Your new Balance is {5000+amo} ")
        print("Deposit sucessfully")
else:
    print("Wrong Pin Enterd!")