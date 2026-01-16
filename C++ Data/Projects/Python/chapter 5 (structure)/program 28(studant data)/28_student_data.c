#include <stdio.h>

int main(){
     struct student
     {
         char name[100];
        int roll_no[100];
        int class[100];
        double fees[100];
     };
     struct student s1;
     
     printf("Enter the Name class Roll no and fees of Student :");
    //  scanf("%s %d %d %f",&s1.name,&s1.class,&s1.roll_no,&s1.fees);
    scanf("%s",&s1.name);
    scanf("%d",&s1.roll_no);
    scanf("%d",&s1.class);
    scanf("%f",&s1.fees);
    //  printf("The Stcanf("%s %d %d %f",&s1.name,&s1.class,&s1.roll_no,&s1.fees);udent Name is :%s\n",s1.name);
    printf("The Name is :%s\n",s1.name);
     printf("The class is :%d\n",s1.class);
     printf("The Roll No is :%d\n",s1.roll_no);
     printf("The Fees is :%f\n",s1.fees);
     
    return 0;
}