#include <stdio.h>

 int mul(int a,int b){

   int cal=a*b;
    printf("The Answer by multiply is :%d\n",cal);
    return cal;

}

int add(int a,int b){
  printf("The sum is :%d\n",a+b);
  return a+b;
}


int sub(int a,int b){
  int sub;
  sub=a-b;
  printf("The Answer by Subtract is :%d\n",sub);
  return sub;
}

int div(int a, int b){
  int div;
  div=a/b;
  printf("The Answer by Division is :%d\n",div);
  return div;
}

int main(){
     int x,y;
     printf("Enter The value of A :");
     scanf("%d",&x);
     printf("Enter The value of B :");
     scanf("%d",&y);

      mul(x,y);
      div(x,y);
      add(x,y);
      sub(x,y);
    return 0;
}