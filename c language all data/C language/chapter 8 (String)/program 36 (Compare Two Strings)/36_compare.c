#include <stdio.h>

int main() {
  char string[100][100];
  char string1[100][100];
  int i;
  printf("Enter a string: ");
  for (i = 0; i < 1; i++) {
    scanf("%s", &string[i][i]);
  }

  printf("enter the secound string:");
  for (i = 0; i < 1; i++) {
    scanf("%s", &string1[i][i]);
  }

  for (i = 0; i < 1; i++) {
    if (string[i][i] == string1[i][i]) {
      printf("the string are equal");
    } 
    else {
      printf("the string are not equal");
    }
  }
}