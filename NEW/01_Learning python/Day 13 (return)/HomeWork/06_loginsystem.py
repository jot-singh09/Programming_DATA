def login(username,Pass):
    user="admin"
    Passward=1234
    if username==user and Pass==Passward:
        return True
    else:
        return False

user=input( "Enter the Username : ")
Pass=int(input("Enter the Passward :"))

if login(user,Pass)==True:
    print("Login Sucessfully! ")
else:
    print("Invaild Username or Passward!")
