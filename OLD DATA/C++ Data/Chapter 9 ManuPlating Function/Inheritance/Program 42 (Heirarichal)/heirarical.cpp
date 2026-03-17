#include <cstdio> // useing this we do printf & scanf  
#include <iostream> // main Liabrary Function
using namespace std; // for string

class A{
    public:
    char name[10];
    int age;
    char city[10];
    char father[10];
    char mother[10];
    
};

class B:public A{
    
};

class C:public A{

};

class D:public A{

};

class E:public B{
    public:
    void scan(){

    cout << "Enter Thr Name of student" <<   "\n";
    cin>>name;
    cout << "Enter the Age Of student" <<   "\n";
    cin>>age;
    cout << "Enter the city OR Village Of Student  " <<   "\n";
    cin>>city;
    cout << "Enter The Father Name Of student" <<   "\n";
    cin>>father;
    cout << "Enter The Mother Name Of student" <<   "\n";
    cin>>mother;
    }

    void print(){
        cout << "The Student Name is : " <<  name<< "\n";
        cout << "The Age Of Student is :" << age << "\n";
        cout << "The City or Village Is :" << city << "\n";
        cout << "The Father Name is :" << father<<  "\n";
        cout << "The Mother Name is :" << mother<<  "\n";

    }
};



int main()
{
    E E;
    
    E.scan();
    E.print();
    

    
    return 0;
}