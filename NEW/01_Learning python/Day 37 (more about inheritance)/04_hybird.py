class Tree:
    def __init__(self,type):
        self.type=type
    def showtree(self):
        print(f"The Tree is of {self.type}")
class Wood(Tree):
    def __init__(self,cutting,type):
        self.cutting=cutting
        Tree.__init__(self,type)
        
    def showood(self):
        print(f"The Wood is cut for {self.cutting}")
class Chair(Wood):
        def __init__(self,price,type,cutting):
            self.price=price
            Wood.__init__(self,cutting,type)
        def showchair(self):
            print(f"The Chair price is {self.price}")
            self.showtree()
            self.showood()
class Table(Wood):
    def __init__(self,price,type,cutting):
        self.price=price
        Wood.__init__(self,cutting,type)
    def showtable(self):
        print(f"The Table price is {self.price}")
        self.showtree()
        self.showood()
t1=Table(1500,"lalchandan","Table")
t1.showtable()
print()
c1=Chair(500,"lalchandan","Table")
c1.showchair()
