def options():
    print("1.Add Student ")
    print("2.Delete Student")
    print("3.Search student ")
    print("4.Exit ")

    num=int(input("Select Number :"))

def add_student():
    try:
        name=input("Enter the Name of Student :")
        Pass= int(input("Enter the Previous Passed Class :"))
        father= input("Enter the father name :")
        mother=input("Enter the mother name :")
        savefile=name+"_detail_.txt"
        file=open(savefile,"w")
        file.write(f"The Student name is : {name}")
        file.write(f"The Previous Passes class  is : {Pass}")
        file.write(f"The father name is : {father}")
        file.write(f"The mother name is : {mother}")
        
    except Exception as e:
        print("Any Wrong Typing ")


    
add_student()

        
    


