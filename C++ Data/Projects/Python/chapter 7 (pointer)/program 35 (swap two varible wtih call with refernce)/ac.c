#include <stdio.h>

// Function to swap two integers using pointers (call by reference)
void swap(int *num1, int *num2) {
    int temp; // Declare a temporary variable

    // Store the value pointed to by num1 in temp
    temp = *num1; 

    // Assign the value pointed to by num2 to the location pointed to by num1
    *num1 = *num2;

    // Assign the value in temp (original value of num1) to the location pointed to by num2
    *num2 = temp;
}

int main() {
    int a, b;

    // Input two numbers from the user
    printf("Enter the first number (a): ");
    scanf("%d", &a);
    printf("Enter the second number (b): ");
    scanf("%d", &b);

    // Print the values before swapping
    printf("\nBefore swapping: a = %d, b = %d\n", a, b);

    // Call the swap function, passing the addresses of a and b
    swap(&a, &b);

    // Print the values after swapping
    printf("After swapping: a = %d, b = %d\n", a, b);

    return 0;
}