#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string
#include <string.h>

class company
{
public:
    char name[10];
};

class car : public company
{
public:
    char brand[10];
    int avg;
    int price;
};

class dealer : public car
{
public:
    int year;
    char dealer[10];
};

int main()
{

    dealer seller;

    strcpy(seller.name, "Tata");
    strcpy(seller.brand, "Jaguar");
    seller.avg = 10;
    seller.price = 6500000;
    seller.year = 2024;
    strcpy(seller.dealer, "5911 Motors");

    cout << "The Company of Car is : " << seller.name << "\n";
    cout << "\n";
    cout << "The Brand of Car is :" << seller.brand << "\n";
    cout << "\n";
    cout << "The Dealer is :" << seller.dealer << "\n";
    cout << "\n";
    cout << "The Manufacturing  Year Of Car is :" << seller.year << "\n";
    cout << "\n";
    cout << "The Price of Car is :" << seller.price << "\n";
    cout << "\n";
    cout << "The Average Of Car is :" << seller.avg << "\n";
    cout << "\n";

    return 0;
}