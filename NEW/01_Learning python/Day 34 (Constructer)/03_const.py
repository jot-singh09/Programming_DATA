class Dog:
    name=""
    age=0
    def __init__(self,n,a) :
        self.name=n
        self.age=a  
       
    
    
    def bark(self):
        print(f"{self.name} Says Woof!")
d1=Dog("Buddy",2)
d1.bark()