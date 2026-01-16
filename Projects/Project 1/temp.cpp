#include <iostream> // main Liabrary Function
 #include <cstdio> // useing this we do printf & scanf  
#include <iomanip>    // use for text manuplating 
#include <cstring>   // use for   string
#include <fstream> // for file handling
#include <unistd.h> // for sleep
using namespace std; // for string
     
int main()
{
    ifstream check("hello.txt");
    if (check)
    {
        cout << "hi" <<   endl;
    }
    else
    {
        cout << "no" <<   endl;
    }
    
    
    
    return 0;
}