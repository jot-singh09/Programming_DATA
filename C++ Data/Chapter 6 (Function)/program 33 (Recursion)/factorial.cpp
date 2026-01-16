#include <cstdio> // useing this we do printf & scanf  
#include <iostream> // main Liabrary Function
using namespace std; // for string

int factorial(int n){
    int result;
    if (n==0)
    {
       return 1;
    }
   return n*factorial(n-1);
   
}

int main()
{
    int result;
    int num;
    cout << "Enter The Number :" <<   "\n";
    cin>>num;
    factorial(num);
    result=factorial(num);
    cout << "The Factorial is :" <<  result<<  "\n";
    
    
}