#include <stdio.h>

int main(){
    int i,table,mul ;
    printf("Enter the number :");
    scanf("%d",&table);

    for ( i = 1; i <= 10; i++)
    {
        mul=table*i;
        printf("%d\n",mul);
    }
    
    return 0;
}



// #include <stdio.h>

// int main(){
//     int i,table,mul ;
//     printf("Enter the number :");
//     scanf("%d",&table);

//     for ( i = 1; i <= 10; i++)
//     {
//         printf("%d X %d=%d\n",table,i,table*i);
//     }
    
//     return 0;
// }

