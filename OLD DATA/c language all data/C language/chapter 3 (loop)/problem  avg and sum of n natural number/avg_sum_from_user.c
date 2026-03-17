#include <stdio.h>

int main()
{
    int sum, i, n;
    sum = 0;
    float avg = 0;

    printf("enter the value of n :");
    scanf("%d", &n);

    for (i = 1; i <= n; i++)
    {
        printf("The Natural Number is :%d\n",i);
        sum=sum+i;
        avg=avg+i;
        
    }
    printf("The Sum is :%d\n",sum);
    printf("The Average is :%f\n",avg/n);

 return 0;
}

//sucess m