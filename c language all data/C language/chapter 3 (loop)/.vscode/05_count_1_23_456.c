/*
1
23
456
*/

#include <stdio.h>

int main()
{
    int i, j, num, sum = 1;

    printf("Enter the number :");

    scanf("%d", &num);

    for (i = 1; i <= num; i++)
    {
        for (j = 1; j <= i; j++)
        {

            printf("%d", sum);
            sum++;
        }
        printf("\n");
    }

    return 0;
}
// sucess-----------------------