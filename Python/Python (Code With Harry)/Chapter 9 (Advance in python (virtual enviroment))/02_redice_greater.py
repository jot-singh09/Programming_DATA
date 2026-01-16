#  find bigger no in list 
from functools import reduce
l=[234,234,23,4,23,4,23,4324324,32432]

def great(a,b):
    if(a>b):
        return a
    return b

print(reduce(great,l))