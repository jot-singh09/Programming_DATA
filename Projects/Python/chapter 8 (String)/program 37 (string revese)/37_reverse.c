#include <stdio.h>
#include <string.h>

int main()
{
    int i;
    int a;
    char string[10],string1[10];
    printf("Enter The String :");

    scanf("%s", string);

    strrev(string1 , string);

    printf("%s", string1);

    return 0;
}