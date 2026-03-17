//---------------------equation------------------
/*== *                   ***
     **                  **
     ***                 *
*/

#include <stdio.h>

int main(){
    int i,j,star ;
    printf("Enter the value :");
    scanf("%d",&star );

    for ( i = 1; i <=star; i++)
    {
        for ( j =1; j<=i; j++)
        {
            printf("*");
        }
            printf("\n");
    }
    

    

    return 0;
}

// sucess------------------------------