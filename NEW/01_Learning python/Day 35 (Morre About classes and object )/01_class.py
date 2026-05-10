class Tweleve:
    Class="+2"
    def __init__ (self,name,roll_no,age):
        self.name=name
        self.roll=roll_no
        self.age=age
    def show(self):
        print(f"The Student name is {self.name}")
        print(f"The Student Roll Number  is {self.roll}")
        print(f"The Student Age is {self.age}")
        print(f"The Student Class is {self.Class}")
Tweleve.Class="+3" 
s1=Tweleve("Jaspreet",5,17)
s1.show()   
print()
s2=Tweleve("Preetinder",7,16)
s2.show()
