
def nosub(sub):
    subject=[]
    for i in range (1,sub+1):
        subject_nu=eval(input(f"Enter the Makes of Subject {i} :"))
        subject.append(subject_nu)
    return subject
    

def sum(n):
    sum=0
    for i in n :
        sum+=i
    return sum 

def pass_fail(n,noofsub):
    percentage= ( n/(noofsub *100) )*100
    print(f"Your Precentage is : {percentage}")
    if percentage>=27:
        return True
    else:
        return False

sub=int(input("Enter the Subjects Number :"))
l=nosub(sub)
print(l)
print()
Sum=sum(l)
check = pass_fail(Sum,sub)
if check==True:
    print("You are Pass")
else:
    print("You are Fail")
