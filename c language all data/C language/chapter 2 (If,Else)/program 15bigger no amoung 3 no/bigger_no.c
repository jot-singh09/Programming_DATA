#include <stdio.h>
#include <conio.h>
void main()
{ 
    int a,b,c;
    printf("Enter the Value of a");
    scanf("%d",&a);
    printf("Enter the Value of b");
    scanf("%d",&b);
    printf("Enter the Value of c");
    scanf("%d",&c);

    if (a>b && a>c)
    {
        printf("a is bigger number :%d\n",a);
    }
    else if (b>c)
    {
        printf("b is bigger number :%d\n",b);
    }

    else{
        printf("c is bigger number :%d\n",c);
    }
    
    
    getch();
}