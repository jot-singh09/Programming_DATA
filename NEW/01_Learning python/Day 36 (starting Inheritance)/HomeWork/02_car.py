class Engine:
    def __init__(self, engine,HosePower):
        self.engine = engine
        self.HosePower = HosePower
    def showEngine(self):
        print(f"The Engine has {self.engine} engine and {self.HosePower} HosePower")
class Wheel:
    def __init__(self, size, type):
        self.size = size
        self.type = type
    def showWheel(self):
        print(f"The Wheel has {self.size} size and {self.type} type")
class Car(Engine,Wheel):
    def __init__(self, engine, HosePower, size, type, model, price):
        Engine.__init__(self, engine, HosePower)
        Wheel.__init__(self, size, type)
        self.model = model
        self.price = price
    def show(self):
        print(f"The Model is {self.model}")
        print(f"The Price is {self.price}")
        print()
        self.showEngine()
        print()
        self.showWheel()
c1 = Car(engine="V8", HosePower="150HP", size="26 inches", type="Alloy", model="G Wagon", price=25000)
c1.show()
        