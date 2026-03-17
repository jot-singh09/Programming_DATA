#include <iostream>  // main Liabrary Function
#include <cstdio>    // useing this we do printf & scanf
#include <iomanip>   // use for text manuplating
#include <cstring>   // use for   string
#include <fstream>   // for file handling
#include <unistd.h>  // for sleep
using namespace std; // for string



class Add_Student 

{
    string name;
    string Class;
    string Section;
    string roll_no;
    string father, mother;
    string date, birth;
    string overwrite;

    string save, save1;

public:
    void Input(void)
    {
        cout << "Enter The Name of File :" << endl;
        getline(cin,save1);
        save = save1 + ".txt";
        cout << "Loding..." <<   endl;
        sleep(2);

    }

    int add_student()
    {
        ifstream check(save);
        if (check)
        {
            cout << "File Name Arleady exit Want To Overwrite it? (y/n)" <<   endl;
            getline(cin,overwrite);
            if (overwrite=="y" || overwrite=="Y")
            {
                 
        ofstream input;
        input.open(save);
        cout << "Press Enter To Countinue" <<   endl;
        cin.ignore();

        cout << "Enter The Registration (Use/ after Entering date or mounth)" << endl;
        getline(cin, date);
        input << "The Registration Date is :" << date << endl;

        cout << "Enter The DOB (Use/ after Entering date or mounth)" << endl;
        getline(cin, birth);
        input << "The DOB is :" << birth << endl;

        cout << "Enter The Name of Student" << endl;
        getline(cin, name);
        input << "The Name is :" << name << endl;

        cout << "Enter the Class of Student" << endl;
        getline(cin, Class);
        input << "The Class is :" << Class << endl;

        cout << "Enter The Section Of Student" << endl;
        getline(cin, Section);
        input << "The Section is :" << Section << endl;

        cout << "Enter The Roll No" << endl;
        getline(cin, roll_no);
        input << "The Roll No is : " << roll_no << endl;

        cout << "Enter The Father Name" << endl;
        getline(cin, father);
        input << "The Father Name is : " << father << endl;

        cout << "Enter The Mother Name" << endl;
        getline(cin, mother);
        input << "The Mother Name is :" << mother << endl;
        cout << "The Data Sucessfully Saved in " << save<<  endl;
        input.close();
    }
    else{
        return 1;
    }
    
            }
            else{
                ofstream input;
        input.open(save);
        cout << "Press Enter To Countinue" <<   endl;
        cin.ignore();

        cout << "Enter The Registration (Use/ after Entering date or mounth)" << endl;
        getline(cin, date);
        input << "The Registration Date is :" << date << endl;

        cout << "Enter The DOB (Use/ after Entering date or mounth)" << endl;
        getline(cin, birth);
        input << "The DOB is :" << birth << endl;

        cout << "Enter The Name of Student" << endl;
        getline(cin, name);
        input << "The Name is :" << name << endl;

        cout << "Enter the Class of Student" << endl;
        getline(cin, Class);
        input << "The Class is :" << Class << endl;

        cout << "Enter The Section Of Student" << endl;
        getline(cin, Section);
        input << "The Section is :" << Section << endl;

        cout << "Enter The Roll No" << endl;
        getline(cin, roll_no);
        input << "The Roll No is : " << roll_no << endl;

        cout << "Enter The Father Name" << endl;
        getline(cin, father);
        input << "The Father Name is : " << father << endl;

        cout << "Enter The Mother Name" << endl;
        getline(cin, mother);
        input << "The Mother Name is :" << mother << endl;
        cout << "The Data Sucessfully Saved in " << save<<  endl;
        input.close();
            }
            
        }

       
};

class Find_Student{
string save1,save;
public:

void input2(){
cout << "Enter The File Name Want To Find" <<   endl;
getline(cin,save1);
save=save1+".txt";
cout << "Loading..." <<   endl;
sleep(1);
}

void display(){
    ifstream Show;
    string sh;
    Show.open(save);
    
   if (Show)
   {
  while (Show.eof()==0)
  {
    getline(Show,sh);
    cout <<  sh<<endl;
  }
  Show.close();
  

   }
   else
   {
    cout << "File Not Found!" <<   endl;
   }
   
   
}

};

class Edit{
    string name;
    string Class;
    string Section;
    string roll_no;
    string father, mother;
    string date, birth;
    string overwrite;

    string save, save1;

public:

 void Inpu3t(void)
    {
        cout << "Enter The Name of File :" << endl;
        getline(cin,save1);
        save = save1 + ".txt";
        cout << "Loding..." <<   endl;
        sleep(2);

    }

    int Edit_student()
    {
        ifstream check(save);
        if (check)
        {
            cout << "All Data Of This file Will Deleted" <<   endl;
            cout << "Conform To Rewrite The "<<save <<"(y/n)" <<   endl;
            getline(cin,overwrite);
            if (overwrite=="y" || overwrite=="Y")
            {
                 
        ofstream input;
        input.open(save);
        cout << "Press Enter To Countinue" <<   endl;
        cin.ignore();

        cout << "Enter The Registration (Use/ after Entering date or mounth)" << endl;
        getline(cin, date);
        input << "The Registration Date is :" << date << endl;

        cout << "Enter The DOB (Use/ after Entering date or mounth)" << endl;
        getline(cin, birth);
        input << "The DOB is :" << birth << endl;

        cout << "Enter The Name of Student" << endl;
        getline(cin, name);
        input << "The Name is :" << name << endl;

        cout << "Enter the Class of Student" << endl;
        getline(cin, Class);
        input << "The Class is :" << Class << endl;

        cout << "Enter The Section Of Student" << endl;
        getline(cin, Section);
        input << "The Section is :" << Section << endl;

        cout << "Enter The Roll No" << endl;
        getline(cin, roll_no);
        input << "The Roll No is : " << roll_no << endl;

        cout << "Enter The Father Name" << endl;
        getline(cin, father);
        input << "The Father Name is : " << father << endl;

        cout << "Enter The Mother Name" << endl;
        getline(cin, mother);
        input << "The Mother Name is :" << mother << endl;
        cout << "The Data Sucessfully Saved in " << save<<  endl;
        input.close();
    }
}
else{
    cout << "File Not Found!" <<   endl;
}
}

}; 

class Delete{
    string save1,save;
    
    public:
    void input4(){

    
    cout << "Enter The File Name " <<   endl;
    getline(cin,save1);
    save=save1+".txt";
    }

    void delet(){
        ifstream show;
        show.open(save);
        if (show)
        {
            show.close();
            cout << "Conform To Delete"<<save <<"(y/n)"<<   endl;
            string conforn;
            getline(cin,conforn);
            if (conforn=="y"|| conforn=="Y")
            {
                    // we can change name and also that name from if and cout 
    save; 

    if (remove(save.c_str()) == 0) {
        cout << "File '" << save << "' deleted successfully." << endl;
    } else {
        perror("Error deleting file");
    }

            }
            

        }
        else
        {
            cout << "File Not Found!" <<   endl;
        }
        
        
    }
}; 


class option : public Add_Student,public Delete,public Edit,public Find_Student
{
    int num;

public:
    void Function()
    {
        cout << "1. Add New Student" << endl;
        cout << "2. Find Student" << endl;
        cout << "3. Edit Student" << endl;
        cout << "4. Delete Student" << endl;
        cin >> num;
        
        cin.ignore();


        if (num==1)
        {
            Input();
            add_student();
        }

        else if (num==2)
        {
            input2();
            display();
        }
        else if (num==3)
        {
            Inpu3t();
            Edit_student();
        }
        else if (num==4)
        {
            cout << "Enter The Passward" <<   endl;
            string pass;
            getline(cin,pass);
            if (pass=="0000")
            {
                input4();
                delet();
                
            }
            else{
                cout << "Wrong Passward" <<   endl;
            }
            
        }
        
        
        
        
    }
};

int main()
{
  option Fun;
  Fun.Function();
    return 0;
}