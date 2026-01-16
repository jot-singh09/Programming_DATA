#include <stdio.h>

int main(){
    int a[100],i ;
    int num;
    printf("Enter how many numbers you want to enter :");
    scanf("%d",&num);
    printf("Enter the Numbers :");

    for ( i = 0; i < num ; i++)
    {
        scanf("%d",&a[i]);
    }
    printf("You Entered :\n");
    for ( i = 0; i < num; i++)
    {
       printf("%d\n",a[i]);
    }
    
    
    return 0;
}