//Write a program of simple intrest

#include <stdio.h>
#include <conio.h>
void main()
{
    int principle_amount,rate,time,cal;

    printf("Enter the principle_amount :");
    scanf("%d",&principle_amount);

    printf("Enter the rate :");
    scanf("%d",&rate);

    printf("Enter the time :");
    scanf("%d",&time);

    cal=principle_amount*rate*time/100;
    printf("The answer is :%d",cal);

    getch();

}