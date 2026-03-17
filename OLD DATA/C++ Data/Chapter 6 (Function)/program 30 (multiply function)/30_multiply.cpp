#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

void mul(int num, int num1)
{
    int cal;
    cal = num * num1;
    cout << "The Answer Is :" << cal << "\n";
}

int main()
{
    int num, num1;

    cout << "Enter The Value of First Number  :" <<   "\n";
    cin>>num;

    cout << "Enter The Value of Secound Number :" <<   "\n";
    cin>>num1;

    mul(num,num1);
     return 0;
}