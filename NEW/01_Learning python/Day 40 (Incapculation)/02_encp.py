class pythonBank:
    def __init__(self,amount,pin):
        self.__balance=amount
        self.__pin=pin
        self.__options()
    def __options(self):
        print("1. Deposit")    
        print("2. Withdrall")    
        print("3. get balance")    
        num=int(input("Enter the Option:"))
        if num==1:
            self.__deposit()
            self.__showbal()
        elif num==2:
            self.__withdrall()
            self.__showbal()
        elif num==3:
            pin=int(input("Enter the pin:"))
            if pin==self.__pin:
                self.__showbal()
            else:
                print("Incorrect Pin")
        
    def __deposit(self):
        pin=int(input("Enter Your Pin :"))
        if pin==self.__pin:
            amo=int(input("Enter the amount :"))
            self.__balance+=amo
    
    def __withdrall(self):
        pin=int(input("Enter Your Pin :"))
        if pin==self.__pin:
            amo=int(input("Enter the amount :"))
            self.__balance-=amo
    
    def __showbal(self):
        print(f"balance : {self.__balance}")
            
    
            
raman=pythonBank(1000,1234)                
    
        