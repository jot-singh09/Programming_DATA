#include <cstdio>    // useing this we do printf & scanf
#include <iostream>  // main Liabrary Function
using namespace std; // for string

int main()
{
    int matrix_a[10][10];
    int matrix_b[10][10];
    int matrix_c[10][10];
    int i, j, row, col;

    cout << "Enter the Row :";
    cin >> row;

    cout << "Enter the Coloum";
    cin >> col;

    cout << "Enter The First Matrix :";
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            cin >> matrix_a[i][j];
        }
    }

    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            cout << "You Enter:";
            cout << matrix_a[i][j] << "\n";
        }
    }

    cout << "Enter The Secound Matrix";

    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            cin >> matrix_b[i][j];
        }
    }

    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            cout << "You Enter :";
            cout << matrix_b[i][j] << "\n";
        }
    }

    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            matrix_c[i][j] = matrix_a[i][j] - matrix_b[i][j];
        }
    }

    cout << "The Answer Is " << "\n";
    for (i = 0; i < row; i++)
    {
        for (j = 0; j < col; j++)
        {
            cout << matrix_c[i][j] << "\f";
        }
    }

    return 0;
}