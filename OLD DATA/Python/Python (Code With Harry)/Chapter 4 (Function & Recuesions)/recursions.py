'''
1! 1
2! 2*1
3! 3*2*1
4! 4*3*2*1
5! 5*4*3*2*1
'''

def fac(num):
    
    if (num==1 or num==0):
        return 1
    return num * fac(num-1)
'''
num=5 
num-1 what happen the value of num decrese wheather the num value not comes
to 0 or 1 
4,3,2, now goes to one and return 1 and programs end;
'''
n=int(input("Enter The Number"))
a=fac(n)
print("The factorial is :",a)

