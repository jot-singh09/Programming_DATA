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
        





if __name__ =="__main__": # if we do that so on importing the code is no t directly run only fun all import we have to call that fun to run
    print(__name__) #it show the file is run form which file in main or imported
    print("Running From main file")
    final() # running this code
