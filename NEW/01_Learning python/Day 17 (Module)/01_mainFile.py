from factorail_prime_sum import sum,prime,fact
# import factorail_prime_sum as operation
import platform as p
num=eval(input("Enter the Number : "))
# print("The Sum is :",operation.sum(num))
# print("The factorial is :",operation.fact(num))
# print("The Number is prime:",operation.prime(num))
print("The Sum is :",sum(num))
print("The factorial is :",fact(num))
print("The Number is prime:",prime(num))
print(p.system()) #give the system name
# print(dir(operation))