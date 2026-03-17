/*
1
12
123
*/

#include <stdio.h>

int main()
{
    int i, j, count;

    printf("Enter the value :");

    scanf("%d", &count);

    for (i = 1; i <= count; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("%d", j);
        }

        printf("\n");
    }

    return 0;
}

//sucess--------------------------------
