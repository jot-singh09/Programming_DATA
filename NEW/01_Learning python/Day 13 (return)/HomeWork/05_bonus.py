def bonus(salary):
    if salary>50000:
        return True 
    else:
        return False
    
sal=int(input("Enter the Number :"))
ans = bonus(sal)
if ans==True:
    print("Yes You are Eligible for bonus")
else:
    print("No You are Not! Eligible for bonus")
