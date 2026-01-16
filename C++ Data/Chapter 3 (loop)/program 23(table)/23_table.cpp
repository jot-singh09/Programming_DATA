#include <cstdio> // useing this we do printf & scanf  
#include <iostream> // main Liabrary Function
using namespace std; // for string


int main()
{
    int i,table;

    cout << "Enter The Number :";
    cin>>table;

    cout<<"The Table Is :"<<"\n";
    for ( i = 1; i <= 10; i++)
    {
        cout <<table<<"X"<<i<<"="<<table*i<<"\n";
    }
    
    return 0;
}