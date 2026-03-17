#include <stdio.h>

int main()
{
    struct liabrary
    {
        char title[100];
        char author[100];
        int pages[100];
        float price[100];
    };
    struct liabrary l1;
    strcpy(l1.title, "A photograph");
    strcpy(l1.author, "A.K Willian");
    strcpy(l1.pages," = 958");
    strcpy(l1.price," = 685.321");

    printf("The author is :%s\n",l1.author);
    printf("The title is :%s\n",l1.title);
    printf("The pages is :%s\n",l1.pages);
    printf("The prices is :%s\n",l1.price);

    return 0;
}