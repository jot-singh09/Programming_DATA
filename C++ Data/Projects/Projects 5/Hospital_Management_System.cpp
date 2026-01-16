#include <iostream> // main Liabrary Function
 #include <cstdio> // useing this we do printf & scanf  
#include <iomanip>    // use for text manuplating 
#include <cstring>   // use for   string
#include <fstream> // for file handling
#include <unistd.h> // for sleep
using namespace std; // for string
     
     class Hospital{
        public:

        void options(void){
            cout << "Login" <<   endl;
            cout << "Add / remove doctors" <<   endl;
            cout << "View appointments" <<   endl;
            cout << "Register patient" <<   endl;
            cout << "Book appointment" <<   endl;
            cout << "View medical history" <<   endl;
            cout << "bill generation" <<   endl;
            cout << "Store payment records" <<   endl;
            cout << "Logout" <<   endl;

        }
     };
     class Login{
        string correct_username = " Admin"; 
        string correct_password = " Admin";
        string username;
        string password;
        
        public:
        void Admin_login(void){
            cout << "Enter Username" << endl;
            cin >> username;
            cout << "Enter Password" << endl;
            cin >> password;
            if (username==correct_username && password==correct_password)
            {
                cout << "Login Successfull" << endl;
            }
            else
            {
                cout << "Login Failed" << endl;
            }  
        }
     };

     class add_remove_doctors{
        string save_file,save_name;
        string name;
        int age,num;
        string gender;
        string qualification;
        public:
        void add_Remove_doctors(void){
            
            cout << "1. Add Doctors" << endl;
            cout << "2. Remove Doctor" <<   endl;
            cin>>num;
            if (num==1)
            {
                cout << "Enter The Name of Doctor" <<   endl;
                cin>>name;
                save_file=name+"_dr_.txt";
                save_name=name+"_dr_name_.txt";
                cout << "Enter The Age " <<   endl;
                cin>>age;
                cout << "Enter The Gender" <<   endl;
                cin>>gender;
                cout << "Enter The Qualification" <<   endl;
                cin>>qualification;
                ofstream file(save_file);
                file << "Name : " << name << endl;
                file << "Age : " << age << endl;
                file << "Gender : " << gender << endl;
                file << "Qualification : " << qualification << endl;
                file.close();

                ofstream name_file(save_name);
                name_file << name << endl;
                name_file.close();

            }
            else if (num==2)
            {
                cout << "Enter The Name of Doctor" <<   endl;
                cin>>name;
                  string hi = name+"_dr_name_.txt";  // 🔧 Manually enter the file name here

    if (remove(hi.c_str()) == 0) {
        cout << "File '" <<   "' deleted successfully." << endl;
    } else {
        perror("Error deleting file");
    }
                  string hi1 = name+"_dr_.txt";  // 🔧 Manually enter the file name here

    if (remove(hi1.c_str()) == 0) {
        cout << "File '" <<   "' ." << endl;
    } else {
        perror("");
    }


            }
            

        }
       
     };

     class appointments{
        public:
        void view_appointments(void){
            cout << "View appointments" <<   endl;
            ifs
        }
     };


int main()
{
    add_remove_doctors obj;
    obj.add_Remove_doctors();

    return 0;
}