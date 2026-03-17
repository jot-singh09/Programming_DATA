#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

int main()
{
    int l, b, h, cal;
    cout << "Enter The Length :";
    cin >> l;
    cout << "Enter The Breath :";
    cin >> b;
    cout << "Enter The Height :";
    cin >> h;

    cal=l*b*h;
    cout << "The Answer Is :"<<cal<<"\n";
    return 0;
}