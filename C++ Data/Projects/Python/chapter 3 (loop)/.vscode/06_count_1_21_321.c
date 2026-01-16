/*
1
21
321

*/

#include <stdio.h>

int main(){
    int i,j,num ;

    printf("Enter the nunber :");

    scanf("%d",&num);
    
    for ( i = 1; i <= num; i++)
    {
        for ( j = i; j; j--)
        {
            printf("%d",j);

        }
        
        printf("\n");
    }
    

    return 0;
}
//sucess-------------------------------------