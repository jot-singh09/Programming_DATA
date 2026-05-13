class Detail:
    def __init__(self, name, age, Class):
        self.name = name
        self.age = age
        self.Class = Class

    def show(self):
        print(f"Name: {self.name}, Age: {self.age}, Class: {self.Class}")
        
class Father_mother:
    def __init__(self, father_name, mother_name):
        self.father_name = father_name
        self.mother_name = mother_name

    def show_parents(self):
        print(f"Father's Name: {self.father_name}, Mother's Name: {self.mother_name}")
class Student(Detail, Father_mother):
    def __init__(self, name, age, Class, father_name, mother_name, student_id):
        Detail.__init__(self, name, age, Class)
        Father_mother.__init__(self, father_name, mother_name)
        self.student_id = student_id

    def show_student(self):
        print(f"Student ID: {self.student_id}")
        self.show()
        self.show_parents()
s1 = Student(name="Karan", age=16, Class="python", father_name="Baldeep Singh", mother_name="Baljinder Kaur", student_id=1445)
s1.show_student()