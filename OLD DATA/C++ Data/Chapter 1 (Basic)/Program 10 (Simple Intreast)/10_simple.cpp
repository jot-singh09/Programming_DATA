#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

int main()
{
    int principle_amo, time, rate, cal;

    cout << "Enter The Principle Amount :";
    cin >> principle_amo;

    cout << "Enter The Time :";
    cin >> time;

    cout << "Enter Rate Of Intreast :";
    cin >> rate;

    cal = principle_amo * rate * time / 100;
    cout << "The Intreast is :" << cal << "Rs" << "\n";

    return 0;
}