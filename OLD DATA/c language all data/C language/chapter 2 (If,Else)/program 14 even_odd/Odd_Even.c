// write a program for check Entered number is even or odd

#include <stdio.h>
#include <conio.h>
void main()
 
{
    int a;

    printf("Enter the number");
    scanf("%d",&a);
    if (a % 2 == 0) 
    {
        printf("This is even number :");
    }
    
    else 
    {
        printf("This is odd number: ");
    }
    
    
getch();
}

