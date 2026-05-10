class SugerCane:
    def __init__(self,type):
        self.type=type
    def showType(self):
        print(f"The SugerCane has {self.type} Type")
class Gurd(SugerCane):
    def __init__(self,type,kg,process):
        super().__init__(type)
        self.kg=kg
        self.process=process
    def show(self):
        print(f"The Gurd has {self.kg} kg")
        print(f"The Gurd Made Fully {self.process}")
obj=Gurd("officinarum",76,"Organic")
obj.showType()
obj.show()
