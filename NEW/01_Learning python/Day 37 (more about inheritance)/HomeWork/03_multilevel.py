
class Human:
    def name(self):
        print("name is Karan")


class learner(Human):
    def work(self):
        print("Learning Python")


class student(learner):
   def __init__(self):
       print("Student of jitcode")
       self.work()
       self.name()
        


s = student()


