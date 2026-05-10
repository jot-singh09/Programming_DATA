class Person:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def __str__(self):
        return f"This Obj is of {self.name}"
    def show(self):
        print("Self:",self)
        print(self.name)
        print(self.age)
    def birthday(self):
        self.age+=1
        print("Vidhya Veere ! ")
        
p1=Person("Karan",16)
print(p1)
p1.birthday()
p1.show()