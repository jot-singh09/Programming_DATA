#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

int main()
{
    int circumstand, radius, heigth;
    cout << "ENter The Radius :";
    cin >> radius;
    cout << "Enter The Height :";
    cin >> heigth;

    circumstand=22/7*radius*radius*heigth;
    cout << "The Answer Is :"<<circumstand<<"\n";
    return 0;
} 