#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

int main()
{
    int num, num1, temp;

    cout << "Enter The First Number" << "\n";
    cin >> num;

    cout << "Enter The Secound Number" << "\n";
    cin >> num1;

    cout << "Before Swaping :" << "\n"
         << "A=" << num << "\n"
         << "B=" << num1 << "\n";
    temp = num;
    num = num1;
    num1 = temp;

    cout << "After Swaping" << "\n"
         << "A=" << num << "\n"
         << "B=" << num1 << "\n";

    return 0;
}