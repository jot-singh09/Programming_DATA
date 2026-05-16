class student:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def intro(self):
        print("my name is",self.name,"and my age is",self.age)
class person:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def intro(self):
        print("my name is",self.name,"and my age is",self.age)
def start_intro(obj):
    obj.intro()
karanjotstudent=student("Karanjot singh",16)
jobanjitperson=person("Jobanjit singh",25)
start_intro(karanjotstudent)
start_intro(jobanjitperson)
        
        