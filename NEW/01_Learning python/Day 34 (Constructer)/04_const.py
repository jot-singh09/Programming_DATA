class Person:
    

    def __init__(self,n,a) :
        self.name=n
        self.age=a
       
    def greet(self):
        print(f"{self.name} Say Hello!")
p1=Person("John",36)
p1.name="John Preet Singh" 
del p1.name
print(p1.name)
p1.greet()
        