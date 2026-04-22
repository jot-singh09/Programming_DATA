
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
sub=int(input("Enter the Subjects Number :"))
l=nosub(sub)
print(l)
print()
print(sum(l))