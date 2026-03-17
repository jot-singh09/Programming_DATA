#include <iostream> // main Liabrary Function
 #include <cstdio> // useing this we do printf & scanf  
#include <iomanip>    // use for text manuplating 
#include <cstring>   // use for   string
#include <fstream> // for file handling
#include <unistd.h> // for sleep
using namespace std; // for string
     
    class Vehical{
    public:
    virtual void vehical()=0;
    }; 
    class car: public Vehical{
    public:
    void vehical(){
        cout << "The Car is Running at 80km per hour" <<   endl;
    }
    }; 

       class bike: public Vehical{
    public:
    void vehical(){
        cout << "The bike is Running at 50km per hour" <<   endl;
    }
    }; 
int main()
{
    Vehical *obj=new car();
    obj->vehical();
    delete obj;

    Vehical *obj1=new bike();
    obj->vehical();
    delete obj1;
    
    return 0;
}