#include <cstdio> // useing this we do printf & scanf  
#include <iostream> // main Liabrary Function
using namespace std; // for string
#include <string.h>

int main()
{
   
    
    char st1[10];
    char st2[10];

    cout << "Enter The First Name" <<   "\n";
    cin>>st1;
    cout << "Enter The Secound Name" <<   "\n";
    cin>>st2;

    int result =strcmp(st1,st2);

    if (result==0)
    {
        cout << "They are Equal" <<   "\n";
    }

    else{
        cout << "They are not equall" <<   "\n";
    }
    

    return 0;
}