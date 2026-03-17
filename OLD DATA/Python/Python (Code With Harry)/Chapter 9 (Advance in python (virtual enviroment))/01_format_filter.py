def div(a):
    if(a%5==0):
        return True
    return False

a=2,234,324,53,2,1,2534,32,10,5,55
f= list(filter(div,a))
print(f)