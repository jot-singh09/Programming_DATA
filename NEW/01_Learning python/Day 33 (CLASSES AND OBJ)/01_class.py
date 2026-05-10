class Person:
    name=""
    gender = ""
    age=0
    def greet(self,hobby):
        print(f"Sat sri Akal {self.name} ji!")
        print(f"Tusi {self.age} saal de o")
        print(self.gender)
        print(hobby)
per=Person()
per.name="Karan"
per.gender="Male"
per.age=16

per.greet("learning")