#  find bigger no amount 3 numbers

def bigger():
     num1=int(input("Enter The Number 1 :"))
     num2=int(input("Enter The Number 2 :"))
     num3=int(input("Enter The Number 3 :"))
     if num1>num2 and num1>num3:
          print(f"The First Number is Biggest {num1}")

     elif num2>num3:
          print(f"The Secound Number is Biggest {num2}")

     else:
          print(f"The Third Number is Biggest {num3}")
          
bigger()