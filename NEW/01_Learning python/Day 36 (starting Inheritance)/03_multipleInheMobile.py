class Display:
    def __init__(self,height,weight):
        self.height=height
        self.weight=weight
    def showDis(self):
        print(f"The Mobile has the {self.height} height and {self.weight} weight")
class Processor:
    def __init__(self,speed,prosName):
        self.speed=speed
        self.prosName=prosName
    def showpros(self):
        print(f"The processor has {self.speed} speed and the name is {self.prosName}")
class Battery:
    def __init__(self,capicity):
        self.capicity=capicity
    def showBattery(self):
        print("The Battery has",self.capicity,"Capicity")
class Mobile(Display,Processor,Battery):
    def __init__(self,h,w,s,p,c,m,price):
        Display.__init__(self,h,w)
        Processor.__init__(self,s,p)
        Battery.__init__(self,c)
        self.m=m
        self.price=price
    def show(self):
        print(f"The Model is {self.m}")
        print(f"The Price is {self.price}")
        print()
        self.showDis()
        print()
        self.showpros()
        print()
        self.showBattery()
m1=Mobile(h=10,w=20,p="SnapDragon",m="Redmi",c="8000mAh",s="30000",price=8000)
m1.show()
        