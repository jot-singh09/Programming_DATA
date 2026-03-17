#include <stdio.h>


int mul(int a,int b){

   int cal=a*b;
    printf("The Answer by multiply is :%d\n",cal);
    return cal;

}

int main(){
      int x,y;
     printf("Enter The value of A :");
     scanf("%d",&x);
     printf("Enter The value of B :");
     scanf("%d",&y);
    mul(x,y);
     
    return 0;
}