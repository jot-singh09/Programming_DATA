class  Pull:

    def crosing(self):
        print(f"I am Pull")
class Bike(Pull):
    def crosing(self):
        print("I am Bike i also run on Pull")
class scooty(Pull):
    def crosing(self):
        print("I am Scoty I also Run on Pull")
class car(Pull):
    def crosing(self):
        print("i am Car i also run on pull")
p1=Pull()
p1.crosing()
b1=Bike()
b1.crosing()
s1=scooty()
s1.crosing()
c1=car()
c1.crosing()
    