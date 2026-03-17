#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

class About_Classes // this is class
{                   // class is private By default for public we use public:
public:
    int speed;
    string brand;
    void print()
    {
        cout << brand << " Is at " << speed << " km/h\n ";
    }
}; // calss like c class and objects are teacher and students

int main()
{
    // from one class we can make infinity Objects
    About_Classes object1;
    About_Classes object2;
    About_Classes object3;

    object1.brand =  " Toyata";
    object1.speed = 80;
    object1.print();

    object2.brand = "Hundai";
    object2.speed = 805;
    object2.print();

    object3.brand = "Mahindra";
    object3.speed = 800;
    object3.print();
    return 0;
}