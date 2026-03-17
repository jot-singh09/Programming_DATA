#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

class About_Object // this is class
{ // class is private By default for public we use public:
public:
    int speed;
    string brand;
    void print()
    {
        cout << brand << " Is at " << speed << " km/h\n ";
    }
};

int main()
{
    About_Object drive; // This is Object

    cout << "First Word Must Capital\n";
    cout << "Toyata\nMahindra\nHundai\nTata\n";
    cout << "Enter The Brand Name :";
    cin >> drive.brand;
    if (drive.brand == "Toyata")
    {
        drive.speed = 80;
        drive.print();
    }

    if (drive.brand == "Tata")
    {
        drive.speed = 150;
        drive.print();
    }

    if (drive.brand == "Mahindra")
    {
        drive.speed = 250;
        drive.print();
    }
    if (drive.brand == "Hundai")
    {
        drive.speed = 100;
        drive.print();
    }
    if (drive.brand == "tata" || drive.brand == "hundai" || drive.brand == "mahindra" || drive.brand == "toyata")
    {
        cout << "First Word Must be Capital!\n";
    }
    else if (drive.brand != "Tata" && "Hundai" && "Mahindra" && "Toyata")
    {
        cout << "Try Agaian!";
    }

    return 0;
}