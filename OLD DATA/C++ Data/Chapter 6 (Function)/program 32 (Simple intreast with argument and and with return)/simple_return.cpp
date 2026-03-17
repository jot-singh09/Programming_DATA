#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

float amount, rate;
float time;

float interest()
{
    float simple_interest;
    simple_interest = amount * rate * time / 100;
    cout << "The Interest is :" << simple_interest << "\n";
    return simple_interest;
}


int main()
{
    cout << "Enter The  Princlple Amount" << "\n";
    cin >> amount;

    cout << "Enter The Rate Of interest" << "\n";
    cin >> rate;

    cout << "Enter The Time" << "\n";
    cin >> time;

    interest();
    
}
