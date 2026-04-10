def year(year):
    if (year%4==0 and year%100!=0) or (year%400==0):
        print(year,"This is leap year!")
    else:
        print(year,"is not leap year")
a=int(input("Enter The Year :"))
year(a)