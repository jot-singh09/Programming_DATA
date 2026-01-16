#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string
#include <string.h>

int main()
{
    struct liabrary
    {
        int pages;
        char name[10];
        float price;
        char book[10];
    };

    struct liabrary s1;

    strcpy(s1.name, "William Blake");
    cout << "The Author Is : " << s1.name << "\n";

    strcpy(s1.book, "Hornbill");
    cout << "The Book Name Is :" << s1.book << "\n";

    s1.pages=155;
    s1.price=654;

    cout << "The Pages is :"<<s1.pages<<"\n"<<"The Price of Book is  :"<<s1.price<<"\n";
    return 0;
};