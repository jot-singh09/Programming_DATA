#include <stdio.h>

int main()
{
    int i = 89;
    int *j;
    j = &i;
    int *k;
    
    printf("The Ram Number is :%u\n", *j);
    return 0;
}