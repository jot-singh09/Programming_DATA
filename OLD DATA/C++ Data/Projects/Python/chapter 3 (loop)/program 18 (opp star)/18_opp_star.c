/*

***
**
*

*/

#include <stdio.h>

int main(){
    int i,j,star ;

    printf("Enter the value :");

    scanf("%d",&star);

    for ( i = star; i; i--)
    {
        for ( j = i; j ; j--)
        {
            printf("*");
        }
        
        printf("\n");
    }
    

    return 0;
}

// sucess-------------------------------------------