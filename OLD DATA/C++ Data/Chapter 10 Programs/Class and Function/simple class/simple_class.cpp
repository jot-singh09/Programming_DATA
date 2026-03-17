#include <iostream> // main Liabrary Function
 #include <cstdio> // useing this we do printf & scanf  
#include <iomanip>    // use for text manuplating 
#include <cstring>   // use for   string
#include <fstream> // for file handling
#include <unistd.h> // for sleep
using namespace std; // for string
     
    class car{
        
        public:
        string name;
        float price;
    void input(){
        cout << "Enter The Name of Car" <<   endl;
        cin>>name;
        cout << "Enter The Price Of Car" <<   endl;
        cin>>price;
    }
    
    }; 

    class Show: public car{
    public:
    void show(){
        cout << "The Car Name is " << name << endl;
        cout << "The Price is " << price << endl;

    }
    }; 

int main()
{
    Show obj;
    obj.input();
    cout << "Loading..." <<   endl;
    sleep(1);
    obj.show();
    return 0;
}