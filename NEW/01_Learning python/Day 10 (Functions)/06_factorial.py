'''
1X2X3X4X5
1X2=2
2X3=6
6X4=24
24X5=120
i=1
b=2
'''
def fac(num):
    
    fac=1
    for i in range (1,num+1):
        fac*=i
    print(fac)
        
num=int(input("Enter the value"))       
fac(num)