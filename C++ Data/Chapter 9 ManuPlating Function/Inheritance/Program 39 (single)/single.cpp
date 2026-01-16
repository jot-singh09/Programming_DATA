#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

class A
{
public:
    int num, num1, cal;
};

class B :public A{
    public:
   void print(){
    cout << "Enter The Value of First Number :" << "\n";
    cin>>num;
    cout << "Enter The value of Secound Number :" <<   "\n";
    cin>>num1;

   }
   void result(){
    cal=num+num1;
    cout << "The Answer is :" << cal << "\n";
   }
};

int main()
{
 B Class;
 Class.print();
 Class.result();
    return 0;
}