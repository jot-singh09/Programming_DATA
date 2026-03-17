#include <cstdio> // useing this we do printf & scanf  
#include <iostream> // main Liabrary Function
using namespace std; // for string

void  swap(int *num,int *num1){

    cout << "Before Swaping" << "A="<<*num<<"B="<<*num1 << "\n";
    int temp;
    temp=*num;
    *num=*num1;
    *num1=temp;
    cout << "After Swaping" << "A="<<*num<<"B="<<*num1<<  "\n";
    

}

int main()
{
    int num,num1;
    int *aa,*bb;

    cout << "Enter The Value of First  Number " <<   "\n";
    cin>>num;
    cout << "Enter The Value of Secound Number " <<   "\n";
    cin>>num1;

    *aa=num;
    *bb=num1;

    swap(*aa,*bb);
    return 0;
}