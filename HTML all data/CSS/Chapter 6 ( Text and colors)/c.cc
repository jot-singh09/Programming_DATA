#include <cstdio>
#include <iostream>
using namespace std;
class car
{
public:
    int speed;
    string brand;

    void drive()
    {
         printf("%s is driving at %d Km/h\n", brand.c_str(), speed);
    }
};

int main()
{
    car mycar;
    mycar.speed = 80;
    mycar.brand = "Toyata";
    mycar.drive();
}