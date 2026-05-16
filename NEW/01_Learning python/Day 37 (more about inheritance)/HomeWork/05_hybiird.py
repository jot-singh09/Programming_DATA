class Device:
    def __init__(self):
        print("I am Device")
    
class Phone(Device):
    def __init__(self):
        super().__init__()
        print("I am Phone")
class laptop(Device):
    def __init__(self):
        super().__init__()
        print("I am laptop")
class procesor(laptop,Phone):
    def __init__(self):
        super().__init__()
        print("I am processor")
p1 = procesor()