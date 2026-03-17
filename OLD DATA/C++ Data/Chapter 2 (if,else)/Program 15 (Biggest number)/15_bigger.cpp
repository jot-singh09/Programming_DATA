#include <cstdio> // useing this we do printf & scanf  
#include <iostream> // main Liabrary Function
using namespace std; // for string


int main()
{
    int num1,num2,num3;

    cout << "Enter The First Number :";
    cin>>num1;
    cout << "Enter The Secound Number :";
    cin>>num2;
    cout << "Enter The Third Number :";
    cin>>num3;

    if (num1>num2 && num1>num3)
    {
        cout << "The First Number Is Biggest :"<<num1<<"\n";
    }
    else if (num2>num3 && num2>num1)
    {
        cout << "The Secound Number Is Biggest :"<<num2<<"\n";
    }
    else if(num3>num1 && num3>num2){
        cout << "The Third Number Is Biggest :"<<num3<<"\n";
    }
    else if (num1==num2==num3)
    {
        cout << "They All Are Equall"<<num1<<"\n";
    }
    else{
        cout << "Try Again!";
    }
    
    
    
    return 0;
}