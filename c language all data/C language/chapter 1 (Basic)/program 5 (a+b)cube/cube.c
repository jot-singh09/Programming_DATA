// write a propgram of (a+b)cube

#include <stdio.h>
#include <conio.h>
void main()
{
 int a,b,cal;

 printf("Enter the value of a :");
 scanf("%d",&a);

 printf("Enter the value of b :");
 scanf("%d",&b);

 cal=a*a*a+b*b*b+3*a*a*b+3*a*b*b; // the formula

 printf("The answer is : %d",cal);
 getch();

}