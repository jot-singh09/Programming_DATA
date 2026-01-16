#include <stdio.h>

int main(){


    FILE *pst; 
    pst = fopen("karan1.txt", "r");
    int numm ;
    fscanf(pst ,"%d",&numm);
printf("The value in File by reading %d\n",numm);
    fscanf(pst ,"%d",&numm);
printf("The value in File by reading %d\n",numm);
  
    fclose(pst);

    return 0;
}