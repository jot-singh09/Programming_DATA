class Poly:
    def __init__(self,a):
        self.a=a
    def __add__(self, *other):
        sum=0 
        count=0
        print(other)
        for i in other:
            sum+=other[count]
            count+=1
        self.a+=sum
        return self.a
    def __sub__(self,*other):
        sub=0
        count=0
        print(other)
        for i in other:
            sub+=other[count]
            count+=1
        self.a-=sub
        return self.a
p1=Poly(10)
print(p1 +10+20+32)
print(p1 -10 -20-32)