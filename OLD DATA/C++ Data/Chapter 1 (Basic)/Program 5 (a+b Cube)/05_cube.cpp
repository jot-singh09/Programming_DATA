#include <cstdio> // useing this we do printf & scanf  
#include <iostream> // main Liabrary Function
using namespace std; // for string


int main()
{
    int a,b,cal;
    cout << "Enter The Value of A :" ;
    cin>>a;
    

    cout << "Enter The Value of B :";
    cin>>b;

    cal=a*a*a+b*b*b+3*a*a*b+3*b*b*a;
    cout << "The Answer is :"<<cal<<"\n";
    return 0;
}