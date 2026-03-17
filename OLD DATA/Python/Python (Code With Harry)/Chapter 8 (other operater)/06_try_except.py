# try and except in this first it try like user enter an int so prigram run but! if user enter a float or str so without crashing  a program it show the message which we give in expect 
try:
    a=int(input("Enter a Number :"))
    print(a,"Thank You!")

except Exception as e: # by use of exception as -- we find the which type error value etc and giving message acorrding to it 
    print(e)
    print("Enter a vaild Number")