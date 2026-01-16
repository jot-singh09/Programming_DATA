#include <iostream> // main Liabrary Function
 #include <cstdio> // useing this we do printf & scanf  
#include <iomanip>    // use for text manuplating 
#include <cstring>   // use for   string
#include <fstream> // for file handling
#include <unistd.h> // for sleep
using namespace std; // for string
     

  class Mobile{
  public:
  void Compare(){
    cout << "This  is Mobile Compare " <<   endl;
  }
  }; 
  class Samsung: public Mobile{
  public:
  
  void samsung(){
    
    cout << "This is Samsung Mobile" <<   endl;
  }
  }; 
  class Battery: public Samsung {
  public:
  void batery(){
    cout << "The Samsung has Good Battery life" <<   endl;
  }
  }; 
  class Expensive: public Samsung{
  public:
  void Expense(){
    cout << "The Samsung Mobile is Expensive" <<   endl;
  }
  void line(){
    cout << "==================================" <<   endl;
    cout << "==================================" <<   endl;
  }
  }; 

  class Iqoo : public Mobile{
  public:
  void Imobile(){

      
      cout << "This is Iqoo Mobile" <<   endl;
    }
}; 

class battery: public Iqoo{
public:
void Battery(){
  cout << "This is Not Good Battery" <<   endl;
}
}; 

  class expensive: public Iqoo {
  public:
  void expense(){

  
  cout << "This is Mid Ramge Mobile" <<   endl;
  
  }
  }; 

 class show : public Expensive,public battery  {
public:
    void display() {
          
        samsung();
        battery();
        Expense();

        line(); 
        Imobile();
        Battery();
        expense();
        
    }
};
 
int main()
{

    Mobile obj;
    obj.Compare();

    show obj1;
    obj1.display();
   
    
    return 0;
}