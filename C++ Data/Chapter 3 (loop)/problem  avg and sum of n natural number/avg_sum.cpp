#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

int main()
{
    int i, n, num;
    float sum = 0;

    cout << "Enter How Many Number Want To Enter : ";
    cin >> n;

    cout << "Enter The numbers : ";

    for (i = 0; i < n; i++)
    {
        cin >> num;
    }
    for (i = 0; i < n; i++)
    {

        sum = sum + num;
    }

    cout << "The Sum is : " << sum << "\n";

    cout << "The Average is : " << sum / n << "\n";

    return 0;
}