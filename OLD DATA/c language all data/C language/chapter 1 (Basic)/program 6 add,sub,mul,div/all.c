// write a program to do Add,Sub,Mul,Div two number

#include <stdio.h>
#include <conio.h>
void main()
{
    int a,b,add,sub,mul,div;

    printf("Enter the value of a :");
    scanf("%d",&a);
    printf("Enter the value of b :");
    scanf("%d",&b);

    add=a+b;
    sub=a-b;
    mul=a*b;
    div=a/b;
// \n is used to make answer in single single line
    printf("The answer after adding is :%d\n",add);
    printf("The answer after subract is %d\n",sub);
    printf("The answer after multiply is %d\n",mul);
    printf("The answer after divide is %d\n",div);
    getch();
} 