#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string
#include <string.h>

int main()
{
    struct student
    {
        char name[100];
        int roll_no;
        int Class;
        char section[10];
    };
    struct student s1;

    cout << "Enter The Student Name :";

    cin >> s1.name;

    cout << "Enter The Student Class :";
    cin>>s1.Class;

    cout << "Enter The Student Section :";
    cin>>s1.section;

    cout << "Enter The Roll No :";
    cin>>s1.roll_no;

// print--------------
cout << "You Enter : " <<   "\n";

cout <<"Name is :" << s1.name <<   "\n";
cout <<  "Class is :" <<s1.Class <<   "\n";
cout <<  "Section is :" <<s1.section <<   "\n";
cout <<  "Roll no is  :" <<s1.roll_no <<   "\n";

    return 0;
}