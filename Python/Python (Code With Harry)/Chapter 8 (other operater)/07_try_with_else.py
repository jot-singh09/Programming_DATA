try:
    a=int(input("Enter a Number :"))
    print(a,"Thank You!")

except Exception as e: # by use of exception as -- we find the which type error value etc and giving message acorrding to it 
    print(e)
    print("Enter a vaild Number")

else: # if our tey will sucessfully work so the else code will run in try with else
    try:
        b=int(input("Enter a Number :"))
        print(a+b)
        
    except Exception as error:print("Enter a Vaild Number")
    


