class Voter_card:
    name=""
    age=0
    state=""
    def show(self):
        print(f"{self.name} \n {self.age} \n {self.state}")
        
    def __init__(self,name,state,age=18,):
        self.name=name
        self.age=age
        self.state=state
        self.show()
       
karan=Voter_card("Karana","Panjab")
print()
arjan=Voter_card("Arjan","Panjab",36)
# jaspreet=Voter_card() not working without arguments 
