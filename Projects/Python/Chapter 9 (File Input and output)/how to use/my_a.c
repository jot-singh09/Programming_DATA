#include <stdio.h>

int main()
{
    FILE *fptr;
    fptr = fopen("karan.txt", "a"); // By Using A We can write After Writing Thing in TXT Files
    int num = 432;
    fprintf(fptr, "%d", num);
    
    fclose(fptr);

    
    return 0;
}