def odd_num(start,end):
    
    for i in range(start,end+1):
        if i%2!=0:
            print(i)
num1=int(input("Enter the Starting Number :"))
num2=int(input("Enter the Ending Number :"))
odd_num(num1,num2)