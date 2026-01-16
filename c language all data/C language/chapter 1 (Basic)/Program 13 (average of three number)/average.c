// write a program to find average og three nummbers

#include <stdio.h>
#include <conio.h>
void main()
{
 int a,b,c,cal;
 
 printf("Enter the value of a :");
 scanf("%d",&a);

 printf("Enter the value of b :");
 scanf("%d",&b);

 printf("Enter the value of c :");
 scanf("%d",&c);

 cal=a+b+c/3;
 printf("The answer is :%d",cal);

 getch();
}