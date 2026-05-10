`class Wood:
    def __init__(self,Type,Colour):
        self.Type=Type
        self.Colour=Colour
    
    def showWood(self):
        print(f"The Chair has {self.Type } Wood and {self.Colour} ")
class Chair(Wood):
    def __init__(self,Type,Colour,Legs,Seats):
        Wood.__init__(self,Type,Colour)
        self.Legs=Legs
        self.Seats=Seats
    def showChair(self):
        print(f"The Chair has {self.Legs} and {self.Seats}")
c1=Chair("Sagwaan","Black",Seats="Iron",Legs=4,)
c1.showWood()
c1.showChair()