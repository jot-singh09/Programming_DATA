class pythonBank:
    def __init__(self,account,balance,pin,name):
        self.__account=account
        self.__balance=balance
        self.__pin=pin
        self.name=name
   
    def __showPin(self):
        print("Your pin is",self.__pin)
    def __showbalance(self):
        print("Your balance is",self.__balance)
        
    def getbalance(self):
        pin=int(input("Enter your pin"))
        if pin==self.__pin:
            self.__showbalance()
        else:
            print("Incorrect pin")
    
    def getdeposit(self):
        pin=int(input("Enter your pin"))
        if pin==self.__pin:
            amount=int(input("Enter the amount you want to deposit"))
            self.__balance+=amount
        else:
            print("Incorrect pin")
    
    def getwithdraw(self):
        pin=int(input("Enter your pin"))
        if pin==self.__pin:
            amount=int(input("Enter the amount you want to withdraw"))
            if self.__balance >= amount:
                self.__balance -= amount
                print("Your balance is",self.__balance)
            else:
                print("Insufficient balance")
        else:
            print("Incorrect pin")
karan=pythonBank(123456789,1000,1234,"Karan")
karan.getbalance()  
# karan.getdeposit()
karan.getwithdraw()
karan.getbalance()  
        