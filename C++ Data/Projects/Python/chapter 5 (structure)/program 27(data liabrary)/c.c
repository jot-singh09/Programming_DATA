#include <stdio.h>

int main(){
    char answer[10][10];
    int a,b,c,d,ca,i;
    printf("Where IS taj Mahal Located\n") ;
    printf("A is:Malerkotla \n");
    printf("B is : Agra\n");
    printf("C is : Ludhiana\n");
    printf("D is : Mumbai\n");
    printf("Enter Your Answer :");
    
    for ( i = 0; i < 1; i++)
    {
       
       scanf("%s",&answer[i][i]);
       
    }

    printf("\n\n");
for ( i = 0; i < 1; i++)
{
    


    if (answer[i][i]==a)
    {
        printf("Wrong Answer\n ");
        printf("Try Again Please !\n");

    }
    else if (answer[i][i]==b)
    {
        printf("The Answer Is Correct \n");
        printf("congratulation\n");
    }
    else if (answer[i][i]==c)
    {
         printf("Wrong Answer\n ");
        printf("Try Again Please !\n");
    }
    else
    {
         printf("Wrong Answer\n ");
        printf("Try Again Please !\n");
    }
    
    

}
    
    return 0;
}