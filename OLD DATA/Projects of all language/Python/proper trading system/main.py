# create or login with new wallet 
from datetime import datetime
def createwallet_login():
    print("1. Create New Wallet")
    print("2. Login Existing Wallet")
    print("3. Deposit balance")
    select_wal=int(input())
    if select_wal==1:  # Create Wallet Code
        print("Welcome to PowerPlay!")
        print("\n")
        checkapp=0
        appemt=1
        while appemt>checkapp:
            print("Let's Create Your Wallet : ")
            create_pass=input("Create Your New passward :")
            checkLen=len(create_pass)
            if checkLen>=8:
                appemt=0
                checkpass=1
                while checkpass>appemt:
                    ckeck_pass=input("Conform Your Passward :")
                    if ckeck_pass==create_pass:
                        checkpass=0
                        print("Wallet Created Sucessfully!")
                        with open(' walletcreation.txt','r') as create:
                            walletno= create.read()
                            print(f"Your Wallet Number is '{walletno}' Use it for login  ")
                            print("In case You Forget it so it can;t recoverable")
                            intconvert=int(walletno)
                            intconvert=intconvert+1
                            newadress=str(intconvert)
                        with open(f' {walletno}_adress.txt','w') as saveadress:
                            saveadress.write(walletno)
                        with open(f' {walletno}_deposit.txt','w') as depositbalance:
                            balace="0"
                            depositbalance.write(balace)
                        with open(f' {walletno}_pass.txt','w') as savepass:
                            savepass.write(ckeck_pass)

                        
                        with open(' walletcreation.txt','w') as updateadress:
                            updateadress.write(newadress)
                        print("\n")
                        print("Let's Login ur Wallet!")
                        loginwallet()

                    else:
                        print("\n")
                        print("Passward Doesn't Matched")
                        checkpass=1
            else:
                print("\n")
                print("Passward Must be 8 Characters :")
                appemt=1

    elif select_wal==2:  # Login part code 
        loginwallet()
    elif select_wal==3:
        deposit_balance()
        


def loginwallet():
    loopwallet=1
    comparewallet=0
    while loopwallet>comparewallet:
        wallet_adress=input("Enter Your Wallet Adress :")
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
                      with open( f' {wallet_adress}_1package.txt','w') as package:
                            pack="0"
                            package.write(pack)
                   else:
                      print("\n")
                      looppass=1
                      print("Passward Does not Matched")

            else:
                loopwallet=1
                print("\n")
                print("Adress not found!")
                print("Try Again!")



def deposit_balance():
    loop=0
    loop1=1
    while loop1>loop:
        walletno=input("Conform ur wallet adress :")
        with open( f' {walletno}_adress.txt','r') as wallet_con:
            checkwallet=wallet_con.read()

            if walletno==checkwallet:
                loop1=0
                amount=int(input("Enter the amount to deposit :"))
                amountstr= str(amount)
                with open( f' {walletno}_deposit.txt','w') as deposit_balace:
                    deposit_balace.write(amountstr)

            else:
                print("\n")
                print("Wallet adress not found!")
                loop1=1

def registeration():
    walletno=input("Enter ur wallet adress :")
    with open( f' {walletno}_1package.txt','r') as check_reg:
        
        checkreg=check_reg.read()
    if checkreg=="1" :
        dashboard()
    elif checkreg=="0":


        print("\n")
        print("Let's Register ur ID")
    
        print("Y to conform")
        print("N to Exit")
        register=input().lower()
        loop=0
        loop1=1
        while loop1>loop:
            if register=="y":
                with open( f' {walletno}_deposit.txt','r') as deduct_registration:
                    checkbalance=deduct_registration.read()
                    convertint= int(checkbalance)
                    
                    if convertint>=2:
                        deductbalace= convertint-2

                        loop1=0
                        convertsrt= str(deductbalace)
                        with open( f' {walletno}_deposit.txt','w') as newbalace:
                            newbalace.write(convertsrt)
                        with open( f' {walletno}_package.txt','w') as package:
                            pack="$2 (Welcome)"
                            package.write(pack)
                        with open( f' {walletno}_1package.txt','w') as check_reg:
                            zerotoone="1"
                            check_reg.write(zerotoone)
                            print("Registration Sucessfull!")
                       
                    
                    elif convertint<=1:
                        print("Insufficient balance!")
                        loop1=0
            elif register=="n":
                print("Thanks")

def dashboard(): # Dashboard code
        walletno=input("Enter ur wallet adress :")
        print("\n")
        print("1.  Upgrade Package")
        print("2.  Check Package Expiry ")
        print("3.  Check Queue Number")
        dash_numer=int(input())
        if dash_numer==1:
            print("Select package For Upgrade or reactive")
                    
            with open( f' {walletno}_package.txt','r') as checkpackage:
                pack_number=checkpackage.read()
                if pack_number=="$2 (Welcome)":
                    print("1. Dia ($5)")
                    print("2. Tri ($10)")
                    print("3. Penta ($15)")
                    print("4. Power ($30)")
                    packageactive=int(input())
                    with open( f' {walletno}_deposit.txt','r') as checkbal:
                        walbalance=checkbal.read()
                        convertint= int(walbalance)
                    if packageactive==1:
                        if convertint>=5:
                            with open( f' {walletno}_package.txt','w') as pack_upd:
                                newpack=" Dia ($5)"
                                pack_upd.write(newpack)
                            print("Package Reactive Sucessfully")

                            with open( f' {walletno}_deposit.txt','w') as updatebal:
                                newbal= convertint-2
                                convertstr= str(newbal)
                                updatebal.write(convertstr)
                   
                    elif packageactive==2:
                        with open( f' {walletno}_package.txt','w') as pack_upd:
                            newpack=" Tri ($10)"
                            pack_upd.write(newpack)
                        
                        
                elif pack_number==" Dia ($5)":
                        print("1. Dia ($5)")
                        print("2. Tri ($10)")
                        print("3. Penta ($15)")
                        print("4. Power ($30)")
                        packageactive=int(input())
                elif pack_number==" Tri ($10)":
                        print("2. Tri ($10)")
                        print("3. Penta ($15)")
                        print("4. Power ($30)")
                        packageactive=int(input())
                elif pack_number==" Penta ($15)":
                        print("3. Penta ($15)")
                        print("4. Power ($30)")
                        packageactive=int(input())
                elif pack_number==" Power ($15)":
                        print("4. Power ($30)")
                        packageactive=int(input())
                             
                             
                             
                             
                             





    

registeration()




