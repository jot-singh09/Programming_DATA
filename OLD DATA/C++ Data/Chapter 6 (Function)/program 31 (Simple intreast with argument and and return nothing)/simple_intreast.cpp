#include <cstdio> // useing this we do printf & scanf  
#include <iostream> // main Liabrary Function
using namespace std; // for string

void intreast(int time,int rate,int principle_amount){
    int simple_intreast;
    simple_intreast=principle_amount*rate*time/100;

    cout << "The Intreast is :" << simple_intreast<<  "\n";

}

int main()
{
    int time;
    int rate;
    int amount;

    cout << "Enter The Principle Amount :" <<   "\n";
    cin>>amount;

    cout << "Enter The Rate of Intreast :" <<   "\n";
    cin>>rate;

    cout << "Enter The Time :" <<   "\n";
    cin>>time;

    intreast(amount,rate,time);
    return 0;
}