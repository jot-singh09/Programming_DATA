// wap a program to div two matrix

// wap a program to sub two matrix

// wap a program to add sub div mul two matrix

#include <stdio.h>

int main()
{
    int i, j,  row, col;
    int a[10][10], b[10][10] ;
    int div[10][10];
    
    printf("Enter the value of row :");
    scanf("%d",&row);
    printf("Enter the value of coloum :");
    scanf("%d",&col);

    printf("Enter the value of first matix :");

    for ( i = 0; i < row; i++)
    {
        for ( j = 0; j < col; j++)
        {
            scanf("%d",&a[i][j]);
        }
        
    }
    for ( i = 0; i < row; i++)
    {
        for ( j = 0; j < col; j++)
        {
            printf(" You enter :%d\n",a[i][j]);
        }
        
    }

    //---------------2nd matrix---------------------------

    printf("Enter the value of secound matric :");
    for ( i = 0; i < row; i++)
    {
        for ( j = 0; j < col; j++)
        {
            scanf("%d",&b[i][j]);
        }
        
    }

    for ( i = 0; i < row; i++)
    {
        for ( j = 0; j < col; j++)
        {
            printf("You Enter :%d\n",b[i][j]);
        }
        
    }

    //---------------------logic-----------------------

    for ( i = 0; i < row; i++)
    {
        for ( j = 0; j < col; j++)
        {
            div[i][j]=a[i][j] / b[i][j];
        }
        
    }

    for ( i = 0; i < row; i++)
    {
        for ( j = 0; j < col; j++)
        {
            printf("%d\f",div[i][j]);
        }
        printf("\t");
    }

    
    
    
    

    return 0;
}