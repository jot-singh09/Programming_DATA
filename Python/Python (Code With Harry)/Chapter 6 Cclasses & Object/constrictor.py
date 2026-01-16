class Employee: # This is a class
    def __init__(self):
        print("Hello Good,Morning") # this is dunder method or constructor automactucally call 
        def info():
            salary=12000
            language="py"


karan=Employee() # this is object
karan.name="Raman"
i=karan.info()
print(karan.name,i)