#  finally is use for function mostly even we fo return befire finally it run in every condition 
def final():

    try:
        a=int(input("Enter a Number :"))
        print(a,"Thank You!")

    except Exception as e: # by use of exception as -- we find the which type error value etc and giving message acorrding to it 
        print(e)
        print("Enter a vaild Number")
    
    finally: # finally is work even return value given 
        print("I am Finally ")
        

