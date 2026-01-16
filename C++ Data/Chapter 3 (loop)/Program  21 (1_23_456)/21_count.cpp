#include <cstdio> // useing this we do printf & scanf  
#include <iostream> // main Liabrary Function
using namespace std; // for string


int main()
{
    int i,j,num=1;

    for ( i = 1; i <= 3; i++)
    {
        for ( j = 1; j <= i; j++)
        {
            cout << num;;
            num++;
        }
        cout << "\n";
        
    }
    
    return 0;
}