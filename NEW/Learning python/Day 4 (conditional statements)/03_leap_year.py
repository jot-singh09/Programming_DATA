year=int(input("Enter Any Year :"))

if (year%4==0 and year%100!=0) or (year%400==0):
    print(year ," is Leap Year")
else:
    print(year ," is Not Leap Year")