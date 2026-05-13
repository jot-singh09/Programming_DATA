class Tree:
    def __init__(self,type):
        self.type=type
    def showtree(self):
        print(f"The Tree is of {self.type} type")
class Wood(Tree):
    def __init__(self,cutting):
        self.cutting=cutting
    def showWood(self):
        print(f"The Wood is Cut according to make {self.cutting}")
class Chair(Wood):
    def __init__(self,price,type,cutting):
        self.price=price
        Tree.__init__(self,type)
        Wood.__init__(self,cutting)
    def show(self):
        print(f"The Chair price is {self.price}")
        print()
        self.showtree()
        print()
        self.showWood()
c1=Chair(1500,"LalChandan","Chair")
c1.show()
        