#include <string.h>
#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

int main()
{
    int i;
    int a;
    char string[10], string1[10];
    cout << "Enter The String" << "\n";

    cin >> string;

    strcpy(string1, string);
    cout << string1 << "\n";

    return 0;
}