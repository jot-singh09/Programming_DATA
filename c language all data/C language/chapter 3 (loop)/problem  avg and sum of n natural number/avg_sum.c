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
        avg=sum/n;
        
    }
    printf("The Sum is :%d\n",sum);
    printf("The Average is :%f\n",avg);

 return 0;
}

// wrong s