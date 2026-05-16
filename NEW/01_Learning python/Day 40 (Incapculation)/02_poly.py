class Animal:
    def legs(self):
        print("I have 4 legs")
class human:
    def legs(self):
        print("I have 2 legs")
def start_legs(obj):
    obj.legs()
dog=Animal()
karan=human()
start_legs(dog)
start_legs(karan)
