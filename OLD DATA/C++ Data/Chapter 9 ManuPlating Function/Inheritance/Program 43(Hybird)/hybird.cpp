#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

class Parent
{
public:
    char name[10];
    int age;
};

class A  
{
public:
    char father[10];
    char mother[10];
};

class B : public A
{

public:
    int f_age;
    int m_age;
};

class Final: public Parent,public B{


}; 

int main()
{

    Final f;

    cout << "Enter Thr Name of student" <<   "\n";
    cin>>f.name;
    cout << "Enter the Age Of student" <<   "\n";
    cin>>f.age;
    cout << "Enter The Father Name Of student" <<   "\n";
    cin>>f.father;
    cout << "Enter The Mother Name Of student" <<   "\n";
    cin>>f.mother;
    cout << "Enter The Father Age Of student" <<   "\n";
    cin>>f.f_age;
    cout << "Enter The Mother Age Of student" <<   "\n";
    cin>>f.mother;

    
    return 0;
}