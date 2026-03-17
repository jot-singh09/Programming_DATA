#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

int main()
{
    int num, num1, add, sub, div, mul;

    cout << "Enter the Value of A :";
    cin >> num;

    cout << "Enter the Value of B :";
    cin >> num1;

    add = num + num1;
    cout << "The Answer By Adding is :" << add << "\n";

    sub = num - num1;
    cout << "The Answer By Subtraction is :" << sub << "\n";

    cout << "The Answer By Division is :" << num / num1 << "\n";

    cout << "The Answer By Multiplaction is :" << num * num1 << "\n";


    return 0;
}