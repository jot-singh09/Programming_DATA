// wap a program to mul two matrix

// wap a program to sub two matrix

// wap a program to add sub div mul two matrix

#include <stdio.h>

int main()
{
    int i, j,row,col;
    int a[10][10], b[10][10] ;
    int k;
    int mul[10][10] ;
   
    
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
            mul[i][j] = 0;
        }}
            for ( i = 0; i < row; i++)
    {
        for ( j = 0; j < col; j++)
             for (k = 0; k < col; k++){
       mul[i][j] = mul[i][j]+ a[i][k] * b[k][j];
    }
}


    for ( i = 0; i < row; i++)
    {
        for ( j = 0; j < col; j++)
        {
            printf("%d\f",mul[i][j]);
        }
        printf("\t");
    }

    
    

    

    return 0;
}
