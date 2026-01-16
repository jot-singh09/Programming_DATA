#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

int main()
{
    int num, num1;

    cout << "Enter the Value :";
    cin >> num;

    cout << "Enter The Secound Value :";
    cin >> num1;

    cout << "Before Swaping " << "\n"
         << "a=" << num << "\n"
         << "b=" << num1 << "\n";

    num = num + num1;
    num1 = num - num1;
    num = num - num1;

    cout << "After Swaping" << "\n"
         << "a=" << num << "\n"
         << "b=" << num1 << "\n";
    return 0;
}