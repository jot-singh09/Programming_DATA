def intrest(amo,rate,time):
    cal=amo*rate*time/100
    print(f"the Simple Intrest is {cal}")
amount=eval(input("Enter the Principle Anount :"))
rate=int(input("Enter the Rate of intrest :"))
time=int(input("Enter Time Period :"))
intrest(amount,rate,time)