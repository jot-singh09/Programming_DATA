#include <stdio.h>

int swap(int a , int b ){

    int temp;

    temp=a;
    a=b;
    b=temp;




   printf("The answer is \n");
   printf("%d\n",a);
   printf("%d\n",b);
   return 0;
}


int main(){
    int num,num1;
    printf("Enter The Values :");
    scanf("%d %d",&num,&num1);
     
    swap(num,num1);
}