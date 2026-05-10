class Bikes:
    name=""
    model=0
    Type=""
    def show(self):
            print(f"Bike name is {self.name} with {self.model} model and {self.Type} Type!")
    def __init__(self,n,m,t):
        self.name=n
        self.model=m
        self.Type=t
        self.show()
        
bike=Bikes(n="Bullet",m=2002,t="Standard")
        