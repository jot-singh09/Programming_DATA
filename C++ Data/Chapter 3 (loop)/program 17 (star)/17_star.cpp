#include <cstdio> // useing this we do printf & scanf  
#include <iostream> // main Liabrary Function
using namespace std; // for string


int main()
{
    int i,j;
    for ( i = 1; i <=
         3; i++)
    {
        for ( j = 0; j < i; j++)
        {
            cout << "*";
        }
        cout << "\n";
        
    }
    
    return 0;
}