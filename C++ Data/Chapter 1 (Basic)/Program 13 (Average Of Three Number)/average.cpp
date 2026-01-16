#include <cstdio> // useing this we do printf & scanf  
#include <iostream> // main Liabrary Function
using namespace std; // for string


int main()
{
    float avg;
    float num1,num2,num3;
    cout << "Enter The First Number :";
    cin>>num1;
    cout << "Enter The Secound Number :";
    cin>>num2;
    cout << "Enter The Third Number";
    cin>>num3;

    avg=num1+num2+num3/3;
    cout << "The Average is :"<<avg<<"\n";

    
    
    return 0;
}