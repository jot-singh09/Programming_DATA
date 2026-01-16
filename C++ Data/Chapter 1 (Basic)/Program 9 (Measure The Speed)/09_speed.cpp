#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

int main()
{
    int distance, time, speed;

    cout << "Enter the Time :";
    cin >> time;

    cout << "Enter the Distance :";
    cin >> distance;

    speed = distance / time;

    cout << "The Speed is :" << speed;

    return 0;
}