#include <iostream>  // main Liabrary Function
#include <cstdio>    // useing this we do printf & scanf
#include <iomanip>   // use for text manuplating
#include <cstring>   // use for   string
#include <fstream>   // for file handling
#include <unistd.h>  // for sleep
using namespace std; // for string

class Vehical
{
public:
    int 
    {
        cout << "Engine Started..." << endl;
    }
};

class car : public Vehical
{
public:
    start();
    void Car()
    {
        cout << "Car Is Running At 80km" << endl;
    }
};
class car_Expensive : public car
{
public:
    void Expense()
    {

        cout << "This Car is very Expensive" << endl;
    }
};
class bike : public Vehical
{
public:
    void Bike()
    {
        cout << "Bike is Running at 40km" << endl;
    }
};
class Show : public car_Expensive, public bike
{
public:
    void show()
    {

        Car();
        Bike();
        Expense();
    }
};
int main()
{
    Show obj;
    obj.show();

    return 0;
}