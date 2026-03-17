#   Without returning value

# def avg(num,num2,num3):
#     print(f"The Average is  {(a+b+c)/3}")

# a=int(input("Enter Number 1 :"))
# b=int(input("Enter Number 2 :"))
# c=int(input("Enter Number 3 :"))
# avg(a,b,c,) 
#   or 


#         Wiht Returning Value


def avg():
    a=int(input("Enter Number 1 :"))
    b=int(input("Enter Number 2 :"))
    c=int(input("Enter Number 3 :"))
    average=(a+b+c)/3
    return average


a= avg()  # The a has returning Value those we do in Funtion
print(a)




#         With String 
# def good(name):
#     print(f"hello {name}")
# good("Karan")
# good("Raman")