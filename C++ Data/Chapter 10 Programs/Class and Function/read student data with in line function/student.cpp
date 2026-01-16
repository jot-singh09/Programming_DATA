#include <iostream> // main Liabrary Function
 #include <cstdio> // useing this we do printf & scanf  
#include <iomanip>    // use for text manuplating 
#include <cstring>   // use for   string
#include <cmath> // use for  math calculation
#include <unistd.h> // for sleep
using namespace std; // for string
     class student{
     
     string name;
     
        public:
        void input(void){
            cout << "Enter the Name of Student" <<   endl;
             getline(cin, name); 
            cout << "Searching......" <<   endl;
            sleep(1.5);
        }
     inline void read(){
        
        if (name=="Karanjot Singh"|| name=="karanjot singh")
        {
            cout << "The name is Karanjot Singh" <<   endl;
            cout << "The Roll no is 8" <<   endl;
            cout << "The Class is +1" <<   endl;
        }
        else if (name=="Aazan"||name=="aazan")
        {
            cout << "The name is Aazan" <<   endl;
            cout << "The Roll no is 8" <<   endl;
            cout << "The Collage First Year" <<   endl;
            
        }
        else if (name=="Toheed"|| name=="toheed")
        {
            cout << "The name is Tohhed" <<   endl;
            cout << "The Roll no is 8" <<   endl;
            cout << "The Class +2" <<   endl;
            
        }
        else
        {
            cout << "Student Not Found!" <<   endl;
        }
        
        
        
        
     }
     }; 
int main()
{
    student s1;
    s1.input();
    s1.read();
    
    return 0;
}