class sugar:
    def __init__(self,quanity):
        self.quanity=quanity
    def showsugar(self):
        print(f"You use {self.quanity} quenity")
class nambupani(sugar):
    def __str__(self) :
        return "I am Nembu Pani"
    def __init__(self,quanity,lemon):
        self.lemon=lemon
        sugar.__init__(self,quanity)
    def shownambupani(self):
        print(f"You make nambu pani by use of {self.lemon} lemon")
        self.showsugar()
class sarbat(sugar):
    def __init__(self,quanity,ml):
        self.ml=ml
        sugar.__init__(self,quanity)
    def showsarbat(self):
        print(f"You make sarbat by use of {self.ml} sirup")
        self.showsugar()
class milkbadam(sugar):
    def __init__(self,quanity,ml):
        self.ml=ml
        sugar.__init__(self,quanity)
    def showmilk(self):
        print(f"You make milkbadam by use of {self.ml} sirup")
        self.showsugar()
        
l1=nambupani("80gm",3)
l1.shownambupani()
m1=milkbadam("50gm",500)
m1.showmilk()
s1=sarbat("100gm",9)
s1.showsarbat()
print()
s1.showsugar()
l1.showsugar()
m1.showsugar()

print()
print(l1)


        
  
    