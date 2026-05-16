class Poly:
    def __init__(self,a):
        self.a=a
    def __add__(self, *other):
        sum=self.a
        print(other)
        for i in other:
            sum+=i.a
        return Poly(sum)
           
        
    def __sub__(self,*other):
        sub=self.a
        print(other)
        for i in other:
            sub-=i.a
        return Poly(sub)
           
        
        
p1=Poly(10)
a=p1 + Poly(10) + Poly(20) +Poly(100)
b=p1 - Poly(10) - Poly(40) -Poly(100)
print(a.a)
print(b.a)
