#include <stdio.h>
#include <conio.h>
void main()
{
    int a,b,c,replace,replace1,replace2;
    
    printf("enter the valur of a") ;
    scanf("%d",&a) ;
    
    printf("Enter the value of b") ;
    scanf("%d",&b) ;

    printf(" temp hold the value of c") ;

    replace=a+a-a ;
    printf("|-the value of c = %d",replace );

    printf(" |after replacing a values a and b answer is = ") ;

    replace1=b+b-b ;
    printf(" |- a = %d",replace1);

    c=a ;
    printf("|- b = %d",c) ;

 



    getch();


}