#include <stdio.h>
enum details
{
    karan = 0,
    class_11 = 1,
    Rollno_8 = 2
};

int main()
{

    enum details choise;
    printf("Chose Your Option\n");
    printf("1.Name Of Student\n");
    printf("2.Class Of Student\n");
    printf("3.Rollno Of Student\n");
    scanf("%d", &choise);

    if (choise == 0)
    {
        printf("Karan");
    }
    else if (choise == 1)
    {
        printf("+1");
    }
    else
    {
        printf("8");
    }

    return 0;
}