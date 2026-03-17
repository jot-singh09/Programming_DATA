#include <stdio.h>

int simple(int p, int r, int t)
{

    int cal;
    cal = p * r * t / 100;
    printf("The Answer is :%d\n", cal);
    return cal;
}

int main()
{

    int x, y, z;
    printf("Enter The Principal Amount :");
    scanf("%d", &x);
    printf("Enter The Rate :");
    scanf("%d", &y);
    printf("Enter The Time :");
    scanf("%d", &z);
    simple(x, y, z);

    // dont write return 0; because we write return in function return cal;
    
}