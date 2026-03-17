#include <iostream> // main Liabrary Function
 #include <cstdio> // useing this we do printf & scanf  
#include <iomanip>    // use for text manuplating 
#include <cstring>   // use for   string
#include <fstream> // for file handling
#include <unistd.h> // for sleep
using namespace std; // for string
     
int main()
{
    string a="9",b="12";
      int d = stoi(b);
      int e = stoi(a); // to convert string to int 
    int c=d+e;
    cout << c <<   endl;
int j=0;
      string d = to_string(j); // use to convert string to int
      cout << j <<   endl;

    return 0;
}