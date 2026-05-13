class Cotton:
    def __init__(self,type):
        self.type=type
    def showcottotn(self):
        print(f"The Cotton is of {self.type} type")
class Thaga(Cotton):
    def __init__(self,forwhich,type):
        self.forwhich=forwhich
        Cotton.__init__(self,type)
    def showThaga(self):
        print(f"The Thaga is for made {self.forwhich}")
class T_shirt(Thaga):
    def __init__(self,price,type,forwhich):
        Thaga.__init__(self,forwhich,type)
        self.price=price
    def show(self):
        print(f"The price is {self.price}")
        self.showcottotn()
        self.showThaga()
p1=T_shirt(1520,"White ","t-shirt")
p1.show()
        
    
    