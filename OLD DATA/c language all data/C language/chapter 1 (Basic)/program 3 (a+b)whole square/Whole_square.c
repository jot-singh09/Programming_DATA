// write a program to do (a+b)whole square

#include <stdio.h> // this is main to write
#include <conio.h>
void main()
{
    int a,b,cal; // the is name which we take in program

    printf("Enter the value of a :"); // this is show in terminal
    scanf("%d ",&a); // this is value given by user

    printf("Enter the value of b :");
    scanf("%d ",&b);

    cal=a*a+b*b+2*a*b;
    printf("The answer is : %d ",cal);

    getch();
}