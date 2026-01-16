#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

int main()
{
    int i, j;

    for (i = 3; i ; i--)
    {
        for (j = i; j ; j--)
        {
            cout << "*";
        }
        cout << "\n";
    }

    return 0;
}