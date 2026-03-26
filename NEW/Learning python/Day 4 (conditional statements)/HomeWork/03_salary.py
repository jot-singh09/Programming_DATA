
salary=eval(input("Enter Your Salary :"))
bonus=0
finalsalary=0
if salary>50000:
    bonus=salary*20/100
    finalsalary=bonus+salary
    print(f"your salary is {salary} with 20% bonus {bonus} salary is {finalsalary}")

elif salary<=50000 and salary>=30000:
    bonus=salary*10/100
    finalsalary=bonus+salary
    print(f"your salary is {salary} with 10% bonus {bonus} salary is {finalsalary}")
elif  salary<30000 and salary>=1:
    bonus=salary*5/100
    finalsalary=bonus+salary
    print(f"your salary is {salary} with 5% bonus {bonus} salary is {finalsalary}")
    
else:
    print("Invaild Salary Entered")
