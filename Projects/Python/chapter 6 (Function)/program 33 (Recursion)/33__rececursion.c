#include <stdio.h>

int table(int a){
    int n,m;
    if (a==0)
    {
        return 1;
    }
    


    return a*table(a-1);
    
    
}


int main(){
    int b;
    
    printf("Enter the value :");
    scanf("%d",&b);
    int result = table(b);
    printf("The Answer is :%d\n",result);
    table(b);
    
     ;
}