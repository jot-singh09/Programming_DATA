a=5 # integer datatype
b=5.5 # Float datatype
c="Karan" # stringdatatype
d=True # Bool datatype
print(" interger:",a,"float",b,"string",c,"boolean",d)

#      input and output

name=input(" Enter Your name :")# input of string
num=int(input(" Enter any int number :"))# input of interger
num1=float(input(" Enter any float number :"))# input of Float
num2=eval(input("Enter any number :")) # eval fun to detect int or float
print(num2,"eval function and the type is :",type(num))
#        type casting
num_float= float(num) # convert interger to float
num_str= str(num) # convert interger to str
print(f"{num_float} converting in floating")
print(f"{num_str} converting in str")


