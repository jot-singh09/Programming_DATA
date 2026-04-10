def subjects(num):
    total=0
    loop=num+1
    for i in range(1,loop):
        subject=eval(input(f"Enter the Marks for subject {i} :"))
        if subject>0 and subject<100:
            print()
            total+=subject
        else:
            a=True
            while a:
                subject=eval(input(f"Renter the Marks for subject {i} :"))
                if subject>0 and subject<100:
                    total+=subject
                    a=False
                else:
                    a=True
    return total

def avg (total,sub):
    return total/sub
def grade(avg):
    if avg>90 and avg<100:
        return "Grade A"
    elif avg>60 and avg<=90:
        return "Grade B"
    elif avg>=40 and avg <=60:
        return "Grade C"
    elif avg>0 and avg<40:
        return ("Fail")
    else:
        return "Error"

subject=int(input("How Many Subjects ? :"))
total=subjects(subject)
print("Total Marks :",total)
average=avg(total,subject)
print(f"Average : {average}")
Grade=grade(average)
print(f"Grade : {Grade}")
            


            

        

