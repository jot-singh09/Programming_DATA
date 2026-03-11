def loginwallet():
    loopwallet=1
    comparewallet=0
    while loopwallet>comparewallet:
        wallet_adress=input("Enter Your Wallet Adress")
        with open( f' {wallet_adress}_adress.txt','r') as checkadres:
            checkadress=checkadres.read()
            if checkadress==wallet_adress:
                loopwallet=0
                looppass=1
                while looppass>comparewallet:
                  passward=input("Enter Your Passward :")
                  with open( f' {wallet_adress}_pass.txt','r') as checkpass:
                   checkpass=checkpass.read()
                   if passward==checkpass:
                      looppass=0
                      print("Login Sucessfully!")
                   else:
                      print("\n")
                      looppass=1
                      print("Passward Does not Matched")

            else:
                loopwallet=1
                print("\n")
                print("Adress not found!")
                print("Try Again!")

loginwallet()