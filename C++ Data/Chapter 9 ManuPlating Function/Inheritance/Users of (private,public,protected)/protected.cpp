/*
table =           public derivation       private derivation           protected derivation
          
1.private         Not inherited           Not inherited                 Not inherited
2.protected       protected               private                       protected
3.public          public                  private                       protected

*/



#include <cstdio> // useing this we do printf & scanf  
#include <iostream> // main Liabrary Function
using namespace std; // for string

class base{
    // it is acess in class down class  only with function  and it is for security like private not directly in object
    protected :
    int a;
};

class derived: protected base{
    public:
 void print(){
    a=9;
    cout << "a is " << a<<  "\n";
 }
 };

 class third:protected base{
    public:
 void print(){
    a=10;
    cout << "a is " << a<<  "\n";
 }
 };


int main()
{
    third t;
    // t.a=89;  not acess without function
    t.print();
    return 0;
}