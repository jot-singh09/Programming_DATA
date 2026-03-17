// write a program to measure the speed formula is distance/time

#include <stdio.h>
#include <conio.h>
void main()
{
 int speed,distance,time   ;

 printf("Enter the distance :");
 scanf("%d",&distance);

 printf("Enter the time :");
 scanf("%d",&time);

 speed=distance/time;
 printf("The speed is :%d",speed);

 getch();
 
}