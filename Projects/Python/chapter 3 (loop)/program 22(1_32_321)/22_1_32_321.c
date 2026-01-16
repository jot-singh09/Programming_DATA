#include <stdio.h>

int main(){
    int i,j,num;
    printf("Enter the number :");
    scanf("%d",&num);

    for ( i =1 ; i<=num ; i++)
    {
        for ( j = i; j ; j--)
        
        {

            printf("%d",j);
        }
        printf("\n");
        
    }
    
    return 0;
}
