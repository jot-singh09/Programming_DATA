#include <cstdio> // useing this we do printf & scanf  
#include <iostream> // main Liabrary Function
using namespace std; // for string


/*
table =           public derivation       private derivation           protected derivation
          
1.private         Not inherited           Not inherited                 Not inherited
2.protected       protected               private                       protected
3.public          public                  private                       protected

*/








class base{
// class is private by default or use private :
// acess by member function in class
private:
int a;
int b;
};

class drived : base{
    // can not acess 
};

int main()
{
    drived d;
    d.a=8;
    cout << "The a is " << d.a<<  "\n";
    return 0;
}