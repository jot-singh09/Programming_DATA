class operaterOverloading:
    def __init__(self, a):
        self.a = a
    def __add__(self, other):
        return self.a + other.a
    def __sub__(self, other):
        return self.a - other.a
    def __mul__(self, other):
        return self.a * other.a
    def __truediv__(self, other):
        return self.a / other.a
    def __floordiv__(self, other):
        return self.a // other.a
    def __mod__(self, other):
        return self.a % other.a
    def __pow__(self, other):
        return self.a ** other.a
o1 = operaterOverloading(10)
o2 = operaterOverloading(5)
print(o1 + o2)
print(o1 - o2)
print(o1 * o2)
print(o1 / o2)
print(o1 // o2)
print(o1 ** o2)
print(o1 % o2)

class EquallOperaterOverloading:
    def __init__(self, a):
        self.a = a
    def __eq__(self, other):
        return self.a == other.a
    def __gt__(self, other):
        return self.a > other.a
    def __lt__(self, other):
        return self.a < other.a
    def __ge__(self, other):
        return self.a >= other.a
    def __le__(self, other):
        return self.a <= other.a
    def __ne__(self, other):
        return self.a != other.a
e1 = EquallOperaterOverloading(10)
e2 = EquallOperaterOverloading(5)
print()
print(e1 == e2)
print(e1 > e2)
print(e1 < e2)
print(e1 >= e2)
print(e1 <= e2)
print(e1 != e2)