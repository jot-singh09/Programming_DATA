
class Vehicle:
    def start(self):
        print("Vehical Starting")


class Car(Vehicle):
    def drive(self):
        print("I am G wagon car")


class Bike(Vehicle):
    def ride(self):
        print("I am Bullet")


class Bus(Vehicle):
    def bus(self):
        print("Bus transports passengers")
        
c1= Car()
c1.start()
c1.drive()
print()
b1 = Bike()
b1.start()
b1.ride()
print()
bus1 = Bus()   
bus1.start()
bus1.bus()
        
