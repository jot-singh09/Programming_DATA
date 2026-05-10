class Student:
    name=""
    roll_number=0
    def display(self):
        print(f"The Student Name is : {self.name}")
        print(f"The Student Roll Number is : {self.roll_number}")
student1=Student()
student1.name="Karanjot Singh"
student1.roll_number=6
student1.display()