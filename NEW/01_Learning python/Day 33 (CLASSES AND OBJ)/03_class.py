class Car:
    name=""
    colour=""
    avg=0
    company=""
    def start(self):
        print(f"{self.name} with {self.colour} colour is starting ")
        print(f"And the {self.name } has Giving {self.avg} Average")
        print(f"The Company of {self.name} is {self.company}")
car=Car()
car.name="Scarpio"        
car.colour="Black"        
car.avg=12        
car.company="Mahindra"        

car.start()