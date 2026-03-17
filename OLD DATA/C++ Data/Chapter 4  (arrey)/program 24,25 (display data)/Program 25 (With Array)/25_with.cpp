#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

int main()
{
    int a, i, num[10];

    for (i = 0; i < 5 ; i++)
        {
        cout << "Enter The Data : ";
    
    
        cin>>num[i];
    }

    cout << "You Enter  \n";
    for ( i = 0; i < 5; i++)
    {
        cout << num[i]<<"\n";
    }
    

    return 0;
}