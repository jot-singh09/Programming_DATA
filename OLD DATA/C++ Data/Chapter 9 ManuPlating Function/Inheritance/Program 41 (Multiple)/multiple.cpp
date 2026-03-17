#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

class school
{
public:
    char name_of_school[10];
    char adress[10];
    char timing[10], ending[10];
};

class student
{
public:
    char name_student[10];
    int roll_no;
    float marks;
};

class Parent
{

public:
    char father[10];
    char mother[10];
};

class fun : public school, public student, public Parent
{
public:
    void scan()
    {
        cout << "Enter The Name Of School" << "\n";
        cin >> name_of_school;

        cout << "Enter The Adress Of School" << "\n";
        cin >> adress;

        cout << "Enter The Starting Time Of School" << "\n";
        cin >> timing;

        cout << "Enter The Closing Time Of School" << "\n";
        cin >> ending;

        cout << "Enter the Student Name" << "\n";
        cin >> name_student;

        cout << "Enter The Roll No Of student" << "\n";
        cin >> roll_no;

        cout << "Enter The Marks of Student" << "\n";
        cin >> marks;

        cout << "Enter The Father Name of Student " << "\n";
        cin >> father;

        cout << "Enter The Mother Name Of Student" << "\n";
        cin >> mother;
    }

    void print()
    {

        cout << "The Scholl Name is :" << name_of_school << "\n";

        cout << "The Adress of Scholl is :" << adress << "\n";

        cout << "The Starting Time of School is :" << timing << "\n";

        cout << "The Ending Time of school is " << ending << "\n";

        cout << "The Student Name is :" << name_student << "\n";

        cout << "The Roll No Of Student is :" << roll_no << "\n";

        cout << "The Marks of Student is :" << marks << "\n";

        cout << "The Father Name is :" << father << "\n";

        cout << "The Mother Name is :" << mother << "\n";
    }
};

int main()
{
    fun function;

    function.scan();
    function.print();

}