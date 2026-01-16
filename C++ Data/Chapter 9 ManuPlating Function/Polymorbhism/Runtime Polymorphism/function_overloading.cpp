#include <iostream> // main Liabrary Function
 #include <cstdio> // useing this we do printf & scanf  
#include <iomanip>    // use for text manuplating 
#include <cstring>   // use for   string
#include <cmath> // use for  math calculation
#include <unistd.h> // for sleep
using namespace std; // for string
     class overloading{
     public:
     void add(int nama,int name2,char a,char b) {
         int name3;
         char n;
        name3=nama+name2;
        cout << "The Result is " << name3 << endl;
        n=nama+name2;
        
        cout << "THe Word is " << n <<  endl;
     }
     
     }; 
int main()
{
    cout << "enter any word" <<   endl;
    char a,b;
    cin>>a>>b;

    cout << "enter any number " <<   endl;
    int c,d;
    cin>>c>>d;
    overloading obj;
    obj.add(a,b,c,d);
    


    return 0;
}