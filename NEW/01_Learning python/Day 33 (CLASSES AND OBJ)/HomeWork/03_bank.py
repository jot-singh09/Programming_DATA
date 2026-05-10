class Bank:
    acc_holder="Karan"
    balance=100
    def deposit(self,amo=50):
        self.balance+=amo
        print(f"Your New Balance is : {self.balance}")
    def withdraw(self,amo=100):
        if amo<=self.balance:
            self.balance-=amo
            print(f"Your New Balance is : {self.balance}")
        else:
            print("Insufficent Balance")
    def show_bal(self):
        print(f"Your Balance is {self.balance}")
    def final(self):
        print(f"Hey! {self.acc_holder} Welcome To Python Bank ")
        while True:
            print()
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Show Balance")
            print("Q for Exit")
            val=input("").lower()
            if val=="q":
                print("Thank! Visit Again ")
                break
            val=int(val)
            if val==1:
                amo=eval(input("Enter the Amount to Deposit! :"))
                self.deposit(amo)
            elif val==2:
                amo=eval(input("Enter the Amount to Withdrall! :"))
                self.withdraw(amo)
            elif val==3:
                self.show_bal()
obj=Bank()
obj.acc_holder="Jaspreet"
obj.final()
        

