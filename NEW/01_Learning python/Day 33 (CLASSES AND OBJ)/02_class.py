class Maths:
    def add(self,num1=0,num2=0):
        print(num1+num2)
    def sub(self,num1=0,num2=0):
        print(num1-num2)
    def mul(self,num1=0,num2=0):
        print(num1*num2)
    def div(self,num1=0,num2=0):
        print(num1/num2)
    def mod(self,num1=0,num2=0):
        print(num1%num2)
    def power(self,num1=0,num2=0):
        print(num1**num2)
    def float_div(self,num1=0,num2=0):
        print(num1//num2)
    
    def final (self,num=0,num1=0):
        self.add(num,num1)
        self.sub(num,num1)
        self.mul(num,num1)
        self.div(num,num1)
        self.float_div(num,num1)
        self.mod(num,num1)
        self.power(num,num1)
fun=Maths()
fun.final(10,25)