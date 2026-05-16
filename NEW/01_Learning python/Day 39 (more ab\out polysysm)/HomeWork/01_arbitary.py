# class names:
#     def __init__(self,a):
#         self.a=a
#     def __mul__(self,*other):
#         mul=self.a
#         for i in other:
#             mul=mul*i.a
#         return names(mul)
        
        
       
    
# obj=names(2)

# output=obj*names(10)*names(3)
# print(output.a)



class calculator:
    def __init__(self,a):
        self.a=a
    def __mul__(self,*other):
        mul=self.a
        for i in other:
            mul=mul*i.a
        return calculator(mul)
    def __add__(self,*other):
        add=self.a
        for i in other:
            add=add+i.a
        return calculator(add)
obj=calculator(2)
oiutput=obj*calculator(10)
print(oiutput.a)
output=obj+calculator(10)+calculator(3)
print(output.a)



