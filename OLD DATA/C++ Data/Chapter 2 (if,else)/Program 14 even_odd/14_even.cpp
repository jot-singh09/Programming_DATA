#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

int main()
{
    float avg;
    int num;
    cout << "Enter the Number :";
    cin >> num;

    if (num % 2 == 0)
    {
        cout << "The Entered Number Is Even : " << num << "\n";
    }

    else
    {
        cout << "The Entered Number Is Odd : " << num << "\n";
    }

    return 0;
}