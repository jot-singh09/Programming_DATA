#include <cstdio> // useing this we do printf & scanf  
#include <iostream> // main Liabrary Function
using namespace std; // for string
class First_Class{ // this is first class connect to secound class
public:
    
    string brand;
   
}; // calss like c class and objects are teacher and students

class Secound_Class : public First_Class{  // This is Secound Class Connect To Third Class
public:
int speed;
};
class Third_Class: public Secound_Class{ // This is connect to Secound Class and Secound is Connect to First So This is main class connect to both indirectly 
    //  so we use this class for objects 
    public:
     void print()
    {
        cout << brand << " Is at " << speed << " km/h\n ";
    }
};

int main()
{
    Third_Class drive;
    drive.brand="Tata";
    drive.speed=80;
    drive.print();
    return 0;
}