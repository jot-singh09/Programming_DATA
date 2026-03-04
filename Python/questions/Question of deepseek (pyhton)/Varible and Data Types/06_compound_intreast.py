# Calculate compound interest using principal, rate, and time variables

principle=float(input("Enter Your Principle Amount :"))
rate=int(input("Enter the Rate of intrest :"))
time=int(input("Enter the Time "))
rate=rate/100
for i in range(time):
    principle=principle*(1+rate)

print(principle)