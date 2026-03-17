#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

class hi
{
public:
    int a;
};
class First_Class
{ // this is first class connect to secound class
public:
    string brand;

}; // calss like c class and objects are teacher and students

class Secound_Class : public First_Class, public hi // we can add or delete in first class then all will auto added or deleted
{
public:
};

int main()
{

    Secound_Class s1;
    s1.brand = "tata";

    s1.a = 80;
    cout << s1.brand << "\n";
    cout << s1.brand << "\n";
    cout << s1.a<< "\n";
    return 0;
}